import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link'
import {connect} from 'react-redux';
import { do_search_listings, do_display_listings } from '../redux/search-actions'
import propserv from '../services/property-services';
import { SliderResultListing } from './Sliders';
import currencyFormatter from 'currency-formatter'
import conf from '../settings';
const { IMG_URL, BASE_URL } = conf

const mapStateToProps = state => ({
    search: state.search
});

const mapDispatchToProps = {
    do_search: do_search_listings,
    display_listings : do_display_listings
};


class ResultListing extends Component{

	constructor(props){
  	  super(props)
  	  this.state = {
  	  	is_loading : true,
  	  	is_refresh : true,
  	  	is_initialize : true,
  	  	listings : [],
  	  	showSorting : false,
  	  	currentIndex : 1,
  	  	filter : [],
  	  	limit : 9,
  	  	end : 9,
  	  	start : 0
  	  }

  	  this.onPaginate = this.onPaginate.bind(this)
  	  this.onPageNext = this.onPageNext.bind(this)
  	  this.onPagePrev = this.onPagePrev.bind(this)
  	}

  	componentDidMount(){
      const { search, display_listings } = this.props
      var $this = this
      propserv.searchListings({ province : search.propadd, proptype : search.proptype, proplocal : search.proplocal, municipality : search.propmun, feature : [] }).then((res) => {
      		display_listings(res)
      		this.setState({
      			is_loading : false
      		})
      })      

    }

    onPriceLowest(){
   	  const { search, display_listings } = this.props
   	  const { start, end, limit, listings, currentIndex } = this.state 
      this.setState({
      	is_loading : true
      })
      propserv.searchListings({ province : search.propadd, proptype : search.proptype, proplocal : search.proplocal, municipality : search.propmun, feature : [], sort : 'asc' }).then((res) => {      		
      		var filter = res.filter((item, index) => (index >= 0 && index < limit ))
    		this.setState({
    			is_loading : false,
    			listings : res,
    			filter : filter,
    			start : 0,
    			end : limit,
    		})
      }) 
    }

    onPriceHighest(){
      const { search, display_listings } = this.props
      const { start, end, limit, listings, currentIndex } = this.state 
      this.setState({
      	is_loading : true
      })
      propserv.searchListings({ province : search.propadd, proptype : search.proptype, proplocal : search.proplocal, municipality : search.propmun, feature : [], sort : 'desc' }).then((res) => {
      		var filter = res.filter((item, index) => (index >= 0 && index < limit ))
    		this.setState({
    			is_loading : false,
    			listings : res,
    			filter : filter,
    			start : 0,
    			end : limit,
    		})
      }) 
    }

    onLatestPost(){
      const { search, display_listings } = this.props
      const { start, end, limit, listings, currentIndex } = this.state 
      this.setState({
      	is_loading : true
      })
      propserv.searchListings({ province : search.propadd, proptype : search.proptype, proplocal : search.proplocal, municipality : search.propmun, feature : [], sort : 'post' }).then((res) => {
      		var filter = res.filter((item, index) => (index >= 0 && index < limit ))
    		this.setState({
    			is_loading : false,
    			listings : res,
    			filter : filter,
    			start : 0,
    			end : limit,
    		})
      })
    }

    shouldComponentUpdate(nextProps, nextState){
    	const { search } = this.props
    	const { start, limit, end, is_refresh } = this.state

    	if(this.props.is_searching != nextProps.is_searching){    		
    		var filter = search.listings.filter((item, index) => (index >= 0 && index < limit ))
    		this.setState({
    			listings : search.listings,
    			filter : filter,
    			start : 0,
    			end : limit,
    		})

    	}

    	if(this.state.is_initialize && search.listings.length){
    		var filter = search.listings.filter((item, index) => (index >= start && index < end ))
    		this.setState({
    			listings : search.listings,
    			is_initialize : false,
    			filter : filter,
    			start : start + limit,
    			end : end + limit
    		})

    	}

    	return true
    }

    onPageNext(){
    	const { start, end, limit, listings, currentIndex } = this.state    	
    	var _start = (limit * (currentIndex + 1)) - limit
    	var _end = (limit * (currentIndex + 1))
    	var filter = listings.filter((item, index) => (index >= _start && index < _end))
    	if(filter.length){
    		this.setState({
    			filter : filter,
    			start : _start,
    			end : _end,
    			currentIndex : currentIndex + 1
    		})
    	}
    }

    onPagePrev(){
    	const { start, end, limit, listings, currentIndex } = this.state
    	var _start = (limit * (currentIndex - 1)) - limit
    	var _end = (limit * (currentIndex - 1))
    	var filter = listings.filter((item, index) => (index >= _start && index < _end))
    	if(filter.length){
    		this.setState({
    			filter : filter,
    			start : _start,
    			end : _end,
    			currentIndex : currentIndex - 1
    		})
    	}
    }

    onPaginate(pageindex){
    	const { start, end, limit, listings } = this.state

    	var _start = (limit * pageindex) - limit
    	var _end = (limit * pageindex)

    	var filter = listings.filter((item, index) => (index >= _start && index < _end))

    	if(filter.length){
    		this.setState({
    			filter : filter,
    			start : _start,
    			end : _end,
    			currentIndex : pageindex
    		})
    	}

    }

    onShowSorting(){
    	if(!this.state.showSorting){
    		this.setState({
    			showSorting : true
    		})
    	}
    	else{
    		this.setState({
    			showSorting : false
    		})
    	}
    }


