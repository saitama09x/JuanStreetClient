
export function CreateRoutes(req, res){

	this.post = (url, doAction) => {
		if(req.method == 'POST' && url == req.url){
			doAction(req, res)
		}
	}

	this.get = (url, doAction) => {
		if(req.method == 'GET' && url == req.url){
			doAction(req, res)
		}
	}

}