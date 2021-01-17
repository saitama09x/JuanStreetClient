import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Header from '../../Components/Header';
import { AgentGallery } from '../../Components/Gallery';
import agentserv from '../../services/agent-services';

class Agents extends Component{

constructor(props){
	super(props)
	this.state = {
		agents : []
	}

	this.onSearhAgent = this.onSearhAgent.bind(this)
}


componentDidMount(){

agentserv.getUserProfile().then((res) => {
	
	this.setState({
		agents : res
	})
})

}

onSearhAgent(e){

	var val = e.target.value
	agentserv.searchAgent(val).then((res) => {
		this.setState({
			agents : res
		})
	})
}

render(){
	const { agents } = this.state
	

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
			     <div className="page-title">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									
									<h2 className="ipt-title">All Agents</h2>
									<span className="ipn-subtitle">Lists of our all expert agents</span>
									
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<div className="input-with-icon">
										<input type="text" className="form-control" placeholder="Search agents" onChange={(e) => this.onSearhAgent(e)}/>
										<i className="ti-search"></i>
									</div>
								</div>	
							</div>
							<div className="col-lg-2 col-md-3">
								<a href="#" className="btn search-btn">Find Agents</a>
							</div>
						</div>
						<AgentGallery agents={agents}/>
			     	</div>
		     </section>
		 </div>
	</div>
	)
}

}

export default Agents