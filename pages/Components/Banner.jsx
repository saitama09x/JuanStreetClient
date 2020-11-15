import React, { Component, useState } from 'react';
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

export const HomeBanner4 = () => {
	const [isActive, setActive] = useState("any");
	const [pos, setPos] = useState(0)

	const initArrow = (e) => {
		var elem = e.target;
		setPos(elem.offsetLeft + (elem.offsetWidth/2) - 10)
	}

	const chooseCat = (e, active) => {
		var elem = e.target;
		var parent = elem.parentElement;

		setActive(active)
		setPos(parent.offsetLeft + (parent.offsetWidth/2) - 10)
	}

	return (
		<div className="image-cover hero-banner" style={{ "background" : "url(https://via.placeholder.com/1920x1000) no-repeat"}} >
				<div className="container">
					
					<h1 className="big-header-capt mb-0">Find Your Property</h1>
					<p className="text-center mb-5">From as low as $10 per day with limited time offer</p>

					<div className="property-search-type">
						<label className={ (isActive == "any") ? 'active' : ''} onLoad={(e)=>initArrow(e)} ><input name="tab" type="radio" checked={(isActive == "any") ? true : false} onClick={(e) => chooseCat(e, 'any')} />Any Status</label>
						<label className={ (isActive == "sale") ? 'active' : '' }><input name="tab" type="radio" onClick={(e) => chooseCat(e, 'sale')} checked={(isActive == "sale") ? true : false}/>For Sale</label>
						<label className={ (isActive == "rent") ? 'active' : '' }><input name="tab" type="radio" onClick={(e) => chooseCat(e, 'rent')} checked={(isActive == "rent") ? true : false} />For Rent</label>
						<div className="property-search-type-arrow" style={{ left : pos +'px', 'transition': 'left 0.4s cubic-bezier(.95,-.41,.19,1.44)' }}></div>
					</div>
					<div className="full-search-2 eclip-search italian-search hero-search-radius">
						<div className="hero-search-content">
							
							<div className="row">
							
								<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control b-r" placeholder="Neighborhood" />
											<i className="ti-search"></i>
										</div>
									</div>
								</div>
	
								
								<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
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

								
								<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
									<div className="form-group">
										<div className="input-with-icon b-l b-r">
											<select id="location" className="form-control">
												<option value="">&nbsp;</option>
												<option value="1">New York City</option>
												<option value="2">Chicago, Illinois</option>
												<option value="3">Las Vegas</option>
												<option value="4">New Orleans</option>
												<option value="5">San Francisco</option>
												<option value="6">Washington</option>
											</select>
											<i className="ti-location-pin"></i>
										</div>
									</div>
								</div>
								
								<div className="col-lg-1 col-md-1 col-sm-12 small-padd">
									<div className="form-group">
										<a role="button" className="collapsed ad-search" data-toggle="collapse" href="#advance-search" aria-expanded="false" aria-controls="advance-search"><i className="ti-align-center"></i></a>
									</div>
								</div>
								
								<div className="col-lg-2 col-md-2 col-sm-12 small-padd">
									<div className="form-group">
										<a href="#" className="btn search-btn">Search</a>
									</div>
								</div>
								
							</div>
							<div className="collapse" id="advance-search" aria-expanded="false" role="banner">
							
								<div className="row">
								
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="form-group">
											<div className="input-with-icon">
												<select id="town" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">Any Town</option>
													<option value="2">Toronto</option>
													<option value="3">Montreal</option>
													<option value="4">Alberta</option>
													<option value="5">Ontario</option>
													<option value="6">Ottawa</option>
												</select>
												<i className="ti-location-pin"></i>
											</div>
										</div>
									</div>
									
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="form-group">
											<div className="input-with-icon">
												<select id="bedrooms" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
												<i className="fas fa-bed"></i>
											</div>
										</div>
									</div>
									
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="form-group">
											<div className="input-with-icon">
												<select id="bathrooms" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
												<i className="fas fa-bath"></i>
											</div>
										</div>
									</div>
									
								</div>

								<div className="row">
								
									<div className="col-lg-12 col-md-12 col-sm-12 mt-5">
										<h4 className="text-dark">Amenities & Features</h4>
										<ul className="no-ul-list third-row">
											<li>
												<input id="a-1" className="checkbox-custom" name="a-1" type="checkbox" />
												<label for="a-1" className="checkbox-custom-label">Air Condition</label>
											</li>
											<li>
												<input id="a-2" className="checkbox-custom" name="a-2" type="checkbox" />
												<label for="a-2" className="checkbox-custom-label">Bedding</label>
											</li>
											<li>
												<input id="a-3" className="checkbox-custom" name="a-3" type="checkbox"/>
												<label for="a-3" className="checkbox-custom-label">Heating</label>
											</li>
											<li>
												<input id="a-4" className="checkbox-custom" name="a-4" type="checkbox"/>
												<label for="a-4" className="checkbox-custom-label">Internet</label>
											</li>
											<li>
												<input id="a-5" className="checkbox-custom" name="a-5" type="checkbox"/>
												<label for="a-5" className="checkbox-custom-label">Microwave</label>
											</li>
											<li>
												<input id="a-6" className="checkbox-custom" name="a-6" type="checkbox"/>
												<label for="a-6" className="checkbox-custom-label">Smoking Allow</label>
											</li>
											<li>
												<input id="a-7" className="checkbox-custom" name="a-7" type="checkbox"/>
												<label for="a-7" className="checkbox-custom-label">Terrace</label>
											</li>
											<li>
												<input id="a-8" className="checkbox-custom" name="a-8" type="checkbox"/>
												<label for="a-8" className="checkbox-custom-label">Balcony</label>
											</li>
											<li>
												<input id="a-9" className="checkbox-custom" name="a-9" type="checkbox"/>
												<label for="a-9" className="checkbox-custom-label">Icon</label>
											</li>
											<li>
												<input id="a-10" className="checkbox-custom" name="a-10" type="checkbox"/>
												<label for="a-10" className="checkbox-custom-label">Wi-Fi</label>
											</li>
											<li>
												<input id="a-11" className="checkbox-custom" name="a-11" type="checkbox"/>
												<label for="a-11" className="checkbox-custom-label">Beach</label>
											</li>
											<li>
												<input id="a-12" className="checkbox-custom" name="a-12" type="checkbox" />
												<label for="a-12" className="checkbox-custom-label">Parking</label>
											</li>
										</ul>
									</div>
									
								</div>
								
							</div>
							
						</div>
					</div>
				</div>
			</div>	
	)

}