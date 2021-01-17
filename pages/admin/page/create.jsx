import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import Head from 'next/head'

import AdminHeader from "../../../Components/admin/AdminHeader";
import AdminSidebar from "../../../Components/admin/AdminSidebar";
import blogserv from '../../../services/blog-services';

const initialData = {
  blocks: [
    {
      key: '16d0k',
      text: 'You can edit this text.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [{ offset: 0, length: 23, style: 'BOLD' }],
      entityRanges: [],
      data: {},
    },
    {
      key: '98peq',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'ecmnc',
      text:
        'Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        { offset: 0, length: 14, style: 'BOLD' },
        { offset: 133, length: 9, style: 'BOLD' },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: 'fe2gn',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '4481k',
      text:
        'With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        { offset: 34, length: 19, style: 'BOLD' },
        { offset: 117, length: 4, style: 'BOLD' },
        { offset: 68, length: 10, style: 'ANYCUSTOMSTYLE' },
      ],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
}

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 4,
  },
  BOLD: {
    color: '#395296',
    fontWeight: 'bold',
  },
  ANYCUSTOMSTYLE: {
    color: '#00e400',
  },
}
class CreatePage extends Component{
	constructor(props) {
    	super(props);
    	this.state = {
        pagetitle : '',
        permalink : '',
	      editorState: EditorState.createWithContent(convertFromRaw(initialData)),
	      showToolbar: false,
	      windowWidth: 0,
	      toolbarMeasures: {
	        w: 0,
	        h: 0,
	      },
	      selectionMeasures: {
	        w: 0,
	        h: 0,
	      },
	      selectionCoordinates: {
	        x: 0,
	        y: 0,
	      },
	      toolbarCoordinates: {
	        x: 0,
	        y: 0,
	      },
	      showRawData: false,
	    }
	    this.focus = () => this.editor.focus()
	    this.onChange = (editorState) =>  { 
	    	this.setState({ editorState }) 
	    }
	}

  onClickEditor = () => {
    this.focus()
    this.checkSelectedText()
  }

  onPageTitle = (e) => {
      var val = e.target.value;
      this.setState({
          pagetitle : val
      })
  }

  // 1- Check if some text is selected
  checkSelectedText = () => {
    if (typeof window !== 'undefined') {
      const text = window.getSelection().toString()
      if (text !== '') {
        // 1-a Define the selection coordinates
        this.setSelectionXY()
      } else {
        // Hide the toolbar if nothing is selected
        this.setState({
          showToolbar: false,
        })
      }
    }
  }

  // 2- Identify the selection coordinates
  setSelectionXY = () => {
    var r = window.getSelection().getRangeAt(0).getBoundingClientRect()
    var relative = document.body.parentNode.getBoundingClientRect()
    // 2-a Set the selection coordinates in the state
    this.setState(
      {
        selectionCoordinates: r,
        windowWidth: relative.width,
        selectionMeasures: {
          w: r.width,
          h: r.height,
        },
      },
      () => this.showToolbar()
    )
  }

  // 3- Show the toolbar
  showToolbar = () => {
    this.setState(
      {
        showToolbar: true,
      },
      () => this.measureToolbar()
    )
  }

  // 4- The toolbar was hidden until now
  measureToolbar = () => {
    // 4-a Define the toolbar width and height, as it is now visible
    this.setState(
      {
        toolbarMeasures: {
          w: this.elemWidth,
          h: this.elemHeight,
        },
      },
      () => this.setToolbarXY()
    )
  }

  // 5- Now that we have all measures, define toolbar coordinates
  setToolbarXY = () => {
    let coordinates = {}

    const {
      selectionMeasures,
      selectionCoordinates,
      toolbarMeasures,
      windowWidth,
    } = this.state

    const hiddenTop = selectionCoordinates.y < toolbarMeasures.h
    const hiddenRight =
      windowWidth - selectionCoordinates.x < toolbarMeasures.w / 2
    const hiddenLeft = selectionCoordinates.x < toolbarMeasures.w / 2

    const normalX =
      selectionCoordinates.x - toolbarMeasures.w / 2 + selectionMeasures.w / 2
    const normalY = selectionCoordinates.y - toolbarMeasures.h

    const invertedY = selectionCoordinates.y + selectionMeasures.h
    const moveXToLeft = windowWidth - toolbarMeasures.w
    const moveXToRight = 0

    coordinates = {
      x: normalX,
      y: normalY,
    }

    if (hiddenTop) {
      coordinates.y = invertedY
    }

    if (hiddenRight) {
      coordinates.x = moveXToLeft
    }

    if (hiddenLeft) {
      coordinates.x = moveXToRight
    }

    this.setState({
      toolbarCoordinates: coordinates,
    })
  }

