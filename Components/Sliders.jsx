import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import conf from '../settings';
const { IMG_URL } = conf

export const FeatureProp = (props) => {

	const { settings, properties } = props

	return (
		 <Slider {...settings}>
		 	{(properties?.length) && properties?.map((item, index) => {
		 		var days_ago = "";
		 		if(item.day_ago == 1){
		 			days_ago = item.day_ago + " day ago"
		 		}
		 		else if(item.day_ago > 1){
		 			days_ago = item.day_ago + " days ago"	
		 		}
		 		return (
		 		<div className="single-items" key={"slider-item-" + index}>
					<div className="property-listing property-2 modern">
				
						<div className="listing-img-wrapper">
							<div className="modern-pro-wrap">
								<span className="property-type">{item.listing_type}</span>
							</div>
							<div className="list-img-slide">
								<div className="click">
									<div><Link href={"/single-listing/" + item.propid}><a><img src={IMG_URL + item.media} className="img-fluid mx-auto" alt="" /></a></Link></div>
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
							<span className="property-pulish-date">{ days_ago }</span>
						</div>
					</div>
				</div>
		 		)
		 	})}

		 

		 </Slider>
	)


}

export const SliderBanner = (props) => {
	const { listings } = props
	const { property, address, details } = listings;

	const [sliderNav, setSliderNav] = useState(null);
	const [sliderBig, setSliderBig] = useState(null);

	var settings = {
	      slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  adaptiveHeight: true,
		  asNavFor: sliderNav
	};

	var NavSettings = {
	      slidesToShow : 3,
          swipeToSlide : true,
	      asNavFor: sliderBig,
		  dots: false,
		  centerMode: false,
		  focusOnSelect: true
	};

	return (
		<div>
			<div className="single-advance-property gray">
				<div className="container-fluid p-0">
					<div className="row align-items-center">
					
						<div className="col-lg-7 col-md-7 col-sm-12">
							<div className="slider-for">
							 	<Slider {...settings} ref={ slider => setSliderBig(slider) }>
								{ listings?.media?.length && listings.media.map((item, index) => {

									return (
										<a  key={'slider-' + index} className="item-slick"><img src={IMG_URL + item.media_filename} alt="Alt" /></a>
									)

								})}
								</Slider>

							</div>
							
						</div>
						
						<div className="col-lg-5 col-md-5 col-sm-12">
							<div className="single-advance-caption">
							
								<div className="property-name-info">
									<h4 className="property-name">{property.property_name}</h4>
									<p className="property-desc">{property.description}</p>
								</div>
								
								<div className="property-price-info">
									<h4 className="property-price">Php {details.vendor_requested_price}</h4>
									<p className="property-sqa">{details.property_size}<sub>SqM</sub></p>
								</div>
								
								<div className="property-statement">
									<ul>
										<li>
											<i className="lni-apartment"></i>
											<div className="ps-trep">
												<span>Type</span>
												<h5 className="ps-type">{details.property_type}</h5>
											</div>
										</li>
										<li>
											<i className="lni-restaurant"></i>
											<div className="ps-trep">
												<span>Build On</span>
												<h5 className="ps-type">2007</h5>
											</div>
										</li>
										<li>
											<i className="lni-helmet"></i>
											<div className="ps-trep">
												<span>Maintenence Fee</span>
												<h5 className="ps-type">$710/PA</h5>
											</div>
										</li>
										<li>
											<i className="lni-leaf"></i>
											<div className="ps-trep">
												<span>Let</span>
												<h5 className="ps-type">Own</h5>
											</div>
										</li>
									</ul>
								</div>
								
							</div>
						</div>
					
					</div>
					
					<div className="row">
						<div className="col-lg-12 col-md-12">
								<Slider {...NavSettings} ref={ slider => setSliderNav(slider) }>
									{ listings?.media?.length && listings.media.map((item, index) => {

										return (
											<a  key={'sliderNav-' + index} className="item-slick"><img src={"http://localhost:3001/uploads/" + item.media_filename} alt="Alt" /></a>
										)

									})}
								</Slider>
						</div>
					</div>
				</div>
			</div>
			
			<section className="spd-wrap">
				<div className="container">
					<div className="row">
						
						<div className="col-lg-12 col-md-12">
						
							<div className="slide-property-detail">
								
								<div className="slide-property-first">
									<div className="pr-price-into">
										<h2>Php {details.vendor_requested_price} <i>/ monthly</i> <span className="prt-type rent">{property.listing_type}</span></h2>
										<span><i className="lni-map-marker"></i> {address.zip_postcode + ", " + address.line_3_area_locality + ', ' + address.town_city + ', ' + address.country}</span>
									</div>
								</div>
								
								<div className="slide-property-sec">
									<div className="pr-all-info">
										
										<div className="pr-single-info">
											<div className="share-opt-wrap">
												<button type="button" className="btn-share" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-original-title="Share this">
													<i className="lni-share"></i>
												</button>
												<div className="dropdown-menu animated flipInX">
													<a href="#" className="cl-facebook"><i className="lni-facebook"></i></a>
													<a href="#" className="cl-twitter"><i className="lni-twitter"></i></a>
													<a href="#" className="cl-gplus"><i className="lni-google-plus"></i></a>
													<a href="#" className="cl-instagram"><i className="lni-instagram"></i></a>
												</div>
											</div>

										</div>
										
										<div className="pr-single-info">
											<a href="JavaScript:Void(0);" data-toggle="tooltip" data-original-title="Get Print"><i className="ti-printer"></i></a>
										</div>
										
										<div className="pr-single-info">
											<a href="JavaScript:Void(0);" className="compare-button" data-toggle="tooltip" data-original-title="Compare"><i className="ti-control-shuffle"></i></a>
										</div>
										
										<div className="pr-single-info">
											<a href="JavaScript:Void(0);" className="like-bitt add-to-favorite" data-toggle="tooltip" data-original-title="Add To Favorites"><i className="lni-heart-filled"></i></a>
										</div>
										
									</div>
								</div>
								
							</div>
							
						</div>
					</div>
				</div>
			</section>
		</div>
	)

}


