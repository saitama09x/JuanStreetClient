const axios = require('axios');

function propertiesServ(){

	const serv = axios.create({
	  baseURL: 'http://localhost:3001/api/client/',
	  timeout: 5000,
	});

	this.getFeatureProps = async () => {
		let res = await serv.get('get-properties');
		if(res){
			return res.data
		}

		return false
	}

	this.getSingleProperty = async (id) => {
		let res = await serv.get('get-property/' + id);
		if(res){
			return res.data
		}
		return false
	}

	this.getPropertyTypeRef = async () => {

		let res = await serv.get('property-type');
		if(res){
			return res.data
		}
		return false
	}

	this.getProvince = async () => {

		let res = await serv.get("location/provices");
		if(res){
			return res.data
		}
		return false
		
	}

	this.searchListings = async (obj) => {
		let res = await serv.post("search/listings", { province : obj.province, proptype : obj.proptype });
		if(res){
			return res.data
		}
		return false
	}

	this.province_listing_count = async () => {
		let res = await serv.get("provices/properties");
		if(res){
			return res.data
		}
		return false
	}

	this.get_referrence_feature = async () => {

		let res = await serv.get("references/features");
		if(res){
			return res.data
		}
		return false
	}

}

export default new propertiesServ