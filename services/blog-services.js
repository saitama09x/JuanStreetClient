const axios = require('axios');
import conf from '../settings'
const { BASE_URL } = conf

function BlogServ(){

	const serv = axios.create({
	  baseURL: BASE_URL + 'api',
	  timeout: 10000,
	});


	this.addPage = async (obj) => {
		let res = await serv.post("/blog/add-page", obj)
		if(res){
			return res
		}
		return false
	}

}


export default new BlogServ