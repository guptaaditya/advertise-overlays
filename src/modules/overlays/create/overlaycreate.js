import React from 'react';
import _ from 'lodash';
import CreateOverlays from 'components/createoverlays'

const stepsConfig = [{
    key: 'overlayType',
    icon: 'affiliatetheme',
    title: 'Overlay Type',
    description: 'Positioning and size',
},
{
    key: 'overlayCategory',
    icon: 'dot circle',
    title: 'Overlay Category',
    description: 'Action on overlay',
},
{ 
    key: 'overlayTemplate', 
    icon: 'wrench',
    title: 'Template',
    description: 'Elements and their positions on overlay' 
},
{ 
    key: 'overlayName', 
    icon: 'tag',
    title: 'Name',
    description: 'So that system can identify' 
}];

export default class CreateOverlay extends React.Component {
    constructor() {
        super();
        this.state = {
            steps: [...stepsConfig],
        };
    }

    getSteps() {
        const { stepsStatus } = this.props;
        const { steps } = this.state;
        return steps.map(s => {
            const newStep = _.assign({...s}, stepsStatus[s.key]);
            return newStep;
        });
    }

    getActiveStep() {
        const activeStep = _.find(this.getSteps(), 'active');
        return activeStep.key;
    }

    handleSelect = (type) => {
        const activeStep = this.getActiveStep();
        switch(activeStep) {
            case 'overlayType':
                this.props.onSelectType(type);
            break;
            case 'overlayCategory':
                this.props.onSelectCategory(type);
            break;
            case 'overlayTemplate':
                this.props.onSelectTemplate(type);
            break;
            case 'overlayName':
                this.props.onSelectName(type);
            break;
        }
    }

    render() {
        const { selected } = this.props;
        return (
            <div className='new-overlay'>
                <CreateOverlays 
                    steps={this.getSteps()} 
                    onSelect={this.handleSelect}
                    selected={selected}
                />
            </div>
        );
    }
}