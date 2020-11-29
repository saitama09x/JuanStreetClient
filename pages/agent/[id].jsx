import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Header from '../Components/Header';
import ProfileListing from '../Components/ProfileListing';
import agentserv from '../../services/agent-services';
import {AgentSidebar} from '../Components/Sidebar';
export async function getStaticPaths() {

  const res = await agentserv.getUserProfile()

  const paths = res.map((item) => ({
    params: { id: item.owner_id.toString() },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({params}){
    let agent = await agentserv.getSingleUser(params.id);

    if(!agent) {
	    return {
	      notFound: true,
	    }
	}

    return { props : { agent : agent }}
}


class AgentProfile extends Component{

constructor(props){
		super(props)
}


render(){
	
	const { agent } = this.props

	if(!agent?.length){
		return <span>Not Found</span>
	}

	const _agent = agent[0];
	var add_1 = (_agent.address_1 != null) ? _agent.address_1 + ", " : ""
	var add_2 = (_agent.address_1 != null) ? _agent.address_2 + ", " : ""
	var city = (_agent.city != null) ? _agent.city + ", " : ""
	var zip = (_agent.zipcode != null) ? _agent.zipcode : ""
	var phone = (_agent.personalcon1 != null) ? _agent.personalcon1 : ""
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
											<img src={_agent.photo_url} alt="" />
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
							<ProfileListing user_id={_agent.account_id} agent={_agent}/>
						</div>
							<div className="col-lg-4 col-md-12 col-sm-12">
								<AgentSidebar />	
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