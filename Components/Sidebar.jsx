import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import Select2 from './Select2';

export const AgentSidebar = (props) => {

	const {provinces, onSearhListing, municipalities } = props
	const [selectedProv, setSelectedProv] = useState("");
	const [selectMun, setSelectedMun] = useState("");
	const [selectedType, setSelectedType] = useState("");
	const [filterMun, setFilterMun] = useState([])
	const [isSelectProv, setIsSelectProv] = useState(false)
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(0)
	const [minFormat, setMinFormat] = useState("0")
	const [maxFormat, setMaxFormat] = useState("0")

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

	const onSearchBtn = () => {

		onSearhListing({ province : selectedProv, municipality : selectMun, min : min, max : max })

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
	
			<div className="page-sidebar">
				
				<div className="sidebar-widgets">
					
					<h4>Find New Property</h4>
					
					<div className="form-group">
						<div className="input-with-icon">
							<Select2 
								initOptions={provinces} 
								onChange={(e, val, label) => onSelectedProv(val)}
								defaultText={selectedProv}
								isDisabled={false}
								placeholder={"Province"}
							/>
							<i className="ti-briefcase"></i>
						</div>
					</div>

					<div className="form-group">
						<div className="input-with-icon">
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
					
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="form-group">
								<div className="input-with-icon">
									<input type="text" className="form-control" placeholder="Minimum" value={minFormat} onChange={(e) => onMin(e)} />
									<i className="ti-money"></i>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="form-group">
								<div className="input-with-icon">
									<input type="text" className="form-control" placeholder="Maximum" value={maxFormat} onChange={(e) => onMax(e)} />
									<i className="ti-money"></i>
								</div>
							</div>
						</div>
					</div>
					
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
					
					<button type='button' className="btn btn-theme full-width" onClick={(e) => onSearchBtn()}>Find New Home</button>
					
				</div>
			</div>
	)

}
