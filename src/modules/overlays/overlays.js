import React from 'react';
import { OverlaysList } from 'components/overlayslist';

export default class Overlays extends React.Component {
    cols = [{ 
        align: 'left', label: 'Title', valueField: 'id', labelField: 'name' 
    }, { 
        align: 'center', label: 'Created on', valueField: 'id', labelField: 'createdOn' 
    }, { 
        align: 'right', label: 'Preview', icon: 'eye', valueField: 'id' 
    }, { 
        align: 'right', label: 'Edit', icon: 'edit', valueField: 'id', color: 'grey'
    }, { 
        align: 'right', label: 'Duplicate', icon: 'copy', valueField: 'id', color: 'blue'
    }, { 
        align: 'right', label: 'Delete', icon: 'delete', valueField: 'id', color: 'red'
    }];

    componentDidMount() {
        this.props.onFetchOverlays();
    }

    render() {
        const { data } = this.props;
        return (
            <>
               <OverlaysList cols={this.cols} data={data} /> 
            </>
        );
    }
}