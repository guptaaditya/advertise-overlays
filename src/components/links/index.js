import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Table, View, Button, Icon } from 'blocks';
import 'styles/links.scss';

class LinksList extends React.Component {
    getFooterActions() {
        return (
            <Button
                floated='right'
                icon
                labelPosition='left'
                primary
                size='small'
            >
                <Icon name='linkify' /> Add New Link
            </Button>
        )
    }
    render () {
        const { cols, data } = this.props;
        return (
            <>
                <View className='links'>
                        <Table 
                            cols={cols} 
                            data={data} 
                            footerActions={this.getFooterActions()}
                            noRecordsLabel="No Links found" 
                        />
                </View>
            </>
        );        
    }
}

export default LinksList;

LinksList.propTypes = {
    cols: PropTypes.array,
    data: PropTypes.array,
};

LinksList.defaultProps = {
    cols: [],
    data: []
};