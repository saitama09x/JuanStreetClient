import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import Slider from "react-slick";
import Select2 from './Select2';
import  currencyFormatter from 'currency-formatter'
import { useDispatch } from 'react-redux'
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
	const { proptypes, provinces, onChange, do_search , municipalities} = props

	const [isActive, setActive] = useState("any");
	const [pos, setPos] = useState(0)
	const [local, setLocal] = useState("");
	const [selectedProv, setSelectedProv] = useState("");
	const [selectMun, setSelectedMun] = useState("");
	const [selectedType, setSelectedType] = useState("");
	const [filterMun, setFilterMun] = useState([])
	const [isSelectProv, setIsSelectProv] = useState(false)

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
		do_search({proptype : selectedType, propadd : selectedProv, proplocal : local, propmun : selectMun})
		router.push("/search/listings")
	}

	const onSelectedMun = (val) => {
		setSelectedMun(val);
	}

	useEffect(() => {
		if(selectedProv != "" && isSelectProv){
			var filter = municipalities.filter((val, index) => {
				let str = new String(val.prov)
				var rgxp = new RegExp(selectedProv, "i");
				if(rgxp.test(str.toString())){
					return val;
				}
				return false
			})
			setFilterMun(filter)
			setIsSelectProv(false)
		}
		else if(selectedProv == "" && !isSelectProv)
		{
			setFilterMun(municipalities)
		}

	})

	const onSelectedProv = (val) => {
		setSelectedProv(val)
		setIsSelectProv(true)
	}

	return (
		<div className="image-cover hero-banner" style={{ "background" : "url(/images/wallpaper-banner.jpg) no-repeat"}} >
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
											<Select2 
												initOptions={provinces} 
												onChange={(e, val, label) => onSelectedProv(val)}
												defaultText={selectedProv}
												isDisabled={false}
												placeholder={"Provinces"}
											/>
											<i className="ti-location-pin"></i>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
									<div className="form-group">
										<div className="input-with-icon b-l b-r">
											<Select2 
												initOptions={filterMun} 
												onChange={(e, val, label) => onSelectedMun(val)}
												defaultText={""}
												isDisabled={false}
												placeholder={"Municipality"}
											/>
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
												{proptypes?.length && proptypes?.map((item, index) => {
													return (
														<option key={"type-"+index} value={item.property_type_code}>{item.property_type_name}</option>
													)
												})}
											</select>
											<i className="ti-briefcase"></i>
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
						</div>
					</div>
				</div>
			</div>	
	)

}


export const SearchBanner = (props) => {
	const { proptypes, provinces, search_listing, ref_feature, search, municipalities } = props

	const [selectedProv, setSelectedProv] = useState("");
	const [local, setLocal] = useState("");
	const [selectedType, setSelectedType] = useState(null);
	const [filterMun, setFilterMun] = useState([])
	const [selectMun, setSelectedMun] = useState("");
	const [collapse, setCollapse] = useState(false);
	const [refs, setRefs] = useState([]);
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(0)
	const [minFormat, setMinFormat] = useState("0")
	const [maxFormat, setMaxFormat] = useState("0")
	const [isSelectProv, setIsSelectProv] = useState(false)
	const [searchAdd, setSearhAdd] = useState(search.propadd)
	const [searchMun, setSearhMun] = useState(search.propmun)

	useEffect(() => {
		if(selectedProv != "" && isSelectProv){
			var filter = municipalities.filter((val, index) => {
				let str = new String(val.prov)
				var rgxp = new RegExp(selectedProv, "i");
				if(rgxp.test(str.toString())){
					return val;
				}
				return false
			})
			setFilterMun(filter)
			setIsSelectProv(false)
		}
		else if(selectedProv == "" && !isSelectProv)
		{
			setFilterMun(municipalities)
		}

	})

	const _setRefs = (e) => {
		var value = e.target.value
		if(e.target.checked){
			refs.push(value)
			setRefs(refs)
		}
		else{
			var _refs = refs.filter((item) => {
				return ( item != value )
			})
			setRefs(_refs)
		}

	}

	const onMax = (e) => {
		var val = e.target.value
		
		if(isNaN(val)){
			val = val.replace(/\D/g,'')
		}
		setMax(Number(val))
		setMaxFormat(Number(Number(val).toFixed(2)).toLocaleString())
		
	}

	const onMin = (e) => {
		var val = e.target.value
		if(isNaN(val)){
			val = val.replace(/\D/g,'')
		}
	
		setMin(Number(val))
		setMinFormat(Number(Number(val).toFixed(2)).toLocaleString())
	}

	const onSelectedProv = (val) => {
		setSelectedProv(val)
		setIsSelectProv(true)
	}

	const onSelectedMun = (val) => {
		setSelectedMun(val);
	}

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
											<Select2 
												initOptions={provinces} 
												onChange={(e, val, label) => onSelectedProv(val)}
												defaultText={searchAdd}
												isDisabled={false}
												placeholder={"Provinces"}
											/>
											<i className="ti-briefcase"></i>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="form-group">
										<div className="input-with-icon">
											<Select2 
												initOptions={filterMun} 
												onChange={(e, val, label) => onSelectedMun(val)}
												defaultText={searchMun}
												isDisabled={false}
												placeholder={"Municipality"}
											/>
											<i className="ti-search"></i>
										</div>
									</div>
								</div>
								
								
								
								<div className="col-lg-2 col-md-2 col-sm-6">
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Minimum" value={minFormat} onChange={(e) => onMin(e)} />
											<i className="ti-money"></i>
										</div>
									</div>
								</div>
								
								<div className="col-lg-2 col-md-2 col-sm-6">
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Maximum" value={maxFormat} onChange={(e) => onMax(e)}/>
											<i className="ti-money"></i>
										</div>
									</div>
								</div>
								
							</div>
							
							<div className={ (collapse==true) ? "collapse show" : "collapse" }  id="advance-search" aria-expanded="false" role="banner">
							

								<div className="row">
								
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="form-group">
											<div className="input-with-icon">
												<select id="ptypes" className="form-control" onChange={(e) => setSelectedType(e.target.value)}>
													<option value="">&nbsp;</option>
													<option value="">Any Type</option>
													{proptypes?.length && proptypes?.map((item, index) => {
														return (
															<option key={"type-"+index} value={item.property_type_code}>{item.property_type_name}</option>
														)
													})}
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
											{ref_feature?.length && ref_feature?.map((item, index) => {
												return (
													<li key={"list-"+index}>
														<input id={"ref-" + index} className="checkbox-custom" name="a-1[]" type="checkbox" onChange={(e) => _setRefs(e) } value={item.feature_code} />
														<label htmlFor={"ref-" + index} className="checkbox-custom-label">{item.feature_name}</label>
													</li>

												)
											})}
										</ul>
									</div>
									
								</div>

								
							</div>
							
							<div className="row">
							
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="form-group" id="module">
										<a role="button" className="collapsed"  onClick={(e) => setCollapse(!collapse)} ></a>
									</div>
								</div>							
								
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="form-group">
										<button className="btn search-btn-outline" onClick={(e) => search_listing( selectedType, selectedProv, local, refs, selectMun, min, max)}>Search Result</button>
									</div>
								</div>
								
							</div>
							
						</div>
					</div>
				</div>
			</div>


	)

}

