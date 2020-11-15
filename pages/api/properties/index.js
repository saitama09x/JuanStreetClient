/*const db = require('../../../lib/db')
const { CreateRoutes } = require('../../../lib/helper-routes')
const _escape = require('sql-template-strings')

function Properties(){


	this.getAllProperties = async () => {

		let query = await db.query("select * from properties");

		if(query){
			return query
		}

		return false;
	}


}

let prop = new Properties();

export default async function handler(req, res) {
  
  const route = new CreateRoutes(req, res);

  route.get('/api/properties/', async function(req, res){
  		let all = await prop.getAllProperties();
  		res.send(all)
  })




}*/