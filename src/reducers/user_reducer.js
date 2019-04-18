const DEFAULT_STATE = {
    auth: false,
    username: ''
};

// const exampleAction = {
//     type: 'LOG_USER_IN', // type tells redux how to update the state
//     username: 'JimBob'
// }

function userReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        // case 'LOG_USER_IN':
        //     return { ...state, auth: true, username: action.username };
        case 'SIGN_IN': // comes from index file in actions folder
            return { ...state, auth: true };
        default:
            return state;
    }
}

export default userReducer;