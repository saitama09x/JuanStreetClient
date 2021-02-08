const axios = require('axios');
import conf from '../settings'
const { BASE_URL } = conf

function AgentServ(){

	const serv = axios.create({
	  baseURL: BASE_URL + 'client',
	  timeout: 100000,
	});

	this.getUserProfile = async () => {
		let res = await serv.get('/profile');
		if(res){
			return res.data
		}

		return false
	}

	this.getSingleUser = async (id) => {
		let res = await serv.get('/profile/' + id);
		if(res){
			return res.data
		}

		return false
	}

	this.getUserListings = async (id) => {
		let res = await serv.get('/profile/'+ id + '/listings');
		if(res){
			return res.data
		}

		return false
	}

	this.searchAgent = async (search) => {
		let res = await serv.post("/profile/search", {search : search});
		if(res){
			return res.data
		}

		return false
	}

	this.searchListing = async (id, search) => {
		let res = await serv.post("/profile/listing/search", {search : search, id : id});
		if(res){
			return res.data
		}

		return false
	}

	this.sendEmail = async (obj) => {
		let res = await serv.post("/send-email", obj);
		if(res){
			return res.data
		}

		return false
	}

	this.doLogin = async (obj) => {

		let res = await serv.post("/do-login", obj);
		if(res){
			return res.data
		}

		return false
		
	}

	this.signUp = async(obj) => {
		let res = await serv.post("/create-account", obj);
		if(res){
			return res.data
		}

		return false
	}
}

export default new AgentServ