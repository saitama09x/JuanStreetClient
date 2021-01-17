const axios = require('axios');
import conf from '../settings'
const { BASE_URL } = conf

function propertiesServ(){

	const serv = axios.create({
	  baseURL: BASE_URL + 'api',
	  timeout: 10000,
	});

	this.getFeatureProps = async () => {
		let res = await serv.get('/client/get-properties');
		if(res){
			return res.data
		}

		return false
	}

	this.getSingleProperty = async (id) => {
		let res = await serv.get('/client/get-property/' + id);
		if(res){
			return res.data
		}
		return false
	}

	this.getPropertyTypeRef = async () => {

		let res = await serv.get('/client/property-type');
		if(res){
			return res.data
		}
		return false
	}

	this.getProvince = async () => {

		let res = await serv.get("/client/location/provices");
		if(res){
			return res.data
		}
		return false
		
	}

	this.searchListings = async (obj) => {
		let res = await serv.post("/client/search/listings", { province : obj.province, proptype : obj.proptype, proplocal : obj.proplocal, feature : obj.feature });
		if(res){
			return res.data
		}
		return false
	}

	this.province_listing_count = async () => {
		let res = await serv.get("/client/provices/properties");
		if(res){
			return res.data
		}
		return false
	}

	this.get_referrence_feature = async () => {

		let res = await serv.get("/client/references/features");
		if(res){
			return res.data
		}
		return false
	}

}

export default new propertiesServ