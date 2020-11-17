import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from '../Components/Header';
import Head from 'next/head'
import { SearchBanner } from '../Components/Banner';
import ResultListing from '../Components/ResultListing';
import {connect} from 'react-redux';
import { do_search_listings, do_display_listings } from '../../redux/search-actions'
import propserv from '../../services/property-services';

const mapStateToProps = state => ({
    search: state.search
});

const mapDispatchToProps = {
    do_search: do_search_listings,
    display_listings : do_display_listings
};


class Listings extends Component{

	  constructor(props){
  		super(props)
      this.state = {
          provinces : [],
          proptypes : []
      }
      this.do_search_listing = this.do_search_listing.bind(this)
  	}

    componentDidMount(){

        propserv.getProvince().then((res) => {

            if(res){
                var provarr = [];
                if(res){
                  for(var i in res){
                      provarr.push({label : res[i].provDesc, value : res[i].provDesc})
                  }
                }

                this.setState({
                    provinces : provarr
                }) 
            }

        })
    
      propserv.getPropertyTypeRef().then((res) => {
          if(res){
            this.setState({
                proptypes : res
            })
          }
      })
        
    }

    do_search_listing(proptype, propadd){
        const { do_search, display_listings } = this.props
        var _proptype = (proptype==null) ? "" : proptype
        var _propadd = (propadd==null) ? "" : propadd
        propserv.searchListings({ province : _propadd, proptype : _proptype }).then((res) => {
            display_listings(res)
        })
    }

  	render() {
      
      const { provinces, proptypes} = this.state
      const { search, do_search, display_listings } = this.props
  		return (
  			<div>
			<Head>
		        <meta charSet="utf-8" />
    			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    			<title>Search Listings</title>	
		      </Head>
		      <div id="main-wrapper">
		      	<Header />
		      	<SearchBanner 
              provinces={provinces} 
              proptypes={proptypes} 
              display_listings={display_listings}
              search_listing={(proptype, propadd) => this.do_search_listing(proptype, propadd)}
              />
		      	<ResultListing />
		      </div>
  			</div>

  		)

  	}


}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);