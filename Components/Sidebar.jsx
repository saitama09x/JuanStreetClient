import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom'
import Select2 from './Select2';

export const AgentSidebar = (props) => {

	const { provinces, onSearhListing } = props
	const [selectedOption, setSelectedOption] = useState(null);

	const onSearchBtn = () => {

		onSearhListing({ province : selectedOption })

	}

	return (
	
			<div className="page-sidebar">
				
				<div className="sidebar-widgets">
					
					<h4>Find New Property</h4>
					
					<div className="form-group">
						<div className="input-with-icon">
							<input type="text" className="form-control" placeholder="Neighborhood" />
							<i className="ti-search"></i>
						</div>
					</div>
					
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="form-group">
								<div className="input-with-icon">
									<input type="text" className="form-control" placeholder="Minimum"/>
									<i className="ti-money"></i>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="form-group">
								<div className="input-with-icon">
									<input type="text" className="form-control" placeholder="Maximum"/>
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
					
					<div className="form-group">
						<div className="input-with-icon">
							<Select2 
								initOptions={provinces} 
								onChange={(e, val, label) => setSelectedOption(val)}
								defaultText={""}
								isDisabled={false}
								placeholder={""}
							/>
							<i className="ti-briefcase"></i>
						</div>
					</div>
					
					<button type='button' className="btn btn-theme full-width" onClick={(e) => onSearchBtn()}>Find New Home</button>
					
				</div>
			</div>
	)

}
