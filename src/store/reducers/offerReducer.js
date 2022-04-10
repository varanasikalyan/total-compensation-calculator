import { CREATE_OFFER_SUCCESS, CREATE_OFFER_ERROR, GET_OFFER_SUCCESS, GET_OFFER_ERROR, GET_OFFERS_SUCCESS, GET_OFFERS_ERROR, UPDATE_OFFER_SUCCESS, DELETE_OFFER_SUCCESS, OFFER_SHOW_LOADING } from '../types/offerTypes';

const initState = {
    response: null,
    status: '',
    offers: [],
    current_offer: null,
    error: null,
    loading: false    
}

const offerReducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_OFFER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: CREATE_OFFER_SUCCESS,
                response: action.response
            }
        case CREATE_OFFER_ERROR:    
            return {
                ...state,
                loading: false,
                status: CREATE_OFFER_ERROR,
                error: action.error
            }
        case GET_OFFERS_SUCCESS:
            return {
                ...state,
                loading: false,
                status: GET_OFFERS_SUCCESS,
                offers: action.response.offers,
                response: action.response
            }
        case GET_OFFERS_ERROR:
            return {
                ...state,
                loading: false,
                status: GET_OFFERS_ERROR,
                offers: [],
                error: action.error
            }
        case GET_OFFER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: GET_OFFER_SUCCESS,
                offers: [],
                current_offer: action.offer,
                response: action.response
            }
        case GET_OFFER_ERROR:
            const empty = {
                'id': '<---->',
                'offer' : '<---->',                
                'options': [],
                'creator_id': '<---->',
            };
            return {
                ...state,
                loading: false,
                current_offer: empty,
                offers: [],
                status: GET_OFFER_ERROR,
                error: action.error
            }
        case UPDATE_OFFER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: UPDATE_OFFER_SUCCESS,
                response: action.response
            }
        case OFFER_SHOW_LOADING:
            return {
                ...state,
                loading: true            
            }
        case DELETE_OFFER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: DELETE_OFFER_SUCCESS,                
                response: action.response
            }
        default:
            return state;
    }
}

export default offerReducer;