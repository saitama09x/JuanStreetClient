import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class AdminHeader extends Component{

	render(){
		return (
			<div className="navbar-custom">
          		<ul className="list-unstyled topnav-menu float-right mb-0">
	            <li className="dropdown notification-list">
	            	<a className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
		                data-toggle="dropdown"
		                href="#/"
		                role="button"
		                aria-haspopup="false"
		                aria-expanded="false">
			                <img
			                  src="#"
			                  alt="user-image"
			                  className="rounded-circle"
			                />
	                <span className="pro-user-name ml-1">
	                </span>
	              </a>
	               <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
		               <div className="dropdown-item noti-title">
		                  <h6 className="m-0">Welcome !</h6>
		                </div>
		            <a href="#/" className="dropdown-item notify-item">
	                  <i className="dripicons-power" />
	                  <span>Logout</span>
	                </a>
	               </div>
	              </li>
              </ul>
       	 	</div>
		)
	}

}

export default AdminHeader