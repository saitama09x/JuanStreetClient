import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom'
import { useRouter } from 'next/router'


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