export const TestimonialSlider = (props) => {
	const { testimonial_settings } = props

	return (
	<div className="container">
		<div className="row align-items-center">
			
			<div className="col-lg-6 col-md-7">
				<h2 className="text-light">What People Says?</h2>
				
				<div className="smart-textimonials smart-light" id="smart-textimonials">
					 <Slider {...testimonial_settings}>

					<div className="item">
						<div className="smart-tes-content">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
						
						<div className="smart-tes-author">
							<div className="st-author-box">
								<div className="st-author-thumb">
									<img src="https://via.placeholder.com/400x400" className="img-fluid" alt="" />
								</div>
								<div className="st-author-info">
									<h4 className="st-author-title">Adam Williams</h4>
									<span className="st-author-subtitle">CEO Of Microwoft</span>
								</div>
							</div>
						</div>
					</div>
					

					<div className="item">
						<div className="smart-tes-content">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
						
						<div className="smart-tes-author">
							<div className="st-author-box">
								<div className="st-author-thumb">
									<img src="https://via.placeholder.com/400x400" className="img-fluid" alt="" />
								</div>
								<div className="st-author-info">
									<h4 className="st-author-title">Rita Deluxea</h4>
									<span className="st-author-subtitle">CEO Of Microwoft</span>
								</div>
							</div>
						</div>
					</div>
					

					<div className="item">
						<div className="smart-tes-content">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
						
						<div className="smart-tes-author">
							<div className="st-author-box">
								<div className="st-author-thumb">
									<img src="https://via.placeholder.com/400x400" className="img-fluid" alt="" />
								</div>
								<div className="st-author-info">
									<h4 className="st-author-title">Adam Gilwarm</h4>
									<span className="st-author-subtitle">CEO Of Applioa</span>
								</div>
							</div>
						</div>
					</div>
					</Slider>
				</div>
			</div>
			
			<div className="col-lg-6 col-md-5">
				<img src="assets/img/avatar-large-1.png" className="img-fluid" alt="" />
			</div>
			
		</div>
	</div>


	)


}
