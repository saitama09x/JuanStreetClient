import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link'
import conf from '../settings';
import  currencyFormatter from 'currency-formatter'
const { IMG_URL, AGENT_IMG, BASE_URL } = conf

export const DetailSingle = (props) => {
	const { listings, features, sendEmail, GoogleMap, latitude, longitude } = props
	const { property, address, details, rooms } = listings;
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [comment, setComment] = useState("");

	var photo = BASE_URL + listings.profile.photo_url
	console.log(photo)
	if(listings.profile.photo_url.indexOf('http') != -1 || listings.profile.photo_url.indexOf('google') != -1){
			photo = listings.profile.photo_url
	}

	return (
		<section className="gray">
				<div className="container">
					<div className="row">
						

						<div className="col-lg-8 col-md-12 col-sm-12">
							

							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Property Info</h4>
								</div>
								
								<div className="block-body">
									<ul className="dw-proprty-info">
										<li><strong>Bedrooms</strong>{details.bedrooms}</li>
										<li><strong>Bathrooms</strong>{details.bathrooms}</li>
										<li><strong>Floor Area</strong>{details.property_size} SqM</li>
										<li><strong>Lot Area</strong>{details.lotarea} SqM</li>
										<li><strong>Furnishing</strong>{details.furnishing}</li>
										<li><strong>Floor Level</strong>{address.floor_level}</li>
										<li><strong>Developer</strong>{details.developer}</li>
										<li><strong>Current Tenancy</strong>{details.currently_tenanted}</li>
									</ul>
								</div>
								
							</div>
							
							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Type of Rooms</h4>
								</div>
								
								<div className="block-body">
									<ul className="avl-features third">
									{rooms.map((item, index) => {
										return (
											<li key={'rooms-' + index}>
													{item.rtn + ' - ' + item.rs}
											</li>
										)
									})}
									</ul>
								</div>
								
							</div>

							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Description</h4>
								</div>
								
								<div className="block-body">
									<div dangerouslySetInnerHTML={{ __html : property.description}} />
								</div>
								
							</div>
							
							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Property Details</h4>
								</div>
								
								<div className="block-body">
									<div dangerouslySetInnerHTML={{ __html : details.other_property_details}} />
								</div>
								
							</div>

							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">House Feature</h4>
								</div>
								
								<div className="block-body">
									<ul className="avl-features third">
										{listings.feathouse.map((item, index) => <li key={'item-' + index}>{item.hfn}</li>)}
									</ul>
								</div>

								<div className="block-header">
									<h4 className="block-title">Property Feature</h4>
								</div>
								<div className="block-body">
								<ul className="avl-features third">
									{listings.featprop.map((item, index) => <li key={'item-' + index}>{item.pfn}</li>)}
								</ul>
								</div>
							</div>
							

							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Floor Plan</h4>
								</div>
								
								<div className="block-body">
									<div className="accordion" id="floor-option">
										<div className="card">
											<div className="card-header" id="firstFloor">
												<h2 className="mb-0">
													<button type="button" className="btn btn-link" data-toggle="collapse" data-target="#firstfloor">First Floor<span>740 sq ft</span></button>									
												</h2>
											</div>
											<div id="firstfloor" className="collapse" aria-labelledby="firstFloor" data-parent="#floor-option">
												<div className="card-body">
													<img src="assets/img/floor.jpg" className="img-fluid" alt="" />
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-header" id="seconfFloor">
												<h2 className="mb-0">
													<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#secondfloor">Second Floor<span>710 sq ft</span></button>
												</h2>
											</div>
											<div id="secondfloor" className="collapse" aria-labelledby="seconfFloor" data-parent="#floor-option">
												<div className="card-body">
													<img src="assets/img/floor.jpg" className="img-fluid" alt="" />
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-header" id="third-garage">
												<h2 className="mb-0">
													<button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#garages">Garage<span>520 sq ft</span></button>                     
												</h2>
											</div>
											<div id="garages" className="collapse" aria-labelledby="third-garage" data-parent="#floor-option">
												<div className="card-body">
													<img src="assets/img/floor.jpg" className="img-fluid" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
								
							</div>
							

							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Location</h4>
								</div>
								
								<div className="block-body">
									<div className="map-container">
										<div id="singleMap">
											<GoogleMap 
					                          isMarkerShown
					                          lat={latitude}
					                          lng={longitude}
					                          googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyBdmXWRqJ_riDZS3gT3JYAyRNsMPq07Zag&v=3.exp&libraries=geometry,drawing,places"}
					                          loadingElement={<div style={{ height: `100%` }} />}
					                          containerElement={<div style={{ height: `400px` }} />}
					                          mapElement={<div style={{ height: `100%` }} />} />
										</div>
									</div>

								</div>
								
							</div>

							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Nearby Places</h4>
								</div>
								
								<div className="block-body">
									

									<div className="nearby-wrap">
										<h5>Schools</h5>
										<div className="neary_section_list">
										
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Wikdom Senior High Scool</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate good"><i className="ti-star"></i>4.2</div>
													<span>2.5 km</span>
												</div>
											</div>
											
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Reena Secondary High Scool</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate mid"><i className="ti-star"></i>4.0</div>
													<span>3.7 km</span>
												</div>
											</div>
											
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Victory Primary Scool</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate high"><i className="ti-star"></i>4.8</div>
													<span>2.9 km</span>
												</div>
											</div>
											
										</div>
									</div>
									

									<div className="nearby-wrap">
										<h5>Hotel &amp; Restaurant</h5>
										<div className="neary_section_list">
										
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Hotel Singhmind Alite</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate poor"><i className="ti-star"></i>3.2</div>
													<span>1.5 km</span>
												</div>
											</div>
											
											<div className="neary_section">
												<div className="neary_section_first">
													<h4 className="nearby_place_title">Wiksy Bar &amp; Restaurant</h4>
												</div>
												<div className="neary_section_last">
													<div className="nearby_place_rate high"><i className="ti-star"></i>4.9</div>
													<span>2.7 km</span>
												</div>
											</div>
											
										</div>
									</div>
									
								</div>
								
							</div>						
							
						</div>
						

						<div className="col-lg-4 col-md-12 col-sm-12">
							<div className="page-sidebar">
								

								<div className="agent-widget">
									<div className="agent-title">
										<div className="agent-photo"><img src={photo} alt="" /></div>
										<div className="agent-details">
											<h4><Link href={"/agent/" + listings.profile.account_id}><a>{listings.profile.first_name + ' ' + listings.profile.last_name}</a></Link></h4>
											<span><i className="lni-phone-handset"></i>{listings.profile.phone_number_1}</span>
										</div>
										<div className="clearfix"></div>
									</div>

									<div className="form-group">
										<input type="text" className="form-control" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Your Phone" onChange={(e) => setPhone(e.target.value)} />
									</div>
									<div className="form-group">
										<textarea className="form-control" onChange={(e) => setComment(e.target.value)}>I'm interested in this property.</textarea>
									</div>
									<button type="button" className="btn btn-theme full-width" onClick={(e) => sendEmail({
										email : email,
										phone : phone,
										comment : comment
									})}>Send Message</button>
								</div>
								

								<div className="sidebar-widgets">
									
									<h4>See More Results</h4>
									
									<div className="sidebar_featured_property">
										
										{features.length ? features.map((item, index) => {

											if(index < 5){
												return (

													<div className="sides_list_property" key={'listing-' + index}>
														<div className="sides_list_property_thumb">
															<Link href={"/single-listing/" + item.property_id}><a><img src={IMG_URL + item.image.media_filename} className="img-fluid" alt="" /></a></Link>
														</div>
														<div className="sides_list_property_detail">
															<h4><Link href={"/single-listing/" + item.property_id}><a>{item.property_name}</a></Link></h4>
															<span><i className="ti-location-pin"></i>{item.town_city}</span>
															<div className="lists_property_price">
																<div className="lists_property_types">
																	<div className="property_types_vlix sale">{item.listing_type}</div>
																</div>
																<div className="lists_property_price_value">
																	<h4>{currencyFormatter.format(item.vendor_requested_price, { locale: 'en-PH' })}</h4>
																</div>
															</div>
														</div>
													</div>

												)
											}
											
											return <span></span>

										}) : <div className='d-flex justify-content-center'><img src="/images/loading.gif" /></div> }
										
									</div>
									
								</div>
							
							</div>
						</div>
						
					</div>
				</div>
			</section>

	)

}