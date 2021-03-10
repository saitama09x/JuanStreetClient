import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Header from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import propserv from '../../services/property-services';
import AgentServ from '../../services/agent-services';
import { SliderBanner } from '../../Components/Sliders';
import { DetailSingle } from '../../Components/Details';
import Swal from 'sweetalert2'

export async function getServerSideProps({params}){
    let res = await propserv.getSingleProperty(params.id);    
    if(res.media.length <= 8){
    	var extend_media = [];
    	for(var x = 0; x < 5; x++){
    		for(var i in res.media){
	    		extend_media.push(res.media[i])
	    	}
    	}
    	

    	var join_arr = res.media.concat(extend_media);
    	Object.assign(res, { media : join_arr})
    }

    return { props : { listings : res, page_id : params.id }}
}


class SingleListing extends Component{

	constructor(props){
		super(props)
		this.sendEmail = this.sendEmail.bind(this)
		this.state = {
			lat : 0,
			long : 0,
			features : []
		}

	}

	componentDidMount(){		

		const { property, address, details } = this.props.listings;
		const geocoding = address.line_3_area_locality + ',' + address.town_city + ',' + 
			address.country_state_province + ',' + address.zip_postcode + ',' + address.country
		
		propserv.getLocationResult(this.props.page_id).then((res) => {
			if(res){
				this.setState({
					features : res
				})
			}
		});

		propserv.geocoding(geocoding).then((res) => {
			const { latitude, longitude} = res.data[0]
			this.setState({
				lat : latitude,
				long : longitude
			})
		})		

	}


	sendEmail(email, phone, comment){
		var obj = {
			email : email,
			phone : phone,
			comment : comment
		}

		AgentServ.sendEmail(obj).then((res) => {
			if(res){
				Swal.fire({
				  text: 'Email Sent',
				  icon: 'success',
				})
			}
		})

	}

	render(){
		const { listings } = this.props
		const { lat, long, features } = this.state

		 const MyMapComponent = withScriptjs(withGoogleMap((props) =>
	      <GoogleMap
	        defaultZoom={8}
	        defaultCenter={{ lat: lat, lng: long }}
	      >
	        {props.isMarkerShown && <Marker position={{ lat: lat, lng: long }} />}
	      </GoogleMap>
	    ))

		return (
			<div>
				<Head>	
			        <meta charSet="utf-8" />
        			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        			<title>JuanStreet Single Listing</title>
        			<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
			     	<script src="https://use.fontawesome.com/cc7a461b9b.js"></script>
			      </Head>
				<Header />
				<SliderBanner 
					listings={listings} 
				/>
				<DetailSingle listings={listings} 
					features={features} 
					sendEmail={(obj) => this.sendEmail(obj.email, obj.phone, obj.comment)}
					GoogleMap={MyMapComponent}
					latitude={lat}
					longitude={long}
				/>
				<Footer />
			</div>
		)
	}


}

export default SingleListing