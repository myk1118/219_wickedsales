import React, { Component } from 'react';

class ProductDetails extends Component {
    componentDidMount() {
        // Call server to get product details
        const { params } = this.props.match;

        console.log("Fetch product with id of:", params.product_id);
    }
    render() {
        return (
            <div className="product-details">
                <h1 className="center">[Product Name] Details</h1>
            </div>
        );
    }
}

export default ProductDetails;