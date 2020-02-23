import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Step, View, FluidContainer } from 'blocks';
import BarOverlayType from './type/bar';
// import OverlayType from './type';
import OverlayType from './overlayType';
import OverlayCategory from './overlayCategory';
import OverlayTemplate from './overlayTemplate';
import OverlayName from './overlayName';
import BarImg from 'img/overlay/type/bar.png';
import NotificationImg from 'img/overlay/type/notification.png';
import PopupImg from 'img/overlay/type/popup.png';
import FullScreenImg from 'img/overlay/type/fullpage.png';

function ShowOverlayType(props) {
    const { onSelectType } = props;
    return (
        <>
            <FluidContainer className='overlay-card' colWidth={5}>
                <OverlayType type='bar' caption='Bar' img={BarImg} onSelect={onSelectType} />
                <OverlayType type='notification'caption='Notification' img={NotificationImg} onSelect={onSelectType} />
                <OverlayType type='popup'caption='Popup' img={PopupImg} onSelect={onSelectType} />
                <OverlayType type='fullpage'caption='Full Screen' img={FullScreenImg} onSelect={onSelectType} />
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