  handleKeyCommand = (command) => {
    const { editorState } = this.state
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  toggleToolbar = (inlineStyle) => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    )
  }

  submitPage(){
  	var content = this.state.editorState.getCurrentContent()
  	var raw = convertToRaw(content);
  	var html = stateToHTML(content);
    blogserv.addPage({
        title : this.state.pagetitle,
        content : html
    }).then((res) => {
        if(res.status == 200){
          this.setState({
            permalink : res.data
          })
        }
    })
  }
	render(){
		const { editorState, permalink } = this.state
		const toolbarStyle = {
	      display: 'block',
	      backgroundColor: '#b9b9b9',
	      color: '#000',
	      padding: '10px 0px',
    	  marginBottom: '10px'
	    }
		return (
			<div id="wrapper">
						<Head>
		        		<meta charSet="utf-8" />
		        		</Head>
					<AdminHeader />
					<AdminSidebar />
				<div className="content-page">

	            	<div className="content">
	            		<div className='d-flex justify-content-end'>
					 		<div className="page-title-box">
					            <div className="page-title-right">
					                <ol className="breadcrumb m-0" style={{'backgroundColor' : '#fff'}}>
					                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
					                    <li className="breadcrumb-item">Page</li>
					                    <li className="breadcrumb-item active">Create</li>
					                </ol>
					            </div>
					        </div>
			        	</div>
			        	<div className='row'>
			        		<div className='col-md-7'>
			        			<div className='form-group'>
			        				<label><strong>Create Page:</strong> </label>
			        				<input type='text' className='form-control' onChange={(e) => this.onPageTitle(e)}/>
			        			</div>
			        			<div className='form-group'>
			        				<p><strong>Permalink: </strong>{"/" + permalink}</p>
			        			</div>
			        			<div className='form-group'>
			        			<div
						          style={toolbarStyle}
						        >
						          <ToolBar editorState={editorState} />
						        </div>
						        <div onClick={this.onClickEditor} onBlur={this.checkSelectedText} style={{border: 'solid 1px #000', padding : '10px'}}>
			        				<Editor
			        				    customStyleMap={styleMap}
							            editorState={editorState}
							            handleKeyCommand={this.handleKeyCommand}
							            onChange={this.onChange}
							            placeholder="Tell a story..."
							            editorKey="foobar"
							            spellCheck={false}
							            ref={(element) => {
							              this.editor = element
							            }}
							          />
							      </div>
							      <div className='mt-2'>
							      	<button onClick={(e) => this.submitPage()} type='button' className='btn btn-md btn-primary'>Publish</button>
							      </div>
			        			</div>
			        		</div>
			        	</div>
	            	</div>

	           	</div>
           	</div>
		)

	}

}

class ToolbarButton extends Component {
  constructor() {
    super()
    this.onToggle = (e) => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
  }

  render() {
    const buttonStyle = {
      padding: 10,
    }
    return (
      <span onMouseDown={this.onToggle} style={buttonStyle}>
        {this.props.label}
      </span>
    )
  }
}

var toolbarItems = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Code', style: 'CODE' },
  { label: 'Surprise', style: 'ANYCUSTOMSTYLE' },
]

const ToolBar = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div>
      {toolbarItems.map((toolbarItem) => (
        <ToolbarButton
          key={toolbarItem.label}
          active={currentStyle.has(toolbarItem.style)}
          label={toolbarItem.label}
          onToggle={props.onToggle}
          style={toolbarItem.style}
        />
      ))}
    </div>
  )
}


export default CreatePage