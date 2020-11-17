import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom'
import Slider from "react-slick";
import Select2 from './Select2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/router'

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

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const HomeBanner4 = (props) => {
	const { proptypes, provinces, onChange, do_search } = props

	const [isActive, setActive] = useState("any");
	const [pos, setPos] = useState(0)
	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedType, setSelectedType] = useState(null);
	const router = useRouter()

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

	const _do_search = () => {
		do_search({proptype : selectedType, propadd : selectedOption})
		router.push("/search/listings")
	}

	return (
		<div className="image-cover hero-banner" style={{ "background" : "url(https://via.placeholder.com/1920x1000) no-repeat"}} >
				<div className="container">
					
					<h1 className="big-header-capt mb-0">Find Your Property</h1>
					<p className="text-center mb-5">From as low as $10 per day with limited time offer</p>

					<div className="property-search-type">
						<label className={ (isActive == "any") ? 'active' : ''} onLoad={(e)=>initArrow(e)} ><input name="tab" type="radio" onClick={(e) => chooseCat(e, 'any')} />Any Status</label>
						<label className={ (isActive == "sale") ? 'active' : '' }><input name="tab" type="radio" onClick={(e) => chooseCat(e, 'sale')} />For Sale</label>
						<label className={ (isActive == "rent") ? 'active' : '' }><input name="tab" type="radio" onClick={(e) => chooseCat(e, 'rent')}  />For Rent</label>
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
											<select id="ptypes" name="type" className="form-control" onChange={(e) => setSelectedType(e.target.value)}>
												<option value="">&nbsp;</option>
												<option value="1">Any Type</option>
												{proptypes.length && proptypes.map((item, index) => {
													return (
														<option key={"type-"+index} value={item.property_type_code}>{item.property_type_name}</option>
													)
												})}
											</select>
											<i className="ti-briefcase"></i>
										</div>
									</div>
								</div>

								
								<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
									<div className="form-group">
										<div className="input-with-icon b-l b-r">
											<Select2 
												initOptions={provinces} 
												onChange={(e, val, label) => setSelectedOption(val)}
												defaultText={""}
												isDisabled={false}
												placeholder={""}
											/>
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
										<button className="btn search-btn" onClick={(e) => _do_search() }>Search</button>
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
												<label htmlFor="a-1" className="checkbox-custom-label">Air Condition</label>
											</li>
											<li>
												<input id="a-2" className="checkbox-custom" name="a-2" type="checkbox" />
												<label htmlFor="a-2" className="checkbox-custom-label">Bedding</label>
											</li>
											<li>
												<input id="a-3" className="checkbox-custom" name="a-3" type="checkbox"/>
												<label htmlFor="a-3" className="checkbox-custom-label">Heating</label>
											</li>
											<li>
												<input id="a-4" className="checkbox-custom" name="a-4" type="checkbox"/>
												<label htmlFor="a-4" className="checkbox-custom-label">Internet</label>
											</li>
											<li>
												<input id="a-5" className="checkbox-custom" name="a-5" type="checkbox"/>
												<label htmlFor="a-5" className="checkbox-custom-label">Microwave</label>
											</li>
											<li>
												<input id="a-6" className="checkbox-custom" name="a-6" type="checkbox"/>
												<label htmlFor="a-6" className="checkbox-custom-label">Smoking Allow</label>
											</li>
											<li>
												<input id="a-7" className="checkbox-custom" name="a-7" type="checkbox"/>
												<label htmlFor="a-7" className="checkbox-custom-label">Terrace</label>
											</li>
											<li>
												<input id="a-8" className="checkbox-custom" name="a-8" type="checkbox"/>
												<label htmlFor="a-8" className="checkbox-custom-label">Balcony</label>
											</li>
											<li>
												<input id="a-9" className="checkbox-custom" name="a-9" type="checkbox"/>
												<label htmlFor="a-9" className="checkbox-custom-label">Icon</label>
											</li>
											<li>
												<input id="a-10" className="checkbox-custom" name="a-10" type="checkbox"/>
												<label htmlFor="a-10" className="checkbox-custom-label">Wi-Fi</label>
											</li>
											<li>
												<input id="a-11" className="checkbox-custom" name="a-11" type="checkbox"/>
												<label htmlFor="a-11" className="checkbox-custom-label">Beach</label>
											</li>
											<li>
												<input id="a-12" className="checkbox-custom" name="a-12" type="checkbox" />
												<label htmlFor="a-12" className="checkbox-custom-label">Parking</label>
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


export const SearchBanner = (props) => {

	return (
		<div className="search-header-banner">
				<div className="container">
					<div className="full-search-2 transparent">
						<div className="hero-search">
							<h1>Search Your Dream</h1>
						</div>
						<div className="hero-search-content">
							
							<div className="row">
							
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Neighborhood" />
											<i className="ti-search"></i>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="form-group">
										<div className="input-with-icon">
											<select id="cities" className="form-control">
												<option value="">&nbsp;</option>
												<option value="1">Los Angeles, CA</option>
												<option value="2">New York City, NY</option>
												<option value="3">Chicago, IL</option>
												<option value="4">Houston, TX</option>
												<option value="5">Philadelphia, PA</option>
												<option value="6">San Antonio, TX</option>
												<option value="7">San Jose, CA</option>
											</select>
											<i className="ti-briefcase"></i>
										</div>
									</div>
								</div>
								
								<div className="col-lg-2 col-md-2 col-sm-6">
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Minimum" />
											<i className="ti-money"></i>
										</div>
									</div>
								</div>
								
								<div className="col-lg-2 col-md-2 col-sm-6">
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Maximum" />
											<i className="ti-money"></i>
										</div>
									</div>
								</div>
								
							</div>
							
							<div className="collapse" id="advance-search" aria-expanded="false" role="banner">
							

								<div className="row">
								
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="form-group">
											<div className="input-with-icon">
												<select id="ptypes" className="form-control">
													<option value="">&nbsp;</option>
													<option value="1">Any Type</option>
													<option value="2">For Rental</option>
													<option value="3">For Sale</option>
												</select>
												<i className="ti-briefcase"></i>
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
								
									<div className="col-lg-12 col-md-12 col-sm-12">
										<h4>Amenities & Features</h4>
										<ul className="no-ul-list third-row">
											<li>
												<input id="a-1" className="checkbox-custom" name="a-1" type="checkbox"/>
												<label for="a-1" className="checkbox-custom-label">Air Condition</label>
											</li>
											<li>
												<input id="a-2" className="checkbox-custom" name="a-2" type="checkbox"/>
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
												<input id="a-12" className="checkbox-custom" name="a-12" type="checkbox"/>
												<label for="a-12" className="checkbox-custom-label">Parking</label>
											</li>
										</ul>
									</div>
									
								</div>

								
							</div>
							
							<div className="row">
							
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="form-group" id="module">
										<a role="button" className="collapsed" data-toggle="collapse" href="#advance-search" aria-expanded="false" aria-controls="advance-search"></a>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="form-group">
										<div className="form-group">
											<a href="#" className="btn reset-btn-outline">Search Reset</a>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="form-group">
										<a href="#" className="btn search-btn-outline">Search Result</a>
									</div>
								</div>
								
							</div>
							
						</div>
					</div>
				</div>
			</div>


	)


}

