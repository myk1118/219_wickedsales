import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    email: ''
};

// const exampleAction = {
//     type: 'LOG_USER_IN', // type tells redux how to update the state
//     username: 'JimBob'
// }

function userReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        // case 'LOG_USER_IN':
        //     return { ...state, auth: true, username: action.username };
        case types.SIGN_IN: // comes from index file in actions folder
            return { ...state, auth: true, email: action.email };
        case types.SIGN_OUT:
            // return { ...state, auth: false };
            return { ...DEFAULT_STATE };
        default:
            return state;
    }
}

export default userReducer;