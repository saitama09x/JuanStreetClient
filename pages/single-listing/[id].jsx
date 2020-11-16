import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Header from '../Components/Header';
import propserv from '../../services/property-services';
import { SliderBanner } from '../Components/Sliders';
import { DetailSingle } from '../Components/Details';

export async function getServerSideProps({params}){
    let res = await propserv.getSingleProperty(params.id);
    let features = await propserv.getFeatureProps();

    return { props : { listings : res, features : features }}
}


class SingleListing extends Component{

	constructor(props){
		super(props)

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
				<DetailSingle listings={listings} features={features}/>
			</div>
		)
	}


}

export default SingleListing