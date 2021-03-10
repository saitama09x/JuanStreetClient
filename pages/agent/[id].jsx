import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Header from '../../Components/Header';
import ProfileListing from '../../Components/ProfileListing';
import agentserv from '../../services/agent-services';
import propserv from '../../services/property-services';
import conf from '../../settings';
import {AgentSidebar} from '../../Components/Sidebar';
const { AGENT_IMG, BASE_URL } = conf


export async function getServerSideProps({params}){
    let agent = await agentserv.getSingleUser(params.id);

    if(!agent) {
	    return {
	      notFound: true,
	    }
	}

    return { props : { agent : agent, agent_id : params.id }}
}


class AgentProfile extends Component{

constructor(props){
	super(props)
	this.state = {
		provinces : [],
		listings : [],
		is_refresh : false,
		municipalities : []
	}
	this.onSearhListing = this.onSearhListing.bind(this)
	this.onLoadedData = this.onLoadedData.bind(this)
}

onSearhListing(obj){
  const { agent, agent_id } = this.props
  agentserv.searchListing(agent_id, obj).then((res) => {
    this.setState({
      listings : res,
      is_refresh : true
    })
  })
  
}

onLoadedData(){
	const { is_refresh } = this.state
	if(is_refresh){
		this.setState({
			is_refresh : false
		})
	}
}

componentDidMount(){

	propserv.getProvince().then((res) => {

		if(res){
		  var provarr = [];
	      for(var i in res){
	          provarr.push({label : res[i].provDesc, value : res[i].provDesc})
	      }
		  this.setState({
			provinces : provarr
		  })
		}

	})

	propserv.getMunicipalities().then((res) => {
			if(res){
				var munarr = []
				for(var i in res){
					var label = res[i]['citymunDesc'];
					var prov = res[i]['provDesc'];
					var zipcode = res[i]['zipCode'];
					munarr.push({
						label : label,
						value : label,
						prov : prov
					})
				}
				this.setState({
		      		municipalities : munarr	
		      	})
			}
		})
	
}


render(){
	
	const { agent, agent_id } = this.props
	const { provinces, is_refresh, listings, municipalities } = this.state

	if(!agent?.length){
		return <span>Not Found</span>
	}

	const _agent = agent[0];
	var add_1 = (_agent.address_1 != null) ? _agent.address_1 + ", " : ""
	var add_2 = (_agent.address_1 != null) ? _agent.address_2 + ", " : ""
	var city = (_agent.city != null) ? _agent.city + ", " : ""
	var zip = (_agent.zipcode != null) ? _agent.zipcode + ", " : ""
	var phone = (_agent.personalcon1 != null) ? _agent.personalcon1 : ""
	var photo = BASE_URL + _agent.photo_url;
	if(_agent.photo_url.indexOf('http') != -1 || _agent.photo_url.indexOf('google') != -1){
			photo = _agent.photo_url
	}
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<title>Rikada - Powerful Residence Real Estate Template</title>	
		     </Head>
		     <div id="main-wrapper">
		     	<Header />
		     	<section>
		     		<div className="agent-page">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<div className="agency agency-list shadow-0 mt-2 mb-2">
									
										<a href="agency-page.html" className="agency-avatar">
											<img src={photo} alt="" />
										</a>
										
										<div className="agency-content">
											<div className="agency-name">
												<h4><a href="agency-page.html">{_agent.first_name + " " + _agent.middle_name + " " + _agent.last_name}</a></h4>
												<span><i className="lni-map-marker"></i>{zip + add_1 + add_2 + city}</span>
											</div>
											
											<div className="agency-desc">
											<p>{_agent.personal_bio}</p>
											</div>
											
											<ul className="agency-detail-info">
												<li><i className="lni-phone-handset"></i>{phone}</li>
												<li><i className="lni-envelope"></i><a href="#">{_agent.email}</a></li>
											</ul>
											
											<ul className="social-icons">
												<li><a className="facebook" href="#"><i className="lni-facebook"></i></a></li>
												<li><a className="twitter" href="#"><i className="lni-twitter"></i></a></li>
												<li><a className="linkedin" href="#"><i className="lni-instagram"></i></a></li>
												<li><a className="linkedin" href="#"><i className="lni-linkedin"></i></a></li>
											</ul>
											<div className="clearfix"></div>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
		     	</section>
		     	<section className="gray">
					<div className="container">
						<div className='row'>
						<div className="col-lg-8 col-md-12 col-sm-12">
							<div className="block-wrap">
								<div className="block-header">
									<h4 className="block-title">Agent Info</h4>
								</div>
								
								<div className="block-body">
									<ul className="dw-proprty-info">
										<li><strong>Company</strong>{_agent.company_name}</li>
										<li><strong>Email</strong>{_agent.email_address}</li>
										<li><strong>Phone</strong>+91 235 658 4758</li>
										<li><strong>Skype</strong>isva24lia</li>
										<li><strong>Address</strong>320, Near Iswar</li>
										<li><strong>City</strong>New York</li>
										<li><strong>Country</strong>United State</li>
										<li><strong>Stab.</strong>2007</li>
									</ul>
								</div>
								
							</div>
							<ProfileListing 
								user_id={agent_id} 
								agent={_agent} 
								listings={listings}
								is_refresh={is_refresh}
								onLoadedData={this.onLoadedData}/>
						</div>
							<div className="col-lg-4 col-md-12 col-sm-12">
								<AgentSidebar 
									provinces={provinces} 
									municipalities={municipalities}
									onSearhListing={(obj) => this.onSearhListing(obj)} />	
							</div>
						</div>
					</div>
				</section>
		     </div>
		</div>
	)

}

}

export default AgentProfile