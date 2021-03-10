const axios = require('axios');
import conf from '../settings'
const { API_URL } = conf

function propertiesServ(){

	const serv = axios.create({
	  baseURL: API_URL + 'client',
	  timeout: 100000,
	});

	this.getFeatureProps = async () => {
		let res = await serv.get('/get-properties');
		if(res){
			return res.data
		}

		return false
	}

	this.getSingleProperty = async (id) => {
		let res = await serv.get('/get-property/' + id);
		if(res){
			return res.data
		}
		return false
	}

	this.getLocationResult = async (id) => {
		
		let res = await serv.get('/property-location-result/' + id);
		if(res){
			return res.data
		}
		return false
		
	}

	this.getPropertyTypeRef = async () => {

		let res = await serv.get('/property-type');
		if(res){
			return res.data
		}
		return false
	}

	this.getProvince = async () => {

		let res = await serv.get("/location/provinces");
		if(res){
			return res.data
		}
		return false
		
	}

	this.searchListings = async (obj) => {
		let res = await serv.post("/search/listings", { province : obj.province, proptype : obj.proptype, 
			proplocal : obj.proplocal, feature : obj.feature, 
			min_amount : obj.min, max_amount : obj.max, municipality : obj.municipality, sort : obj.sort });
		
		if(res){
			return res.data
		}
		return false
	}

	this.province_listing_count = async () => {
		let res = await serv.get("/provinces/properties");
		if(res){
			return res.data
		}
		return false
	}

	this.get_referrence_feature = async () => {

		let res = await serv.get("/references/features");
		if(res){
			return res.data
		}
		return false
	}

	this.geocoding = async function(query){
		let res = await axios.get('http://api.positionstack.com/v1/forward?access_key=0dfac563419027f559acd6afa493acd1&query='+query);
		if(res){
			return res.data
		}
		return false
	}

	this.getMunicipalities = async function(){
		let res = await serv.get('/location/munipalities');
		if(res.status == 200){
			return res.data
		}
		return false
	}

}

export default new propertiesServ