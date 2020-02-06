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

    handleSelectType = (type) => {
        const { onSelectType } = this.props;
        onSelectType(type);
    }

    render() {
        return (
            <div className='new-overlay'>
                <CreateOverlays 
                    steps={this.getSteps()} 
                    onSelectType={this.handleSelectType}
                />
            </div>
        );
    }
}