import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../../actions';
import './sign_out.scss';

class SignOut extends Component {
    componentDidMount() {
        // Action creator for sign out, don't forget connect, see sign_in
        this.props.signOut();
    }
    render() {
        return (
            <div className="sign-out">
                <div className="sign-out-header center">
                    <h1 className="center">Thank You for Visiting Out Site</h1>
                    <h2 className="center">You have been signed out</h2>
                </div>
            </div>
        );
    }
}

// Use connect to add sign out action creator to components props
export default connect(null, { // null holds mapStateToProps
    signOut: signOut // keyname (name does not matter): function
})(SignOut);