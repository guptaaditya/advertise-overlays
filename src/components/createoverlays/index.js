import React from 'react';
import PropTypes from 'prop-types';
import { Step } from 'blocks';

export default class CreateOverlays extends React.Component {
    render() {
        const { steps } = this.props;
        return (
            <Step steps={steps} />
        );
    }
}

CreateOverlays.propTypes = {
    stepsStatus: PropTypes.object,
    steps: PropTypes.array,
}