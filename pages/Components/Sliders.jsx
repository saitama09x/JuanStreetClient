import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const FeatureProp = (props) => {

	const { settings, properties } = props

	return (
		 <Slider {...settings}>
		 	{(properties.length) && properties.map((item, index) => {
		 		return (
		 		<div className="single-items">
					<div className="property-listing property-2 modern">
				
						<div className="listing-img-wrapper">
							<div className="modern-pro-wrap">
								<span className="property-type">{item.listing_type}</span>
							</div>
							<div className="list-img-slide">
								<div className="click">
									<div><a href="single-property-1.html"><img src={item.media_filename} className="img-fluid mx-auto" alt="" /></a></div>
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
								<span className="home-type theme-cl">{item.property_type}</span>
								<h4 className="listing-name"><a href="single-property-1.html">{item.property_name}</a></h4>
								<span className="property-locations"><i className="ti-location-pin"></i>{item.line_1_number_building + ', ' + item.line_2_number_street + ', ' + item.line_3_area_locality + ', ' + item.town_city + ', ' + item.zip_postcode}</span>
							</div>
						</div>
						
						<div className="price-features-wrapper simple">
							<div className="slide-property-info mb-4">
								<ul>
									<li>Beds: {item.bedrooms}</li>
									<li>Baths: {item.bathrooms}</li>
									<li>sq ft: {item.property_size}</li>
								</ul>
							</div>
						</div>
						
						<div className="modern-property-footer">
							<div className="property-author">
								<div className="path-img"><a href="agent-page.html"><img src="https://via.placeholder.com/400x400" className="img-fluid" alt="" /></a></div>
								<h5><a href="agent-page.html">{item.first_name}</a></h5>
							</div>
							<span className="property-pulish-date">3 days ago</span>
						</div>
					</div>
				</div>
		 		)
		 	})}

		 

		 </Slider>
	)


}