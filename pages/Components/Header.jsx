
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, Route }from 'react-router-dom';
import Link from 'next/link'

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
							
								<li className="active"><Link href="/"><a>Home<span className="submenu-indicator"></span></a></Link>
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
								
								<li><Link href="/search/listings"><a>Listings</a></Link></li>
								
								<li><Link href="/agents"><a>Agents</a></Link></li>
								
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
