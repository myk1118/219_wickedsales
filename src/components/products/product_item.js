import React from 'react';
import { formatMoney } from '../../helpers';

// console.log('Format Monies:', formatMoney(1127));
// console.log('Format Money:', formatMoney('asdf'));

export default ({ name, price, images: [productImg = ''] }) => {

    // const arr = [1, 2, 3, 4, 5];
    // const [first] = arr;
    // const [first, sec] = arr;
    // const [,, third] = arr;

    return (
        <li className="collection-item avatar">
            <img className="circle" src={`/dist/${productImg}`} alt={`${name} product image`} />
            <span className="title">{name}</span>
            <p>{formatMoney(price)}</p>
        </li>
    );
}

// export default props => {
//     return (
//         <li className="collection-item avatar">
//             <img className="circle" src={`/dist/${props.images[0]}`} alt={`${props.name} product image`} />
//             <span className="title">{props.name}</span>
//             <p>{formatMoney(props.price)}</p>
//         </li>
//     );
// }
