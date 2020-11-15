import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Header from '../Components/Header';
import propserv from '../../services/property-services';
import { SliderBanner } from '../Components/Sliders';

export async function getServerSideProps({params}){
    let res = await propserv.getSingleProperty(params.id);
    return { props : { listings : res }}
}


class SingleListing extends Component{

	constructor(props){
		super(props)

	}

	render(){
		const { listings } = this.props
		
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
			</div>
		)
	}


}

export default SingleListing