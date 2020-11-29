import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const HomeGallery = (props) => {
	const { provinces_listing } = props
	return (
			<div className="container">
				
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="sec-heading center">
							<h2>Find Properties By Locations</h2>
							<p>Top & perfect 200+ location to find best properties.</p>
						</div>
					</div>
				</div>
				
				<div className="row">
					
					{ provinces_listing?.length && provinces_listing?.map((item, index) => {

						return (
							<div className="col-lg-3 col-md-3 col-sm-6">
								<div className="location-listing">
									<div className="location-listing-thumb">
										<a href="listings-list-with-sidebar.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid" alt="" /></a>
									</div>
									<div className="location-listing-caption">
										<h4><a href="listings-list-with-sidebar.html">{item.prov}</a></h4>
										<span className="theme-cl">{item.count} Property</span>
									</div>
								</div>
							</div>
						)

					})}
					
				</div>
			</div>

	)

}

export const BlogGallery = () => {

	return (

	<div className="container">
	
		<div className="row">
			<div className="col text-center">
				<div className="sec-heading center">
					<h2>Trending Articles</h2>
					<p>We post regulary most powerful articles for help and support.</p>
				</div>
			</div>
		</div>
		
		<div className="row">
			

			<div className="col-lg-4 col-md-6">
				<div className="blog-wrap-grid">
					
					<div className="blog-thumb">
						<a href="blog-detail.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid" alt="" /></a>
					</div>
					
					<div className="blog-info">
						<span className="post-date"><i className="ti-calendar"></i>30 july 2018</span>
					</div>
					
					<div className="blog-body">
						<h4 className="bl-title"><a href="blog-detail.html">Why people choose listio for own properties</a></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
						<a href="blo-detail.html" className="bl-continue">Continue</a>
					</div>
					
				</div>
			</div>
			

			<div className="col-lg-4 col-md-6">
				<div className="blog-wrap-grid">
					
					<div className="blog-thumb">
						<a href="blog-detail.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid" alt="" /></a>
					</div>
					
					<div className="blog-info">
						<span className="post-date"><i className="ti-calendar"></i>10 August 2018</span>
					</div>
					
					<div className="blog-body">
						<h4 className="bl-title"><a href="blog-detail.html">List of benifits and impressive listeo services</a></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
						<a href="blo-detail.html" className="bl-continue">Continue</a>
					</div>
					
				</div>
			</div>
			

			<div className="col-lg-4 col-md-6">
				<div className="blog-wrap-grid">
					
					<div className="blog-thumb">
						<a href="blog-detail.html"><img src="https://via.placeholder.com/1280x880" className="img-fluid" alt="" /></a>
					</div>
					
					<div className="blog-info">
						<span className="post-date"><i className="ti-calendar"></i>30 Sep 2018</span>
					</div>
					
					<div className="blog-body">
						<h4 className="bl-title"><a href="blog-detail.html">What people says about listio properties</a></h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
						<a href="blo-detail.html" className="bl-continue">Continue</a>
					</div>
					
				</div>
			</div>
			
		</div>
		
	</div>		

	)


}


export const AgentGallery = (props) => {
	
	const { agents } = props

	return (
		<div className="row">
			{ agents.length && agents.map((item) => {
				var add_1 = (item.address_1 != null) ? item.address_1 + ", " : ""
				var add_2 = (item.address_1 != null) ? item.address_2 + ", " : ""
				var city = (item.city != null) ? item.city + ", " : ""
				var zip = (item.zipcode != null) ? item.zipcode : ""
				var phone = (item.personalcon1 != null) ? item.personalcon1 : ""
				var photo = (item.photo_url != null) ? item.photo_url : ""
				return (
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="agents-grid">
							
							<div className="jb-bookmark"><a data-toggle="tooltip" data-original-title="Bookmark"><i className="ti-bookmark"></i></a></div>
							<div className="agent-call"><a href="#"><i className="lni-phone-handset"></i></a></div>
							<div className="agents-grid-wrap">
								
								<div className="fr-grid-thumb">
									<a href="freelancer-detail.html">
										<div className="overall-rate">4.4</div>
										<img src={photo} className="img-fluid mx-auto" alt="" />
									</a>
								</div>
								<div className="fr-grid-deatil">
									<h5 className="fr-can-name"><a href="#">{item.first_name + " " + item.middle_name + " " + item.last_name}</a></h5>
									<span className="fr-position"><i className="lni-map-marker"></i>{add_1 +  add_2 + city + zip }</span>
									<div className="fr-can-rating">
										<i className="ti-star filled"></i>
										<i className="ti-star filled"></i>
										<i className="ti-star filled"></i>
										<i className="ti-star filled"></i>
										<i className="ti-star"></i>
									</div>
								</div>
								
							</div>
							
							<div className="fr-grid-info">
								<ul>
									<li>Property<span>{item.totalprop}</span></li>
									<li>Email<span>{item.email}</span></li>
									<li>Phone<span>{phone}</span></li>
								</ul>
							</div>
							
							<div className="fr-grid-footer">
								<Link href={"/agent/" + item.owner_id} ><a className="btn btn-outline-theme full-width">View Profile<i className="ti-arrow-right ml-1"></i></a></Link>
							</div>
							
						</div>
					</div>
				)

			})}
			
		</div>

	)


}

export const ProfileListingGallery = (props) => {
	const { listings, agent } = props
	if(!listings.length){
		return <div className="col-lg-12 col-md-12 col-sm-12 list-layout"><h4>No Result Found</h4></div>
	}

	return (
		<div className="col-lg-12 col-md-12 col-sm-12 list-layout">
			{listings.length && listings.map((item) => {

				return (
					<div className="property-listing property-1">
							
					<div className="listing-img-wrapper">
					<a href="single-property-2.html">
					<img src={item.media_filename} className="img-fluid mx-auto" alt="" />
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
					<span className="property-type">{item.listing_type}</span>
					</div>

					<div className="listing-content">

					<div className="listing-detail-wrapper">
					<div className="listing-short-detail">
					<h4 className="listing-name"><a href="single-property-2.html">{item.property_name}s</a></h4>
					<span className="listing-location"><i className="ti-location-pin"></i>{item.address_1 + ", " + item.address_2 + ", " + item.country_state_province}</span>
					</div>
					<div className="list-author">
					<a href="#"><img src={agent.photo_url} className="img-fluid img-circle avater-30" alt="" /></a>
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
					<h4 className="list-pr">{item.vendor_requested_price}</h4>
					</div>
					<div className="listing-detail-btn">
					<a className="more-btn">More Info</a>
					</div>
					</div>

					</div>

				</div>
				)

			})}
			
		</div>
	

	)

}