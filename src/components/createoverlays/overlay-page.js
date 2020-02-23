import React from 'react';
import PropTypes from 'prop-types';
import WebPage from './webpage';
import { overlayTypeMap } from './overlayType';
import { View } from 'blocks';

export default class OverlayPage extends React.Component {
    render() {
        const { type, category } = this.props;
        const ComponentMapped = overlayTypeMap[type];

        return(
            <View>
                <WebPage size='xlarge' />
                <ComponentMapped category={category} />
            </View>
        );
    }
}
OverlayPage.propTypes = {

};
OverlayPage.defaultProps = {

};