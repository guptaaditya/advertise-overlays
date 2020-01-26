import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { ResetPasswordForm } from 'components/loginforms';

class ResetPassword extends React.Component {
    handleResetPassword = (userInput) => {
        const { redirectTo, onResetPassword } = this.props;
        onResetPassword(userInput, redirectTo);
    }

    handleSignin = () => this.props.onRedirect(this.props.signinPath)

    render () {
        return (
            <>
                <ResetPasswordForm 
                    onResetPasswordClick={this.handleResetPassword}
                    onSigninClick={this.handleSignin}
                />
            </>
        );        
    }
}

export default withRouter(ResetPassword);

ResetPassword.propTypes = {
    signinPath: PropTypes.string.isRequired,
};
ResetPassword.defaultProps = {
    onResetPassword: _.noop,
    onRedirect: _.noop,
};