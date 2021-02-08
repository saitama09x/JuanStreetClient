
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, Route }from 'react-router-dom';
import Link from 'next/link'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AgentServ from '../services/agent-services';
import conf from '../settings';

const _swal = withReactContent(Swal)

class Header extends Component{

constructor(props){

	super(props)
	this.state = {
		email : '',
		pass : '',
		fname : '',
		lname : '',
		phone : '',
		pword : ''
	}

	this.onEmail = this.onEmail.bind(this)
	this.onPass = this.onPass.bind(this)
	this.onChangeSign = this.onChangeSign.bind(this)
}

onEmail(e){

	this.setState({
		email : e.target.value
	})

}

onPass(e){

	this.setState({
		pass : e.target.value
	})

}

onChangeSign(e){

	var type = e.target.id
	var val = e.target.value

	if(type == 'fname'){
		this.setState({
			fname : val
		})
	}
	else if(type == 'lname'){
		this.setState({
			lname : val
		})
	}
	else if(type == 'phone'){
		this.setState({
			phone : val
		})	
	}
	else if(type == 'email'){
		this.setState({
			email : val
		})	
	}
	else if(type == 'pword'){
		this.setState({
			pword : val
		})		
	}
}


onSubmit(e){

	const { email, pass } = this.state
	var obj = {
		email : email,
		pass : pass
	}

	AgentServ.doLogin(obj).then((res) => {
		if(res){
			if(res.hasOwnProperty('code')){
				var query = '?client=' + res.client + '&code=' + res.code
				window.location.href = conf.BASE_URL + "authenticate/user/login" + query		
			}
		}
	})
}

onSignUp(e){
	const { fname, lname, email, phone, pword } = this.state
	var obj = {
		fname : fname,
		lname : lname,
		email : email,
		phone : phone,
		pword : pword
	}

	AgentServ.signUp(obj).then((res) => {
		if(res){
			if(res.hasOwnProperty('code')){
				var query = '?client=' + res.client + '&code=' + res.code
				window.location.href = conf.BASE_URL + "authenticate/user/login" + query		
			}
		}
	})

}


render(){
	
	const SignInForm = (props) => {
		return (
			<div className='p-2'>
				<div className='form-group'>
					<label>First Name</label>
					<input id='fname' type='text' className='form-control' onChange={(e) => props.onChangeSign(e)}/>
				</div>
				<div className='form-group'>
					<label>Last Name</label>
					<input id='lname' type='text' className='form-control' onChange={(e) => props.onChangeSign(e)}/>
				</div>
				<div className='form-group'>
					<label>Email</label>
					<input id='email' type='text' className='form-control' onChange={(e) => props.onChangeSign(e)}/>
				</div>
				<div className='form-group'>
					<label>Phone</label>
					<input id='phone' type='text' className='form-control' onChange={(e) => props.onChangeSign(e)}/>
				</div>
				<div className='form-group'>
					<label>Password</label>
					<input id='pword' type='text' className='form-control' onChange={(e) => props.onChangeSign(e)} />
				</div>
				<div className='form-group'>
				<button type='button' className='btn btn-md btn-primary' onClick={(e) => props.onSignUp(e)} >SignUp</button>
				</div>
			</div>
		);
	}
	const LoginForm = (props) => {
		return (
			<div className='p-2'>
				<div className='form-group'>
					<label>Email</label>
					<input type='text' className='form-control' onChange={(e) => props.onEmail(e) }/>
				</div>
				<div className='form-group'>
					<label>Password</label>
					<input type='text' className='form-control' onChange={(e) => props.onPass(e) } />
				</div>
				<div className='form-group'>
				<button type='button' className='btn btn-md btn-primary' onClick={(e) => props.onSubmit(e)} >Login</button>
				</div>
			</div>
		)
	}

	const SignIn = () => {
		_swal.fire({
			title : 'Sign In',
			html : <SignInForm onChangeSign={(e) => this.onChangeSign(e)} onSignUp={(e) => this.onSignUp(e)}/>,
			showConfirmButton : false
		})
	}

	const Login = () => {
		_swal.fire({
			title : 'Login',
			html : <LoginForm onEmail={e => this.onEmail(e)} onPass={e => this.onPass(e) } onSubmit={e => this.onSubmit() }/>,
			showConfirmButton : false
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
									<a onClick={(e) => Login()} className='prop-item'>Agent</a>
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
