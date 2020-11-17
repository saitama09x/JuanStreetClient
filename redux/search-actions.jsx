export const search_action = "search_action"


export function do_search_listings(obj){
	
	return {
		type : search_action,
		proptype : obj.proptype,
		propadd : obj.propadd
	}

}