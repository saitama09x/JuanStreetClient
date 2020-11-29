const axios = require('axios');

function AgentServ(){

	const serv = axios.create({
	  baseURL: 'http://localhost:3001/api/client/',
	  timeout: 5000,
	});

	this.getUserProfile = async () => {
		let res = await serv.get('user/profile');
		if(res){
			return res.data
		}

		return false
	}

	this.getSingleUser = async (id) => {
		let res = await serv.get('user/profile/' + id);
		if(res){
			return res.data
		}

		return false
	}

	this.getUserListings = async (id) => {
		let res = await serv.get('profile/'+ id + '/listings');
		if(res){
			return res.data
		}

		return false
	}

}

export default new AgentServ