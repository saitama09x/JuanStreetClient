import { search_action } from "./search-actions"

const initialSearch = {
	proptype : "",
	propadd : ""	
}

function search_reducers( state = initialSearch, action){
	
	switch(action.type){

		case search_action : 
			return { ...state, proptype : action.proptype, propadd : action.propadd }
		default:
			return state

	}
	

}

export default search_reducers;