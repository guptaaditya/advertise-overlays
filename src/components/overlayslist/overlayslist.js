import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Table, View, Button, Icon } from 'blocks';
import 'styles/overlays.scss';

class OverlaysList extends React.Component {
    getFooterActions() {
        return (
            <Button
                floated='right'
                icon
                labelPosition='left'
                primary
                size='small'
            >
                <Icon name='affiliatetheme' /> Add Overlay
            </Button>
        )
    }
    render () {
        const { cols, data } = this.props;
        return (
            <>
                <View className='overlays'>
                        <Table cols={cols} data={data} footerActions={this.getFooterActions()} />
                </View>
            </>
        );        
    }
}

export default OverlaysList;

OverlaysList.propTypes = {
    cols: PropTypes.array,
    data: PropTypes.array,
};

OverlaysList.defaultProps = {
    cols: [],
    data: []
};