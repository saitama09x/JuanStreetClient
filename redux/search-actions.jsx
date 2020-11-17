import propserv from '../services/property-services';

export const search_action = "search_action"
export const display_listings = "display_listings"

export function do_search_listings(obj){
	
	return {
		type : search_action,
		proptype : obj.proptype,
		propadd : obj.propadd
	}

}

export function do_display_listings(listings){

	return {
		type : display_listings,
		listings : listings
	}

}