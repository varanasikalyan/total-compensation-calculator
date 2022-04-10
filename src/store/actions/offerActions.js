import axios from 'axios';
import API from '../../components/common/APIHelper';
import {CREATE_OFFER_SUCCESS, 
        CREATE_OFFER_ERROR, 
        GET_OFFERS_SUCCESS, 
        GET_OFFERS_ERROR,
        GET_OFFER_ERROR,
        GET_OFFER_SUCCESS, 
        OFFER_SHOW_LOADING } from '../types/offerTypes';

export const createOffer = (offer) => {    
    return (dispatch, getState) => {
        dispatch({ type: OFFER_SHOW_LOADING });
        axios.post(API.URI + 'api/v1/offers', {
            headers: {
                'Content-Type': 'application/form'                
            },
            mode: 'cors',
            offer: offer.offer,
            module_id: offer.module_id,
            offer_type: offer.offer_type,
            creator_id: offer.creator_id,
            options: offer.options
        }
        ).then( function(response) {
            dispatch({ type: CREATE_OFFER_SUCCESS, response });
        }).catch(error => {			
            dispatch({ type: CREATE_OFFER_ERROR, error });
        });        
    }
}

export const getOffers = (params) => {
    return (dispatch, getState) => {
        dispatch({ type: OFFER_SHOW_LOADING });
        var full_uri = API.URI + 'api/v1/offers'; 
		if (params.creator_id === '')
			full_uri = full_uri + '/latest/' + params.count
		else
			full_uri = full_uri + '/creator/' + params.creator_id +'/latest/' + params.count

		axios.get(full_uri, {
				headers: {
					'Content-Type': 'application/json'
				},
				mode: 'cors'    
		}).then( response => {											            
            dispatch({ type: GET_OFFERS_SUCCESS, response: response.data });
		}).catch(error => {			
            dispatch({ type: GET_OFFERS_ERROR, error });
        });         
    }
}

export const getOffer = (params) => {
    return (dispatch, getState) => {
        dispatch({ type: OFFER_SHOW_LOADING });
        axios.get(API.URI + 'api/v1/offers?id=' + params.id, {
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'    
        }).then( response => {            
            dispatch({ type: GET_OFFER_SUCCESS, offer: response.data.offer });            
        }).catch(error => {			
            dispatch({ type: GET_OFFER_ERROR, error });
        });
    }
}