	render(){
		const { search, prop_loading } = this.props
		const { is_loading, listings, filter, limit, currentIndex, showSorting } = this.state
		
		if(is_loading || prop_loading){
			return (
				<div className="container">
					<div className="row justify-content-center">
						<img src="/assets/img/loader.gif" width="100px"/>
					</div>
				</div>
			)
		}

		return (
			<section>
			
				<div className="container">
					<div className="row">
						
						<div className="col-lg-12 col-sm-12 list-layout">
							<div className="row">
							
								<div className="col-lg-12 col-md-12">
									<div className="filter-fl">
										<h4>Total Property Find is: <span className="theme-cl">{search.listings?.length}</span></h4>
										<div className="btn-group custom-drop">
											<button type="button" className="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e) => this.onShowSorting()}>
												Sort By<i className="ti-angle-down"></i>
											</button>
											<div className={(showSorting) ? "dropdown-menu pull-right animated flipInX show" : "dropdown-menu pull-right animated flipInX"}>
												<a onClick={(e) => this.onPriceLowest()}>Price lowest</a>
												<a onClick={(e) => this.onPriceHighest()}>Price highest</a>
												<a onClick={(e) => this.onLatestPost()} >Latest Post</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='row'>
							{ filter.length ? filter.map((item, index) => {
								var vendorprice = currencyFormatter.format(item.vendor_requested_price, { locale: 'en-PH' });
								var photo = BASE_URL + item.photo_url;
								if(item.photo_url.indexOf('http') != -1 || item.photo_url.indexOf('google') != -1){
										photo = item.photo_url
								}
								return (
										<div className='col-lg-4 col-md-5 col-sm-12' key={"property-"+index}>
											<div className='property-listing property-2'>
												<div className='listing-img-wrapper'>
													<SliderResultListing images={item.images} />
													<span className="property-type">{item.listing_type}</span>
												</div>
												<div className="listing-detail-wrapper pb-0">
													<div className="listing-short-detail">
														<h4 className="listing-name">
														<Link href={"/single-listing/" + item.property_id}><a>{item.property_name}</a></Link>
														</h4>
													</div>
                          <div className="listing-price-fx">
                            <h6 className="listing-card-info-price">{vendorprice}</h6>
                          </div>
												</div>
												<div className="price-features-wrapper">
                        <div className="listing-location">
                          <p>{item.line_1_number_building + ', ' + item.line_3_area_locality + ', ' + item.country_state_province + ', ' + item.zip_postcode}</p>
                         </div>											
													<div className="list-fx-features">
														<div className="listing-card-info-icon">
															<i className="las la-bed"></i><span className='info-label'>{item.bedrooms}</span>
														</div>
														<div className="listing-card-info-icon">
															<i class="las la-hotel"></i><span className='info-label'>{item.property_type}</span>
														</div>
													</div>
												</div>
                        <div className="price-features-wrapper">                          
                          <div className="list-fx-features">
                            <div className="listing-card-info-icon">
                              <i class="las la-bath"></i><span className='info-label'>{item.bathrooms}</span>
                            </div>
                            <div className="listing-card-info-icon">
                              <i class="las la-layer-group"></i><span className='info-label'>{item.lotarea}</span>
                            </div>
                          </div>
                        </div>
                        <div className="list-fx-features">
                          <div>
                            <a href='#' className='btn btn-md btn-primary req-info'>Request Info</a>
                          </div>
                           <div>
                              <Link href={"/single-listing/" + item.property_id}><a className='btn btn-md btn-primary prop-detail'>Property Detail</a></Link>
                          </div>
                        </div>
												<div className="modern-property-footer">
													<div className="property-author">
														<div className="path-img"><Link href={"/agent/" + item.owner_account_id} ><a><img src={photo} className="img-fluid" alt="" /></a></Link></div>
														<h5><Link href={"/agent/" + item.owner_account_id} ><a>{item.first_name + " " + item.last_name}</a></Link></h5>
													</div>
												</div>
											</div>
										</div>
									)
								}) : <div className='col-lg-4 col-md-6 col-sm-12'><strong>No Result Available</strong></div> }
								
							</div>
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<ul className="pagination p-center">
									{ listings.length ? 
									<li className="page-item">
									  <a className="page-link" onClick={(e) => this.onPagePrev()} aria-label="Previous">
										<span className="ti-arrow-left"></span>
										<span className="sr-only">Previous</span>
									  </a>
									</li> : <span></span> }
									{listings.length ? listings.map((item, index) => {

										if((index % limit) == 0){
											var pagenum = (index / limit) + 1
											return (
												<li key={ 'paginate-' + index } className={ (currentIndex == pagenum) ? "page-item active" : 'page-item' }><a className="page-link" onClick={(e) => this.onPaginate(pagenum)}>{pagenum}</a></li>
											)
										}

										return (
											<span key={ 'paginate-empty' + index }></span>
										)
										

									}) : <span></span> }
									{ listings.length ? <li className="page-item">
									  <a className="page-link" aria-label="Next" onClick={(e) => this.onPageNext()}>
										<span className="ti-arrow-right"></span>
										<span className="sr-only">Next</span>
									  </a>
									</li> : <span></span> }
									</ul>
								</div>
					</div>
						</div>
					</div>
				</div>
			</section>
		)

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ResultListing)