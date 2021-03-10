import React, { Component, useState, createRef, useEffect } from 'react';
import ReactDOM from 'react-dom'
export default class Select2 extends Component{


	constructor(props){
		super(props)
		this.state = {
			initialize : false,
			selectedText : "",
			selectedVal : "",
			searchText : "",
			defaultText : "",
			placeholder : "",
			isTyping : false,
			isFocus : false,
			isSearch : false,
			showAll : false,
			isUpdate : false,
			options : [],
			tempOptions : [],
			inputref : createRef()
		}

	}

	componentDidMount(){
		const { initOptions, defaultText, defaultVal } = this.props
		if(defaultText != "" && defaultVal != ""){
			this.setState({
				selectedText : defaultText,
				selectedVal : defaultVal,
				defaultText : defaultText
			})
		}
	}

	shouldComponentUpdate(nextProps, nextState){
		const { isTyping, options, searchText, showAll, initialize } = nextState
		const { initOptions, placeholder, defaultText, isUpdate } =  nextProps

		if(initOptions?.length != this.props.initOptions?.length){
			this.setState({
				initialize : false
			})
			return true
		}

		if(!initialize){
			this.setState({
				options : initOptions,
				tempOptions : initOptions,
				placeholder : placeholder,
				initialize : true
			})
		}

		if(isTyping){
			var filter = options.filter((val, index) => {
				let str = new String(val.label)
				var rgxp = new RegExp(searchText, "i");
				if(rgxp.test(str.toString())){
					return val;
				}
				return false
			})
			
			this.setState({
				tempOptions : filter
			})
		}

		if(showAll){
			this.setState({
				tempOptions : options
			})
		}

		if(nextState.defaultText != nextProps.defaultText){
			this.setState({
				selectedText : this.props.defaultText,
				selectedVal : '',
				defaultText : this.props.defaultText
			})
		}

		return true
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		const { isTyping, showAll, isUpdate } = prevState

		if(isTyping){
			this.setState({
				isTyping : false
			})
		}

		if(showAll){
			this.setState({
				showAll : false
			})
		}
	}

	OnTypingInput(e){
		var val = e.target.value
		if(this.props.isServer == true){
			this.props.onServerType(val)
		}

		this.setState({
			isTyping : true,
			searchText : val
		})
	}

	OnTypingFocus(){
		this.setState({
			isFocus : true,
			showAll : true,
			selectedText : ""
		});
	}

	OnTypingBlur(){
		this.setState({
			isTyping : true,
			isFocus : false 
		});
	}

	OnSelectVal(e){
		var label = e.target.innerText;
		var data = e.target.getAttribute("data-val")
		
		this.props.onChange(e, data, label)
		
		this.setState({
			isTyping : false,
			selectedText : label,
			placeholder : ""
		})

		this.state.inputref.current.value = ""
	}

	OnRemoveSelect(e){
		const { placeholder } = this.props
		this.setState({
			isTyping : false,
			isFocus : false,
			selectedText : "",
			placeholder : placeholder
		});
	}

	


	render(){

		const InitOptions = (props) => {
			const { options, OnSelectVal } = props
			const [isHover, setIsHover] = useState(-1)

			useEffect(() => {
		   		
		    });

			if(options?.length){
				return (
					<div className="row-flex">
						{options?.map(function(val, index){
							var hoverClass = "opt-items";
							if(index == isHover){
								hoverClass = "opt-items hover-item"
							}
							return (
								<div className={ hoverClass } 
									key={"label-" + index}
									onMouseOver={(e) => setIsHover(index)} 
									onMouseOut={(e) => setIsHover(-1)}  
									onMouseDown={(e) => OnSelectVal(e)}
									data-val={val.value}>{val.label}</div>
							)
						})}
					</div>
				)
				
			}
			return (
				<div>No Available Selected</div>
			)
		}

		// style={{backgroundColor:'#000 !important'}}
		return (
			<div className="select-wrapper" >
				<div className="select-component" >
					<div className="select-input">
						<div className="selected-val">
							{this.state.selectedText != "" &&
								<span>{this.state.selectedText}</span>
							}
						</div>
						
						<input autoComplete="no" disabled={this.props.isDisabled} className="form-control" onFocus={(e) => this.OnTypingFocus() } 
						onBlur={(e) => this.OnTypingBlur()} 
						onChange={(e) => this.OnTypingInput(e)}
						placeholder={(this.state.selectedText == "") ? this.props.placeholder : ''}
						ref={this.state.inputref}
						/>

				
					</div>
					{this.state.isFocus &&
					<div className="dropdown-wrapper">
						<div className="dropdown-options" >
								<InitOptions options={this.state.tempOptions} OnSelectVal={(e) => this.OnSelectVal(e)}/>
					
						</div>
					</div>
					}
				</div>
			</div>
		)

	}


}