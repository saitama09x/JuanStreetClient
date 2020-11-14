
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link }from 'react-router-dom';

class Header extends Component{


render(){
	
	return (
		<div className="header header-light">
				<div className="container">
					<nav id="navigation" className="navigation navigation-landscape">
						<div className="nav-header">
							<a className="nav-brand" href="#">
								<img src="assets/img/logo.png" className="logo" alt="" />
							</a>
							<div className="nav-toggle"></div>
						</div>
						<div className="nav-menus-wrapper">
							<ul className="nav-menu">
							
								<li className="active"><a href="#">Home<span className="submenu-indicator"></span></a>
									<ul className="nav-dropdown nav-submenu">
										<li><a className="active" href="index.html">Home Layout 1</a></li>
										<li><a href="home-2.html">Home Layout 2</a></li>
										<li><a href="home-3.html">Home Layout 3</a></li>
										<li><a href="home-4.html">Home Layout 4</a></li>
										<li><a href="home-5.html">Home Layout 5</a></li>
										<li><a href="home-6.html">Home Layout 6</a></li>
										<li><a href="home-7.html">Home Layout 7</a></li>
										<li><a href="home-8.html">Home Layout 8</a></li>
										<li><a href="map.html">Map Home Layout</a></li>
									</ul>
								</li>
								
								<li><a>Listings<span className="submenu-indicator"></span></a>
									<ul className="nav-dropdown nav-submenu">
										<li><a >List Layout<span className="submenu-indicator"></span></a>
											<ul className="nav-dropdown nav-submenu">
												<li><a href="list-layout-with-sidebar.html">With Sadebar</a></li>                                    
												<li><a href="list-layout-with-map.html">With Map</a></li>                                    
												<li><a href="list-layout-full.html">Full Width</a></li>
											</ul>
										</li>
										<li><a >Grid Layout<span className="submenu-indicator"></span></a>
											<ul className="nav-dropdown nav-submenu">
												<li><a href="grid-layout-with-sidebar.html">With Sidebar</a></li>                                    
												<li><a href="classNameical-layout-with-sidebar.html">Classical With Sidebar</a></li>                                    
												<li><a href="grid-layout-with-map.html">With Map</a></li>                                    
												<li><a href="grid.html">Full Width</a></li>
												<li><a href="classNameical-property.html">Classical Full Width</a></li>	 
											</ul>
										</li>
										<li><a >With Map Property<span className="submenu-indicator"></span></a>
											<ul className="nav-dropdown nav-submenu">
												<li><a href="list-layout-with-map.html">List With Map</a></li>                                    
												<li><a href="grid-layout-with-map.html">Grid With Map</a></li>                                    
												<li><a href="classNameical-layout-with-map.html">Classical With Map</a></li>                                    
												<li><a href="half-map.html">Half Map Search</a></li> 
											</ul>
										</li>
									</ul>
								</li>
								
								<li><a >Features<span className="submenu-indicator"></span></a>
									<ul className="nav-dropdown nav-submenu">
										<li><a >Single Property<span className="submenu-indicator"></span></a>
											<ul className="nav-dropdown nav-submenu">
												<li><a href="single-property-1.html">Single Property 1</a></li>                                    
												<li><a href="single-property-2.html">Single Property 2</a></li>                                    
												<li><a href="single-property-3.html">Single Property 3</a></li>   
											</ul>
										</li>
										<li><a >Agencies & Agents<span className="submenu-indicator"></span></a>
											<ul className="nav-dropdown nav-submenu">
												<li><a href="agents.html">Agents List</a></li>                                    
												<li><a href="agent-page.html">Agent Page</a></li>                                    
												<li><a href="agencies.html">Agencies List</a></li>                                    
												<li><a href="agency-page.html">Agency Page</a></li> 
											</ul>
										</li>
										<li><a >My Account<span className="submenu-indicator"></span></a>
											<ul className="nav-dropdown nav-submenu">
												<li><a href="payment.html">Payment Confirmation</a></li>
												<li><a href="my-profile.html">My Profile</a></li>                                    
												<li><a href="my-property.html">Property List</a></li>                                    
												<li><a href="bookmark-list.html">Bookmarked Listings</a></li>                                    
												<li><a href="change-password.html">Change Password</a></li> 
											</ul>
										</li>
										<li>
											<a href="compare-property.html">Compare Property</a>                                
										</li>
										<li>
											<a href="submit-property.html">Submit Property</a>                                
										</li>
									</ul>
								</li>
								
								<li><a >Pages<span className="submenu-indicator"></span></a>
									<ul className="nav-dropdown nav-submenu">
										<li><a href="blog.html">Blogs Page</a></li>                                    
										<li><a href="blog-detail.html">Blog Detail</a></li>                                    
										<li><a href="component.html">Shortcodes</a></li> 
										<li><a href="pricing.html">Pricing</a></li>  
										<li><a href="404.html">Error Page</a></li>
										<li><a href="contact.html">Contacts</a></li>
									</ul>
								</li>
								
								<li><a  data-toggle="modal" data-target="#signup">Sign Up</a></li>
								
							</ul>
							
							<ul className="nav-menu nav-menu-social align-to-right">
								
								<li>
									<a href="#" data-toggle="modal" data-target="#login">
										<i className="fas fa-user-circle mr-1"></i>Signin</a>
								</li>
								<li className="add-listing theme-bg">
									<a href="submit-property.html">Add Property</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>	

	)

}

}

export default Header
