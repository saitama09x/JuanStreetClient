import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export const HomeBanner = () => {

	return (

		<div className="image-cover large-banner" style={{ "background" : "url(https://via.placeholder.com/1920x1000) no-repeat" }}>
				<div className="container">
					
					<h1 className="italian-header-capt">Beautiful space build for travel & life enjoy.</h1>
					<div className="full-search-2 italian-search">
						<div className="hero-search-content">
							
							<div className="row">
							
								<div className="col-lg-3 col-md-6 col-sm-12 small-padd">
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Neighborhood" />
											<i className="ti-search"></i>
										</div>
									</div>
								</div>
	
								
								<div className="col-lg-3 col-md-6 col-sm-12 small-padd">
									<div className="form-group">
										<div className="input-with-icon">
											<select id="ptypes" className="form-control">
												<option value="">&nbsp;</option>
												<option value="1">Any Type</option>
												<option value="2">Apartment</option>
												<option value="3">Villas</option>
												<option value="4">Commercial</option>
												<option value="5">Offices</option>
												<option value="6">Garage</option>
											</select>
											<i className="ti-briefcase"></i>
										</div>
									</div>
								</div>

								
								<div className="col-lg-2 col-md-6 col-sm-6 small-padd">
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Minimum" />
											<i className="ti-money"></i>
										</div>
									</div>
								</div>
								
								<div className="col-lg-2 col-md-6 col-sm-6 small-padd">
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Minimum" />
											<i className="ti-money"></i>
										</div>
									</div>
								</div>
								
								<div className="col-lg-2 col-md-12 col-sm-12 small-padd">
									<div className="form-group">
										<div className="form-group">
											<a href="#" className="btn reset-btn">Search Reset</a>
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