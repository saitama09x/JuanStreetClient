import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import AdminHeader from "../../Components/admin/AdminHeader";
import AdminSidebar from "../../Components/admin/AdminSidebar";

class AdminIndex extends Component{

	constructor(props){
		super(props)
	}


	render(){
		return (
			<div id="wrapper">
				<AdminHeader />
				<AdminSidebar />
			<div className="content-page">

            	<div className="content">
            	<div id='dashboard-wrapper'>
            		<div class='d-flex justify-content-end'>
			 		<div className="page-title-box">
			            <div className="page-title-right">
			                <ol className="breadcrumb m-0">
			                    <li className="breadcrumb-item"><a href="#">Greeva</a></li>
			                    <li className="breadcrumb-item active">Dashboard</li>
			                </ol>
			            </div>
			        </div>
			        </div>

			        <div class='row'>
			        	<div class='col-md-6'>
					        <div class='card'>
					        	<div class='card-header'><h6 class='card-title'>Pages Published</h6></div>
					        	<div class='card-body'>

					        	</div>
					        </div>
					    </div>
					    <div class='col-md-6'>
					        <div class='card'>
					        	<div class='card-header'><h6 class='card-title'>Posts Published</h6></div>
					        	<div class='card-body'>

					        	</div>
					        </div>
					    </div>
					 </div>

			        </div>
			 	</div>

			 </div>
          	</div>
		)
	}

}

export default AdminIndex