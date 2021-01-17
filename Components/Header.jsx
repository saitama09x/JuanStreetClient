
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, Route }from 'react-router-dom';
import Link from 'next/link'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const _swal = withReactContent(Swal)

class Header extends Component{



render(){
	
	const SignInForm = () => {
		return (
			<div className='p-2'>
				<div className='form-group'>
					<label>First Name</label>
					<input type='text' className='form-control' />
				</div>
				<div className='form-group'>
					<label>Last Name</label>
					<input type='text' className='form-control' />
				</div>
				<div className='form-group'>
					<label>Email</label>
					<input type='text' className='form-control' />
				</div>
				<div className='form-group'>
					<label>Phone</label>
					<input type='text' className='form-control' />
				</div>
			</div>
		);
	}
	const LoginForm = () => {
		return (
			<div className='p-2'>
				<div className='form-group'>
					<label>Email</label>
					<input type='text' className='form-control' />
				</div>
				<div className='form-group'>
					<label>Password</label>
					<input type='text' className='form-control' />
				</div>
			</div>
		)
	}

	const SignIn = () => {
		_swal.fire({
			title : 'Sign In',
			html : <SignInForm />,
			confirmButtonText : 'Submit',
			showCancelButton : true
		})
	}

	const Login = () => {
		_swal.fire({
			title : 'Login',
			html : <LoginForm />,
			confirmButtonText : 'Login',
		})
	}

	return (
		<div className="header header-light">
				<div className="container-fluid">
					<nav id="navigation" className="navigation navigation-landscape">
						<div className="nav-header" style={{
							backgroundColor : '#3ebd43bd'
						}}>
							<a className="nav-brand" href="#">
								<img src="/assets/img/js_landscape.png" className="logo" alt="" />
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
									<a onClick={(e) => SignIn() } className='prop-item'>
										<i className="fas fa-user-circle mr-1"></i>Signin</a>
								</li>
								<li className="add-listing theme-bg">
									<a onClick={(e) => Login()} className='prop-item'>Add Property</a>
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
