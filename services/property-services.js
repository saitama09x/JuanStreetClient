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

}

export default new propertiesServ