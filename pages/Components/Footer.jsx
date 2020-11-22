import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom'
import { useRouter } from 'next/router'


export const Footer = (props) => {

	return (
	<footer className="dark-footer skin-dark-footer">
		<div>
			<div className="container">
				<div className="row">
					
					<div className="col-lg-3 col-md-3">
						<div className="footer-widget">
							<img src="assets/img/logo-red-light.png" className="img-footer" alt="" />
							<div className="footer-add">
								<p>Collins Street West, Victoria 8007, Australia.</p>
								<p>+1 246-345-0695</p>
								<p>info@example.com</p>
							</div>
							
						</div>
					</div>		
					<div className="col-lg-2 col-md-2">
						<div className="footer-widget">
							<h4 className="widget-title">Navigations</h4>
							<ul className="footer-menu">
								<li><a href="about-us.html">About Us</a></li>
								<li><a href="faq.html">FAQs Page</a></li>
								<li><a href="checkout.html">Checkout</a></li>
								<li><a href="contact.html">Contact</a></li>
								<li><a href="blog.html">Blog</a></li>
							</ul>
						</div>
					</div>
							
					<div className="col-lg-2 col-md-2">
						<div className="footer-widget">
							<h4 className="widget-title">The Highlights</h4>
							<ul className="footer-menu">
								<li><a href="#">Apartment</a></li>
								<li><a href="#">My Houses</a></li>
								<li><a href="#">Restaurant</a></li>
								<li><a href="#">Nightlife</a></li>
								<li><a href="#">Villas</a></li>
							</ul>
						</div>
					</div>
					
					<div className="col-lg-2 col-md-2">
						<div className="footer-widget">
							<h4 className="widget-title">My Account</h4>
							<ul className="footer-menu">
								<li><a href="#">My Profile</a></li>
								<li><a href="#">My account</a></li>
								<li><a href="#">My Property</a></li>
								<li><a href="#">Favorites</a></li>
								<li><a href="#">Cart</a></li>
							</ul>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-3">
						<div className="footer-widget">
							<h4 className="widget-title">Download Apps</h4>
							<a href="#" className="other-store-link">
								<div className="other-store-app">
									<div className="os-app-icon">
										<i className="lni-playstore theme-cl"></i>
									</div>
									<div className="os-app-caps">
										Google Play
										<span>Get It Now</span>
									</div>
								</div>
							</a>
							<a href="#" className="other-store-link">
								<div className="other-store-app">
									<div className="os-app-icon">
										<i className="lni-apple theme-cl"></i>
									</div>
									<div className="os-app-caps">
										App Store
										<span>Now it Available</span>
									</div>
								</div>
							</a>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<div className="footer-bottom">
			<div className="container">
				<div className="row align-items-center">
					
					<div className="col-lg-6 col-md-6">
						<p className="mb-0">© 2019 Rikada. Designd By <a href="https://themezhub.com">Themez Hub</a> All Rights Reserved</p>
					</div>
					
					<div className="col-lg-6 col-md-6 text-right">
						<ul className="footer-bottom-social">
							<li><a href="#"><i className="ti-facebook"></i></a></li>
							<li><a href="#"><i className="ti-twitter"></i></a></li>
							<li><a href="#"><i className="ti-instagram"></i></a></li>
							<li><a href="#"><i className="ti-linkedin"></i></a></li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
	</footer>

	)


}