const axios = require('axios');
import conf from '../settings'
const { BASE_URL } = conf

function AgentServ(){

	const serv = axios.create({
	  baseURL: BASE_URL + 'api',
	  timeout: 50000,
	});

	this.getUserProfile = async () => {
		let res = await serv.get('/client/user/profile');
		if(res){
			return res.data
		}

		return false
	}

	this.getSingleUser = async (id) => {
		let res = await serv.get('/client/user/profile/' + id);
		if(res){
			return res.data
		}

		return false
	}

	this.getUserListings = async (id) => {
		let res = await serv.get('/client/profile/'+ id + '/listings');
		if(res){
			return res.data
		}

		return false
	}

	this.searchAgent = async (search) => {
		let res = await serv.post("/client/user/profile/search", {search : search});
		if(res){
			return res.data
		}

		return false
	}

	this.searchListing = async (id, search) => {
		let res = await serv.post("/client/profile/listing/search", {search : search, id : id});
		if(res){
			return res.data
		}

		return false
	}

	this.sendEmail = async (obj) => {
		let res = await serv.post("/client/send-email", obj);
		if(res){
			return res.data
		}

		return false
	}

	this.doLogin = async (obj) => {

		let res = await serv.post("/user/do-login", obj);
		if(res){
			return res.data
		}

		return false
		
	}
}

export default new AgentServ