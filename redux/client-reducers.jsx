import { search_action, display_listings } from "./search-actions"

const initialSearch = {
	proptype : "",
	propadd : "",
	listings : []
}

function search_reducers( state = initialSearch, action){
	
	switch(action.type){

		case search_action : 
			return { ...state, proptype : action.proptype, propadd : action.propadd, proplocal : action.proplocal }
		case display_listings : 
			return { ...state, listings : action.listings}
		default:
			return state

	}
	

}

export default search_reducers;