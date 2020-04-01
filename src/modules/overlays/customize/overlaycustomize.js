import React from 'react';
import PropTypes from 'prop-types';
import CustomizeOverlayComponent from 'components/customizeoverlay';

export default class CustomizeOverlay extends React.Component {
    render() {
        const { selected } = this.props;
        return(
            <CustomizeOverlayComponent selected={selected} />
        );
    }
}
CustomizeOverlay.propTypes = {
    selected: PropTypes.shape({
        type: PropTypes.string,
        category: PropTypes.string,
        template: PropTypes.string,
        name: PropTypes.string,
    }).isRequired
};

CustomizeOverlay.defaultProps = {};