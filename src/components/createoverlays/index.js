import React from 'react';
import PropTypes from 'prop-types';
import { Step, View, FluidContainer } from 'blocks';
import OverlayType from './overlayType';

export default class CreateOverlays extends React.Component {
    render() {
        const { steps } = this.props;
        return (
            <>
                <Step steps={steps} />
                <View className='overlay-list'>
                    <FluidContainer colWidth={5}>
                        <OverlayType type='bar' />
                        <OverlayType type='notification' />
                        <OverlayType type='popup' />
                        <OverlayType type='full page' />
                    </FluidContainer>
                </View>
            </>
        );
    }
}

CreateOverlays.propTypes = {
    stepsStatus: PropTypes.object,
    steps: PropTypes.array,
}