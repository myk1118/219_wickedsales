// const state = {
//     user: {
//         auth: false,
//         username: 'Steve'
//     },
//     products: {
//         list: [],
//         productDetails: {}
//     },
//     cart: {
//         totalItems: 4,
//         totalCost: 8900,
//         items: []
//     }
// }

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import productsReducer from './products_reducer';

const rootReducer = combineReducers({
    // map of what the state is going to look like, you don't have to write out state variable, combineReducers is doing it for you
    form: formReducer,
    products: productsReducer,
    user: userReducer // calling userReducer function
});

// const state = {
//     form: {},
//     user: {
//         auth: false,
//         username: ''
//     }
// }

export default rootReducer;
