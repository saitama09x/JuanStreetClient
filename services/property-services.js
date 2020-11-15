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

}

export default new propertiesServ