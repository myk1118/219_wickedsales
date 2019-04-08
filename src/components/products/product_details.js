import React, { Component } from 'react';
import axios from 'axios';
import ProductCarousel from './product_carousel';

class ProductDetails extends Component {
    state = {
        details: null
    }

    componentDidMount() {
        // setTimeout(() => {
        this.getDetails()
        // }, 2000);
    }

    async getDetails() {
        // Call server to get product details
        const { params } = this.props.match;

        const resp = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);

        console.log('Resp:', resp);

        if (resp.data.success) {
            this.setState({
                details: resp.data.productInfo
            });
        } else {
            this.setState({
                details: false
            });
        }
    }

    render() {
        console.log('Product Details:', this.state.details);
        const { details } = this.state;

        if (details === null) {
            return <h1>Loading...</h1>
        } else if (!details) {
            return <h1 className="center">No Product Found</h1>
        }

        const { description = 'No description available', name, images, price } = details;
        // const imageList = images.map((image, index) => {
        //     return (
        //         <img key={index} src={`/dist/${image}`} />
        //     );
        // })
        return (
            <div className="product-details" >
                <h1 className="center">{name}</h1>
                <ProductCarousel images={images} />
                <p> ${(price / 100).toFixed(2)}</p >
                <p>{description}</p>
            </div >
        );
    }
}

export default ProductDetails;