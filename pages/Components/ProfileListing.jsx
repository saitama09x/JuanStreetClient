import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link'
import {ProfileListingGallery} from '../Components/Gallery';
import {AgentSidebar} from '../Components/Sidebar';
import agentserv from '../../services/agent-services';

class ProfileListing extends Component{

	constructor(props){
  	  super(props)
  	  this.state = {
  	  	listings : []
  	  }
  	}

  	componentDidMount(){
  		const { user_id } = this.props
  		agentserv.getUserListings(user_id).then((res) => {
  			this.setState({
  				listings : res
  			})
  		})

  	}

  	render(){
  		const { listings } = this.state
  		const { agent } = this.props
  		return (
  			<div className="block-wraps">
  				<div className="block-header">
					<ul className="nav nav-tabs customize-tab" id="myTab" role="tablist">
					  <li className="nav-item">
						<a className="nav-link active" id="rental-tab" data-toggle="tab" href="#rental" role="tab" aria-controls="rental" aria-selected="true">Rental</a>
					  </li>
					  <li className="nav-item">
						<a className="nav-link" id="sale-tab" data-toggle="tab" href="#sale" role="tab" aria-controls="sale" aria-selected="false">For Sale</a>
					  </li>
					</ul>
				</div>
			<div className="block-body">
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="rental" role="tabpanel" aria-labelledby="rental-tab">
						<div className="row">
								<ProfileListingGallery listings={listings} agent={agent}/>
							</div>
						</div>
					</div>
				</div>
  			</div>
  		)
  	}

}

export default ProfileListing