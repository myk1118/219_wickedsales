import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // higher order component - adds functionality to components
import axios from 'axios';
import Modal from '../modal';

class ProductAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qty: 1,
            modalOpen: false,
            totalPrice: 0,
            cartQty: 0
        }

        this.addToCart = this.addToCart.bind(this);
        this.incrementQty = this.incrementQty.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
    }

    addToCart() {
        const { productId, updateCart } = this.props;
        const { qty } = this.state;
        axios.get(`/api/addcartitem.php?product_id=${productId}&quantity=${qty}`).then(resp => {
            const { cartCount, cartTotal } = resp.data;
            console.log('Add Cart Resp:', resp);
            updateCart(cartCount);
            this.setState({
                modalOpen: true,
                cartQty: cartCount,
                totalPrice: cartTotal
            });
        });
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
        const { modalOpen, totalPrice, cartQty, qty } = this.state;

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
                <Modal isOpen={modalOpen}>
                    <h1 className="center">{qty} Item(s) Added to Cart</h1>
                    <div className="row">
                        <div className="col s6">Cart Total Items</div>
                        <div className="col s6">{cartQty}</div>
                    </div>
                    <div className="row">
                        <div className="col s6">Cart Total Price</div>
                        <div className="col s6">{totalPrice}</div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(ProductAdd);