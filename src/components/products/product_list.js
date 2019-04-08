import React, { Component } from 'react';
import axios from 'axios';
import ProductItem from './product_item';
import { bindActionCreators } from 'redux';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.goToDetails = this.goToDetails.bind(this);
    }

    componentDidMount() {
        this.getProducts();
    }

    goToDetails(id) {
        this.props.history.push(`/products/${id}`);
    }

    getProducts() {
        axios.get('/api/getproducts.php').then((resp) => {
            this.setState({
                products: resp.data.products
            });
        });
    }

    render() {
        console.log('State:', this.state);

        const productList = this.state.products.map((product) => {
            return <ProductItem key={product.id} {...product} goToDetails={this.goToDetails} />;
        });

        return (
            <div className="product-list">
                <h1 className="center">Wicked Product List</h1>
                <ul className="collection">
                    {productList}
                </ul>
            </div>
        );
    }
}

export default ProductList;