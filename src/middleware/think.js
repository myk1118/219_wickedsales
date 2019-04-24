// currying

// es5 syntax
// export default function think(store) {
//     return function (next) {
//         return function (action) {
//             // code goes here
//         }
//     }
// }

// think(reduxStore)(theNextFunctionInLine)(action);

// es6 syntax
export default (store) => (next) => (action) => {
    // code goes here
    if (typeof action !== 'function') {
        return next(action);
    }
    return action(store.dispatch);
}
