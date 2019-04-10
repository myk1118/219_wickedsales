import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './cart';
import Home from './home';
import Nav from './nav';
import NotFound from './404';
import ProductRoutes from './products';
// same as
// import ProductRoutes from './products/index';

const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={ProductRoutes} />
                <Route path="/cart" component={Cart} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </div>
);

export default App;