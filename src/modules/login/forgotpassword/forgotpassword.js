import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { ForgotPasswordForm } from 'components/loginforms';

class ForgotPassword extends React.Component {
    handleForgotPassword = (userInput) => {
        const { redirectTo, onForgotPassword } = this.props;
        onForgotPassword(userInput, redirectTo);
    }

    handleSignin = () => this.props.onRedirect(this.props.signinPath)

    render () {
        return (
            <>
                <ForgotPasswordForm 
                    onForgotPassword={this.handleForgotPassword}
                    onSigninClick={this.handleSignin}
                />
            </>
        );        
    }
}

export default withRouter(ForgotPassword);
ForgotPassword.propTypes = {
    signinPath: PropTypes.string.isRequired,
};
ForgotPassword.defaultProps = {
    onForgotPassword: _.noop,
    onRedirect: _.noop,
};