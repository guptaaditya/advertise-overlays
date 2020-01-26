import React from 'react';
import { Redirect, withRouter } from "react-router-dom";

class RedirectTo extends React.PureComponent {
    state = {
        currentUrl: '',
    }

    redirect() {
        this.props.history.push(this.state.currentUrl);
    }

    shouldRedirect() {
        if (this.props.redirectToUrl !== this.state.currentUrl) {
            this.setState({ currentUrl: this.props.redirectToUrl }, this.redirect);
        }
    }

    componentDidMount() {
        this.shouldRedirect();
    }

    componentDidUpdate() {
        this.shouldRedirect();
    }
    
    render() {
        return null;
    }
}

export default withRouter(RedirectTo);
