import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from '../../Components/Header';
import Head from 'next/head'
import { SearchBanner } from '../../Components/Banner';
import ResultListing from '../../Components/ResultListing';
import { Footer } from '../../Components/Footer';
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
          proptypes : [],
          ref_feature : [],
          is_loading : false
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

      propserv.get_referrence_feature().then((res) => {

        if(res){
            this.setState({
                ref_feature : res
            })
          }

      })
        
    }

    do_search_listing(proptype, propadd, local, feature){        
        const { do_search, display_listings, search } = this.props
        var _proptype = (proptype != "") ? proptype : search.proptype
        var _propadd = (propadd != "") ? propadd : search.propadd
        this.setState({
          is_loading : true
        })
        propserv.searchListings({ province : _propadd, proptype : _proptype, proplocal : local, feature : feature }).then((res) => {
            display_listings(res)
            this.setState({
              is_loading : false
            })
        })
    }

  	render() {
      
      const { provinces, proptypes, ref_feature, is_loading} = this.state
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
              search={search}            
              provinces={provinces} 
              proptypes={proptypes} 
              display_listings={display_listings}
              search_listing={(proptype, propadd, local, feature) => this.do_search_listing(proptype, propadd, local, feature)}
              ref_feature={ref_feature}
              />
		      	<ResultListing prop_loading={is_loading}/>
            <Footer />
		      </div>
  			</div>

  		)

  	}


}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);