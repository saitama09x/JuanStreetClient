import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default class ResultListing extends Component{


	render(){

		return (
			<section>
			
				<div className="container">
					<div className="row">
						
						<div className="col-lg-12 col-sm-12 list-layout">
							<div className="row">
							
								<div className="col-lg-12 col-md-12">
									<div className="filter-fl">
										<h4>Total Property Find is: <span className="theme-cl">207</span></h4>
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
									<div className="property-listing property-1">
											
										<div className="listing-img-wrapper">
											<a href="single-property-2.html">
												<img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" />
											</a>
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
											<span className="property-type">For Sale</span>
										</div>
										
										<div className="listing-content">
										
											<div className="listing-detail-wrapper">
												<div className="listing-short-detail">
													<h4 className="listing-name"><a href="single-property-2.html">Resort Valley Ocs</a></h4>
													<span className="listing-location"><i className="ti-location-pin"></i>3848 Swick Hill, New Orleans</span>
												</div>
												<div className="list-author">
													<a href="#"><img src="https://via.placeholder.com/400x400" className="img-fluid img-circle avater-30" alt=""/></a>
												</div>
											</div>
										
											<div className="listing-features-info">
												<ul>
													<li><strong>Bed:</strong>2</li>
													<li><strong>Bath:</strong>1</li>
													<li><strong>Sqft:</strong>3,700</li>
												</ul>
											</div>
										
											<div className="listing-footer-wrapper">
												<div className="listing-price">
													<h4 className="list-pr">$632,580</h4>
												</div>
												<div className="listing-detail-btn">
													<a href="single-property-2.html" className="more-btn">More Info</a>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)

	}

}