import types from './types';
import axios from 'axios';

export const checkAuth = () => async dispatch => {
    const { data: { success, email } } = await axios.get('/api/check-auth.php');

    if (success) {
        return dispatch({
            type: types.SIGN_IN,
            email
        });
    }
    return dispatch({
        type: types.SIGN_OUT
    });
}

// export async function signIn(user) {
//     console.log('Sign In Action Creator, user data:', user);

//     const resp = axios.get('/api/sign-in.php');

//     console.log('Sign In Resp:', resp);

//     return {
//         type: types.SIGN_IN
//     }
//     // A async function returns a promise automatically
// }

export function signIn(user) {
    return function (dispatch) {
        axios.post('/api/sign-in.php', user).then(resp => {
            console.log('Sign In Resp:', resp);
            if (resp.data.success) {
                localStorage.setItem('signedIn', 'true');

                dispatch({
                    type: types.SIGN_IN,
                    email: resp.data.email
                });
            } else {
                dispatch({
                    type: types.SIGN_IN_ERROR
                });
            }
        });
    }
}

// Make action creator for sign out
// Make the action type SIGN_OUT

export function signOut() {
    return function (dispatch) {
        axios.get('/api/sign-out.php').then(resp => {
            localStorage.removeItem('signedIn');

            dispatch({
                type: types.SIGN_OUT
            });
        });
    }
}

export function getAllProducts() {
    return function (dispatch) {
        axios.get('/api/getproducts.php').then((resp) => {
            dispatch({
                type: types.GET_ALL_PRODUCTS,
                products: resp.data.products
            });
        });
    }
}