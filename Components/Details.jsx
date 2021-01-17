import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link'
import conf from '../settings';
const { IMG_URL } = conf

export const DetailSingle = (props) => {
	const { listings, features, sendEmail } = props
	const { property, address, details } = listings;
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [comment, setComment] = useState("");


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
										<li><strong>Area</strong>{details.property_size} sq ft</li>
										<li><strong>Type</strong>{details.property_type}</li>
										<li><strong>Price</strong>Php {details.vendor_requested_price}</li>
										<li><strong>City</strong>{address.town_city}</li>
										<li><strong>Build On</strong>2007</li>
									</ul>
								</div>
								
							</div>
							

							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Description</h4>
								</div>
								
								<div className="block-body">
									<p>{property.description}</p>
								</div>
								
							</div>
							
	
							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Ameneties</h4>
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
										<div id="singleMap" data-latitude="40.7427837" data-longitude="-73.11445617675781" data-mapTitle="Our Location"></div>
									</div>

								</div>
								
							</div>
							

							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">47 Reviews</h4>
								</div>
								
								<div className="block-body">
									<div className="author-review">
										<div className="comment-list">
											<ul>
												<li className="article_comments_wrap">
													<article>
														<div className="article_comments_thumb">
															<img src="https://via.placeholder.com/150x150" alt="" />
														</div>
														<div className="comment-details">
															<div className="comment-meta">
																<div className="comment-left-meta">
																	<h4 className="author-name">Rosalina Kelian</h4>
																	<div className="comment-date">19th May 2018</div>
																</div>
															</div>
															<div className="comment-text">
																<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.
																	perspiciatis unde omnis iste natus error.</p>
															</div>
														</div>
													</article>
												</li>
												<li className="article_comments_wrap">
													<article>
														<div className="article_comments_thumb">
															<img src="https://via.placeholder.com/150x150" alt="" />
														</div>
														<div className="comment-details">
															<div className="comment-meta">
																<div className="comment-left-meta">
																	<h4 className="author-name">Rosalina Kelian</h4>
																	<div className="comment-date">19th May 2018</div>
																</div>
															</div>
															<div className="comment-text">
																<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.
																	perspiciatis unde omnis iste natus error.</p>
															</div>
														</div>
													</article>
												</li>
												<li className="article_comments_wrap">
													<article>
														<div className="article_comments_thumb">
															<img src="https://via.placeholder.com/150x150" alt="" />
														</div>
														<div className="comment-details">
															<div className="comment-meta">
																<div className="comment-left-meta">
																	<h4 className="author-name">Russel Ikravia</h4>
																	<div className="comment-date">17th May 2020</div>
																</div>
															</div>
															<div className="comment-text">
																<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.
																	perspiciatis unde omnis iste natus error.</p>
															</div>
														</div>
													</article>
												</li>
											</ul>
										</div>
									</div>
									<a href="#" className="reviews-checked theme-cl"><i className="fas fa-arrow-alt-circle-down mr-2"></i>See More Reviews</a>

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
							

							<div className="block-wrap">
								
								<div className="block-header">
									<h4 className="block-title">Write A Review</h4>
								</div>
								
								<div className="block-body">
									<div className="row">
										
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Subject Title" />
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Your Name" />
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<input type="email" className="form-control" placeholder="Your Email" />
											</div>
										</div>
										
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<textarea className="form-control ht-80" placeholder="Messages"></textarea>
											</div>
										</div>
										
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<button className="btn btn-theme" type="submit">Submit Review</button>
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
										<div className="agent-photo"><img src="https://via.placeholder.com/400x400" alt="" /></div>
										<div className="agent-details">
											<h4><a href="#">Shivangi Preet</a></h4>
											<span><i className="lni-phone-handset"></i>(91) 123 456 7895</span>
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
									
									<h4>Mortgage Calculator</h4>
									
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Sale Price"/>
											<i className="ti-money"></i>
										</div>
									</div>
									
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Down Payment" />
											<i className="ti-money"></i>
										</div>
									</div>
									
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Loan Term (Years)" />
											<i className="ti-calendar"></i>
										</div>
									</div>
									
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Interest Rate" />
											<i className="fa fa-percent"></i>
										</div>
									</div>
									
									<button className="btn btn-theme full-width">Calculate</button>
									
								</div>
								

								<div className="sidebar-widgets">
									
									<h4>Featured Property</h4>
									
									<div className="sidebar_featured_property">
										
										{features?.length && features?.map((item, index) => {

											if(index < 5){
												return (

													<div className="sides_list_property" key={'listing-' + index}>
														<div className="sides_list_property_thumb">
															<img src={IMG_URL + item.media} className="img-fluid" alt="" />
														</div>
														<div className="sides_list_property_detail">
															<h4><a href="single-property-1.html">{item.property_name}</a></h4>
															<span><i className="ti-location-pin"></i>{item.town_city}</span>
															<div className="lists_property_price">
																<div className="lists_property_types">
																	<div className="property_types_vlix sale">{item.listing_type}</div>
																</div>
																<div className="lists_property_price_value">
																	<h4>Php {item.vendor_requested_price}</h4>
																</div>
															</div>
														</div>
													</div>

												)
											}
											
											return <span></span>

										})}
										
									</div>
									
								</div>
							
							</div>
						</div>
						
					</div>
				</div>
			</section>

	)

}