import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Step, View } from 'blocks';

import { ShowOverlayType, ShowOverlayCategory, ShowOverlayTemplate } from './classified-overlays';

const keyComponents = {
    overlayType: ShowOverlayType,
    overlayCategory: ShowOverlayCategory,
    overlayTemplate: ShowOverlayTemplate,
}

export default class CreateOverlays extends React.Component {
    render() {
        const { steps, onSelect, selected } = this.props;
        const activeStep = _.find(steps, 'active');
        const ShowComponent = keyComponents[activeStep.key];
        return (
            <>
                <Step steps={steps} />
                <View className='overlay-list'>
                    <ShowComponent 
                        onSelect={onSelect} 
                        selected={selected}
                    />
                </View>
            </>
        );
    }
}

CreateOverlays.propTypes = {
    stepsStatus: PropTypes.object,
    steps: PropTypes.array,
}