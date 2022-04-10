import { combineReducers } from 'redux';
import offerReducer from './offerReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    offer: offerReducer,
    user: userReducer
})

export default rootReducer;