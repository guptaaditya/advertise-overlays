import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Step, View, FluidContainer } from 'blocks';
import OverlayType from './overlayType';
import OverlayCategory from './overlayCategory';
import OverlayTemplate from './overlayTemplate';
import OverlayName from './overlayName';

function ShowOverlayType(props) {
    const { onSelectType } = props;
    return (
        <>
            <FluidContainer className='overlay-card' colWidth={5}>
                <OverlayType type='bar' onSelect={onSelectType} />
                <OverlayType type='notification' onSelect={onSelectType} />
                <OverlayType type='popup' onSelect={onSelectType} />
                <OverlayType type='full page' onSelect={onSelectType} />
            </FluidContainer>
        </>
    )
}

function ShowOverlayCategory(props) {
    const { onSelectcategory } = props;
    return (
        <>
            <FluidContainer colWidth={5}>
                <OverlayCategory type='call to action' onSelect={onSelectcategory} />
                <OverlayCategory type='opt in' onSelect={onSelectcategory} />
                <OverlayCategory type='timer' onSelect={onSelectcategory} />
                <OverlayCategory type='content suggestion' onSelect={onSelectcategory} />
                <OverlayCategory type='custom' onSelect={onSelectcategory} />
            </FluidContainer>
        </>
    )
}

function ShowOverlayTemplate(props) {
    
}

function ShowOverlayName(props) {
    
}
const keyComponents = {
    'overlayType': ShowOverlayType,
    'overlayCategory': ShowOverlayCategory, //Work here on defining their components
    'overlayTemplate': ShowOverlayTemplate,
    'overlayName': ShowOverlayName,
}
export default class CreateOverlays extends React.Component {
    render() {
        const { 
            onSelectType, 
            onSelectCategory,
            onSelectTemplate,
            onSelectName,  
            steps
        } = this.props;
        const activeStep = _.find(steps, { completed: false, disabled: false });
        const ShowComponent = keyComponents[activeStep.key];
        const onSelectProps = {
            onSelectType, 
            onSelectCategory,
            onSelectTemplate,
            onSelectName,
        };
        return (
            <>
                <Step steps={steps} />
                <View className='overlay-list'>
                    <ShowComponent {...onSelectProps} />
                </View>
            </>
        );
    }
}

CreateOverlays.propTypes = {
    stepsStatus: PropTypes.object,
    steps: PropTypes.array,
}