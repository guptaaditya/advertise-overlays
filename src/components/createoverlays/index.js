import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Step, View, FluidContainer } from 'blocks';
import OverlayType from './overlayType';

function ShowOverlayType(props) {
    const { onSelectType } = props;
    return (
        <>
            <FluidContainer colWidth={5}>
                <OverlayType type='bar' onSelect={onSelectType} />
                <OverlayType type='notification' onSelect={onSelectType} />
                <OverlayType type='popup' onSelect={onSelectType} />
                <OverlayType type='full page' onSelect={onSelectType} />
            </FluidContainer>
        </>
    )
}

const keyComponents = {
    'overlayType': ShowOverlayType,
    'overlayCategory': ShowOverlayType, //Work here on defining their components
    'overlayTemplate': ShowOverlayType,
    'overlayName': ShowOverlayType,
}
export default class CreateOverlays extends React.Component {
    render() {
        const { steps, onSelectType } = this.props;
        const activeStep = _.find(steps, { completed: false, disabled: false });
        const ShowComponent = keyComponents[activeStep.key];
        return (
            <>
                <Step steps={steps} />
                <View className='overlay-list'>
                    <ShowComponent onSelectType={onSelectType} />
                </View>
            </>
        );
    }
}

CreateOverlays.propTypes = {
    stepsStatus: PropTypes.object,
    steps: PropTypes.array,
}