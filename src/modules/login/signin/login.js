import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { LoginForm } from 'components/loginforms';

class Login extends React.Component {
    handleRemember = (remember) => {

    }

    handleLogin = (userInput) => {
        const { redirectTo, onLogin } = this.props;
        const query = new URLSearchParams(this.props.location.search);
        const redirectUrlFromSearch = query.get('redirectUrl');
        onLogin(userInput, redirectUrlFromSearch || redirectTo);
    }

    handleSignup = () => this.props.onRedirect(this.props.signupPath)

    handleForgotPassword = () => this.props.onRedirect(this.props.forgotpasswordPath)


    render () {
        return (
            <>
                <LoginForm 
                    onLogin={this.handleLogin}
                    onRemember={this.handleRemember} 
                    onSignupClick={this.handleSignup}
                    onForgotPasswordClick={this.handleForgotPassword}
                />
            </>
        );        
    }
}

export default withRouter(Login);
Login.propTypes = {
    signupPath: PropTypes.string.isRequired,
    forgotpasswordPath: PropTypes.string.isRequired,
};
Login.defaultProps = {
    onLogin: _.noop,
    onRedirect: _.noop,
};