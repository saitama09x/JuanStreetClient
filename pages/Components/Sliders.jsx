import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const FeatureProp = (props) => {

	const { settings } = props

	return (
		 <Slider {...settings}>

		 	<div className="single-items">
				<div className="property-listing property-2 modern">
			
					<div className="listing-img-wrapper">
						<div className="modern-pro-wrap">
							<span className="property-type">For Sale</span>
						</div>
						<div className="list-img-slide">
							<div className="click">
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
							</div>
						</div>
						<div className="listing-price-with-compare">
							<h4 className="list-pr">$2,580</h4>
							<div className="lpc-right">
								<a href="compare-property.html" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i className="ti-control-shuffle"></i></a>
								<a href="#" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i className="ti-heart"></i></a>
							</div>
						</div>
						
					</div>
					
					<div className="listing-detail-wrapper pb-0">
						<div className="listing-short-detail">
							<span className="home-type theme-cl">Apartment</span>
							<h4 className="listing-name"><a href="single-property-1.html">New Clue Apartment</a></h4>
							<span className="property-locations"><i className="ti-location-pin"></i>591 Creek Road, London 02115</span>
						</div>
					</div>
					
					<div className="price-features-wrapper simple">
						<div className="slide-property-info mb-4">
							<ul>
								<li>Beds: 4</li>
								<li>Baths: 2</li>
								<li>sq ft: 5270</li>
							</ul>
						</div>
					</div>
					
					<div className="modern-property-footer">
						<div className="property-author">
							<div className="path-img"><a href="agent-page.html"><img src="https://via.placeholder.com/400x400" className="img-fluid" alt="" /></a></div>
							<h5><a href="agent-page.html">Shaurya Preet</a></h5>
						</div>
						<span className="property-pulish-date">3 days ago</span>
					</div>
				</div>
			</div>
			
			<div className="single-items">
				<div className="property-listing property-2 modern">
			
					<div className="listing-img-wrapper">
						<div className="modern-pro-wrap">
							<span className="property-type">For Rent</span>
							<span className="property-featured theme-bg">Featured</span>
						</div>
						<div className="list-img-slide">
							<div className="click">
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
							</div>
						</div>
						<div className="listing-price-with-compare">
							<h4 className="list-pr">$4,580</h4>
							<div className="lpc-right">
								<a href="compare-property.html" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i className="ti-control-shuffle"></i></a>
								<a href="#" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i className="ti-heart"></i></a>
							</div>
						</div>
						
					</div>
					
					<div className="listing-detail-wrapper pb-0">
						<div className="listing-short-detail">
							<span className="home-type theme-cl">Villa</span>
							<h4 className="listing-name"><a href="single-property-1.html">Resort Valley Ocs</a></h4>
							<span className="property-locations"><i className="ti-location-pin"></i>1122 Flint Street, New York 02115</span>
						</div>
					</div>
					
					<div className="price-features-wrapper simple">
						<div className="slide-property-info mb-4">
							<ul>
								<li>Beds: 3</li>
								<li>Baths: 2</li>
								<li>sq ft: 3625</li>
							</ul>
						</div>
					</div>
					
					<div className="modern-property-footer">
						<div className="property-author">
							<div className="path-img"><a href="agent-page.html"><img src="https://via.placeholder.com/400x400" className="img-fluid" alt="" /></a></div>
							<h5><a href="agent-page.html">Shaurya Preet</a></h5>
						</div>
						<span className="property-pulish-date">1 days ago</span>
					</div>
				</div>
			</div>
			
			<div className="single-items">
				<div className="property-listing property-2 modern">
			
					<div className="listing-img-wrapper">
						<div className="modern-pro-wrap">
							<span className="property-type">For Sale</span>
						</div>
						<div className="list-img-slide">
							<div className="click">
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
							</div>
						</div>
						<div className="listing-price-with-compare">
							<h4 className="list-pr">$2,752</h4>
							<div className="lpc-right">
								<a href="compare-property.html" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i className="ti-control-shuffle"></i></a>
								<a href="#" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i className="ti-heart"></i></a>
							</div>
						</div>
						
					</div>
					
					<div className="listing-detail-wrapper pb-0">
						<div className="listing-short-detail">
							<span className="home-type theme-cl">Commercial</span>
							<h4 className="listing-name"><a href="single-property-1.html">Luxury Home In Manhattan</a></h4>
							<span className="property-locations"><i className="ti-location-pin"></i>3490 Marion Street, CA 02115</span>
						</div>
					</div>
					
					<div className="price-features-wrapper simple">
						<div className="slide-property-info mb-4">
							<ul>
								<li>Beds: 4</li>
								<li>Baths: 2</li>
								<li>sq ft: 6958</li>
							</ul>
						</div>
					</div>
					
					<div className="modern-property-footer">
						<div className="property-author">
							<div className="path-img"><a href="agent-page.html"><img src="https://via.placeholder.com/400x400" className="img-fluid" alt="" /></a></div>
							<h5><a href="agent-page.html">Dan Singh</a></h5>
						</div>
						<span className="property-pulish-date">5 days ago</span>
					</div>
				</div>
			</div>

			<div className="single-items">
				<div className="property-listing property-2 modern">
			
					<div className="listing-img-wrapper">
						<div className="modern-pro-wrap">
							<span className="property-type">For Sale</span>
						</div>
						<div className="list-img-slide">
							<div className="click">
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
								<div><a href="single-property-1.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid mx-auto" alt="" /></a></div>
							</div>
						</div>
						<div className="listing-price-with-compare">
							<h4 className="list-pr">$2,752</h4>
							<div className="lpc-right">
								<a href="compare-property.html" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i className="ti-control-shuffle"></i></a>
								<a href="#" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i className="ti-heart"></i></a>
							</div>
						</div>
						
					</div>
					
					<div className="listing-detail-wrapper pb-0">
						<div className="listing-short-detail">
							<span className="home-type theme-cl">Commercial</span>
							<h4 className="listing-name"><a href="single-property-1.html">Luxury Home In Manhattan</a></h4>
							<span className="property-locations"><i className="ti-location-pin"></i>3490 Marion Street, CA 02115</span>
						</div>
					</div>
					
					<div className="price-features-wrapper simple">
						<div className="slide-property-info mb-4">
							<ul>
								<li>Beds: 4</li>
								<li>Baths: 2</li>
								<li>sq ft: 6958</li>
							</ul>
						</div>
					</div>
					
					<div className="modern-property-footer">
						<div className="property-author">
							<div className="path-img"><a href="agent-page.html"><img src="https://via.placeholder.com/400x400" className="img-fluid" alt="" /></a></div>
							<h5><a href="agent-page.html">Dan Singh</a></h5>
						</div>
						<span className="property-pulish-date">5 days ago</span>
					</div>
				</div>
			</div>

		 </Slider>
	)


}