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
          municipalities : [],
          ref_feature : [],
          is_loading : false,
          is_searching : false
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

      propserv.get_referrence_feature().then((res) => {

        if(res){
            this.setState({
                ref_feature : res
            })
          }

      })
        
    }

    do_search_listing(proptype, propadd, local, feature, mun, min, max){
    console.log(max) 
        const { do_search, display_listings, search } = this.props
        var _proptype = (proptype != "") ? proptype : search.proptype
        var _propadd = (propadd != "") ? propadd : search.propadd
        var _propmun = (mun != "") ? mun : search.propmun
        
        this.setState({
          is_loading : true,
          is_searching : true
        })
        
        display_listings([])

        propserv.searchListings({ province : _propadd, proptype : _proptype, proplocal : local, feature : feature, municipality: _propmun, min : min, max : max, sort : 'asc' }).then((res) => {
            display_listings(res)
            this.setState({
              is_loading : false,
              is_searching : false
            })
        })
    }

  	render() {
      
      const { provinces, municipalities, proptypes, ref_feature, is_loading, is_searching } = this.state
      const { search, do_search, display_listings } = this.props
  		return (
  			<div>
			<Head>
		      <meta charSet="utf-8" />
    			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    			<title>Search Listings</title>
          <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
		      </Head>
		      <div id="main-wrapper">
		      	<Header />
		      	<SearchBanner 
              search={search}            
              provinces={provinces} 
              proptypes={proptypes}
              municipalities={municipalities}
              display_listings={display_listings}
              search_listing={(proptype, propadd, local, feature, mun, min, max) => this.do_search_listing(proptype, propadd, local, feature, mun, min, max)}
              ref_feature={ref_feature}
              />
		      	<ResultListing prop_loading={is_loading} is_searching={is_searching} />
            <Footer />
		      </div>
  			</div>

  		)

  	}


}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);