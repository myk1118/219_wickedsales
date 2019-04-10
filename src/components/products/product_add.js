import React, { Component } from 'react';

class ProductAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qty: 1
        }

        this.addToCart = this.addToCart.bind(this);
        this.incrementQty = this.incrementQty.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
    }

    addToCart() {
        console.log('Add', this.state.qty, 'products to cart, ID:', this.props.productId);
    }

    incrementQty() {
        this.setState({
            qty: this.state.qty + 1
            // you can't do this.state.qty++ because that is manipulating the state
        });
    }

    decrementQty() {
        if (this.state.qty > 1) {
            this.setState({
                qty: this.state.qty - 1
            });
        }
    }

    render() {
        return (
            <div className="right-align add-to-cart">
                <span className="qty-container">
                    <button onClick={this.decrementQty} className="btn btn-small btn-floating green lighten-1">
                        <i className="material-icons">remove</i>
                    </button>
                    <span className="product-qty">{this.state.qty}</span>
                    <button onClick={this.incrementQty} className="btn btn-small btn-floating green lighten-1">
                        <i className="material-icons">add</i>
                    </button>
                </span>
                <button onClick={this.addToCart} className="btn green darken-2">
                    <i className="material-icons">add_shopping_cart</i>
                </button>
            </div>
        );
    }
}

export default ProductAdd;