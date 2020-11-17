import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link'
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


class ResultListing extends Component{

	constructor(props){
  	  super(props)
  	}

  	componentDidMount(){
      const { search, display_listings } = this.props

      propserv.searchListings({ province : search.propadd, proptype : search.proptype }).then((res) => {
      		display_listings(res)
      })

    }


	render(){
		const { search } = this.props

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
								
							
								<div className="col-lg-12 col-md-12">
									{ search.listings?.length ? search.listings.map((item, index) => {
										return (
										<div className="property-listing property-1" key={"property-"+index}>
											
											<div className="listing-img-wrapper">
												<Link href={"/single-listing/" + item.property_id}><a>
													<img src={item.media_filename} className="img-fluid mx-auto" alt="" />
												</a></Link>
												<div className="listing-like-top">
													<i className="ti-heart"></i>
												</div>
												<div className="listing-rating">
													<i className="ti-star filled"></i>
													<i className="ti-star filled"></i>
													<i className="ti-star filled"></i>
													<i className="ti-star filled"></i>
													<i className="ti-star"></i>
												</div>
												<span className="property-type">{item.listing_type}</span>
											</div>
											
											<div className="listing-content">
											
												<div className="listing-detail-wrapper">
													<div className="listing-short-detail">
														<h4 className="listing-name"><Link href={"/single-listing/" + item.property_id}><a>{item.property_name}</a></Link></h4>
														<span className="listing-location"><i className="ti-location-pin"></i>{item.zip_postcode + ", " + item.line_3_area_locality + ", " + item.country_state_province + ", " + item.country}</span>
													</div>
													<div className="list-author">
														<a href="#"><img src="https://via.placeholder.com/400x400" className="img-fluid img-circle avater-30" alt=""/></a>
													</div>
												</div>
											
												<div className="listing-features-info">
													<ul>
														<li><strong>Bed:</strong>{item.bedrooms}</li>
														<li><strong>Bath:</strong>{item.bathrooms}</li>
														<li><strong>Sqft:</strong>{item.property_size}</li>
													</ul>
												</div>
											
												<div className="listing-footer-wrapper">
													<div className="listing-price">
														<h4 className="list-pr">Php {item.vendor_requested_price}</h4>
													</div>
													<div className="listing-detail-btn">
														<Link href={"/single-listing/" + item.property_id}><a className="more-btn">More Info</a></Link>
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
				</div>
			</section>
		)

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ResultListing)