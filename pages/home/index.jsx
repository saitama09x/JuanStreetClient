import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link }from 'react-router-dom';
import Head from 'next/head'
import Header from '../Components/Header';
import { HomeBanner, HomeBanner4 } from '../Components/Banner';
import { FeatureProp } from '../Components/Sliders';
import {connect} from 'react-redux';
import { do_search_listings } from '../../redux/search-actions'


const mapStateToProps = state => ({
    search: state.search
});

const mapDispatchToProps = {
    do_search: do_search_listings,
};


class Home extends Component{

  	constructor(props){
  		super(props)

  	}

	componentDidMount(){

		
  	}

	render(){

	 const { featureProps, proptypes, provinces, do_search } = this.props


	 var settings = {
	    slidesToShow:3,
		  arrows: false,
		  dots: true,
		  autoplay:true,
		  responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				arrows: false,
				slidesToShow:2
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				arrows: false,
				slidesToShow:1
			  }
			}
		  ]
	  };
  
		return (
			<div>
				<Head>
			        <meta charSet="utf-8" />
        			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        			<title>Rikada - Powerful Residence Real Estate Template</title>	
			      </Head>

			      <div id="main-wrapper">
			      	<Header />
			      	<HomeBanner4 
			      		proptypes={proptypes} 
			      		provinces={provinces} 
			      		do_search={do_search}
			      		/>
			      	<section>
			      		<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="sec-heading center">
									<h2>Featured Properties</h2>
									<p>Find new & featured property located in your local city.</p>
								</div>
							</div>
						</div>
						<FeatureProp settings={settings} properties={featureProps}/>
			      	</section>
			      </div>
			</div>
		)

	}

}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
