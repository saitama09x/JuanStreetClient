import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link'
import {connect} from 'react-redux';
import { do_search_listings, do_display_listings } from '../redux/search-actions'
import propserv from '../services/property-services';
import { SliderResultListing } from './Sliders';
import currencyFormatter from 'currency-formatter'
import conf from '../settings';
const { IMG_URL } = conf

const mapStateToProps = state => ({
    search: state.search
});

const mapDispatchToProps = {
    do_search: do_search_listings,
    display_listings : do_display_listings
};


class ResultListing extends Component{

	constructor(props){
  	  super(props)
  	  this.state = {
  	  	is_loading : true
  	  }
  	}

  	componentDidMount(){
      const { search, display_listings } = this.props
      var $this = this
      propserv.searchListings({ province : search.propadd, proptype : search.proptype, proplocal : search.proplocal, feature : [] }).then((res) => {
      		display_listings(res)
      		this.setState({
      			is_loading : false
      		})
      })

    }


	render(){
		const { search, prop_loading } = this.props
		const { is_loading } = this.state
		
		if(is_loading || prop_loading){
			return (
				<div className="container">
					<div className="row justify-content-center">
						<img src="/assets/img/loader.gif" width="100px"/>
					</div>
				</div>
			)
		}

		return (
			<section>
			
				<div className="container">
					<div className="row">
						
						<div className="col-lg-12 col-sm-12 list-layout">
							<div className="row">
							
								<div className="col-lg-12 col-md-12">
									<div className="filter-fl">
										<h4>Total Property Find is: <span className="theme-cl">{search.listings?.length}</span></h4>
										<div className="btn-group custom-drop">
											<button type="button" className="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												Short By<i className="ti-angle-down"></i>
											</button>
											<div className="dropdown-menu pull-right animated flipInX">
												<a href="#">Latest</a>
												<a href="#">Most View</a>
												<a href="#">Most Popular</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='row'>
							{ search.listings.length ? search.listings.map((item, index) => {
								var vendorprice = currencyFormatter.format(item.vendor_requested_price, { locale: 'en-PH' });
								return (
										<div className='col-lg-4 col-md-6 col-sm-12' key={"property-"+index}>
											<div className='property-listing property-2'>
												<div className='listing-img-wrapper'>
													<SliderResultListing images={item.images} />
													<span className="property-type">{item.listing_type}</span>
												</div>
												<div className="listing-detail-wrapper pb-0">
													<div className="listing-short-detail">
														<h4 className="listing-name">
														<Link href={"/single-listing/" + item.property_id}><a>{item.property_name}</a></Link><i className="list-status ti-check"></i>
														</h4>
													</div>
												</div>
												<div className="price-features-wrapper">
													<div className="listing-price-fx">
														<h6 className="listing-card-info-price price-prefix">{vendorprice}<span className="price-suffix">/mo</span></h6>
													</div>
													<div className="list-fx-features">
														<div className="listing-card-info-icon">
															<span className="inc-fleat inc-bed">{item.bedrooms}</span>
														</div>
														<div className="listing-card-info-icon">
															<span className="inc-fleat inc-bath">{item.bathrooms}</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									)
								}) : <strong>No Result Available</strong> }
								
							</div>
						</div>
					</div>
				</div>
			</section>
		)

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ResultListing)