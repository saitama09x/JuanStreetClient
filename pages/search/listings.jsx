import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from '../Components/Header';
import Head from 'next/head'
import { SearchBanner } from '../Components/Banner';
import ResultListing from '../Components/ResultListing';

class Listings extends Component{

	constructor(props){
  		super(props)
  	}

  	render() {

  		return (
  			<div>
			<Head>
		        <meta charSet="utf-8" />
    			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    			<title>Search Listings</title>	
		      </Head>
		      <div id="main-wrapper">
		      	<Header />
		      	<SearchBanner />
		      	<ResultListing />
		      </div>
  			</div>

  		)

  	}


}

export default Listings