import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Header from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import propserv from '../../services/property-services';
import AgentServ from '../../services/agent-services';
import { SliderBanner } from '../../Components/Sliders';
import { DetailSingle } from '../../Components/Details';
import Swal from 'sweetalert2'

export async function getServerSideProps({params}){
    let res = await propserv.getSingleProperty(params.id);
    let features = await propserv.getFeatureProps();
    return { props : { listings : res, features : features }}
}


class SingleListing extends Component{

	constructor(props){
		super(props)
		this.sendEmail = this.sendEmail.bind(this)

	}

	sendEmail(email, phone, comment){
		var obj = {
			email : email,
			phone : phone,
			comment : comment
		}

		AgentServ.sendEmail(obj).then((res) => {
			if(res){
				Swal.fire({
				  text: 'Email Sent',
				  icon: 'success',
				})
			}
		})

	}

	render(){
		const { listings, features } = this.props
		return (
			<div>
				<Head>
			        <meta charSet="utf-8" />
        			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        			<title>JuanStreet Single Listing</title>	
			      </Head>
				<Header />
				<SliderBanner 
					listings={listings} 
				/>
				<DetailSingle listings={listings} features={features} sendEmail={(obj) => this.sendEmail(obj.email, obj.phone, obj.comment)}/>
				<Footer />
			</div>
		)
	}


}

export default SingleListing