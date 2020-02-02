import React from 'react';
import PropTypes from 'prop-types';
import { Step } from 'blocks';

const stepsConfig = [{
        key: 'overlayType',
        icon: 'affiliatetheme',
        title: 'Overlay Type',
        active: true,
        description: 'Positioning and size',
    },
    {
        key: 'overlayCategory',
        icon: 'dot circle',
        disabled: true, 
        title: 'Overlay Category',
        description: 'Action on overlay',
    },
    { 
        key: 'overlayTemplate', 
        icon: 'wrench',
        disabled: true, 
        title: 'Template',
        description: 'Elements and their positions on overlay' 
    },
    { 
        key: 'overlayName', 
        icon: 'tag',
        disabled: true, 
        title: 'Name',
        description: 'So that system can identify' 
    },
]
export default class CreateOverlays extends React.Component {
    constructor() {
        super();
        this.state = {
            steps: [...stepsConfig]
        };
    }
    
    static getDerivedStateFromProps(props, state) {

    }

    render() {
        const { steps } = this.state;
        return (
            <Step steps={steps} />
        );
    }
}
CreateOverlays.propTypes = {
    stepsStatus: PropTypes.object,
}