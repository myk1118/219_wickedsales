import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidenav from './sidenav';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="light-green lighten-1">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/">Wicked Sales</Link>
                        <a href="#" data-target="sidenav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Sidenav />
            </div>
        );
    }
}

export default Nav;