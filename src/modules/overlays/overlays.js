import React from 'react';
import PropTypes from 'prop-types';
import { OverlaysList } from 'components/overlayslist';
import { redirectTo } from 'modules';

export default class Overlays extends React.Component {
    cols = [{ 
        align: 'left', label: 'Title', valueField: 'id', labelField: 'name', className: 'wp-35 flex-fit'  
    }, { 
        align: 'center', label: 'Created on', valueField: 'id', labelField: 'createdOn', className: 'wp-25 flex-fit' 
    }, { 
        align: 'right', label: 'Preview', icon: 'eye', valueField: 'id', className: 'wp-10 flex-fit' 
    }, { 
        align: 'right', label: 'Edit', icon: 'edit', valueField: 'id', color: 'grey', className: 'wp-10 flex-fit'
    }, { 
        align: 'right', label: 'Duplicate', icon: 'copy', valueField: 'id', color: 'blue', className: 'wp-10 flex-fit'
    }, { 
        align: 'right', label: 'Delete', icon: 'delete', valueField: 'id', color: 'red', className: 'wp-10 flex-fit'
    }];

    handleOnAddOverlays = () => {
        redirectTo(this.props.newOverlayPath)
    };

    componentDidMount() {
        this.props.onFetchOverlays();
    }

    render() {
        const { data } = this.props;
        return (
            <>
               <OverlaysList cols={this.cols} data={data} onAddOverlay={this.handleOnAddOverlays} /> 
            </>
        );
    }
}
Overlays.propTypes = {
    newOverlayPath: PropTypes.string.isRequired,
}