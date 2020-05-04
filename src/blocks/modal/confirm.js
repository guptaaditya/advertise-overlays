import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'blocks';
import { Button } from 'blocks';

export default class Confirmation extends React.Component {
    constructor() {
        super();
        this.getBodyMessage = this.getBodyMessage.bind(this);
    }

    getBodyMessage() {
        return (
            <p>
                {this.props.message}
            </p>
        )
    }

    getFooterActions() {
        return (
            <>
                <Button color='Green' onClick={this.props.onAccept}>Yes</Button>
                <Button color='red' onClick={this.props.onReject}>No</Button>
            </>
        )
    }

    render() {
        const { isVisible, header } = this.props;
        return (
            <Modal 
                open={isVisible}
                header={header}  
                content={this.getBodyMessage} 
                actions={this.getFooterActions()}
            />
        )
    }
}
Confirmation.propTypes = {
    onAccept: PropTypes.func.isRequired,
    onReject: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
    header: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
};