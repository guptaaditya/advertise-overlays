import React from 'react';
import PropTypes from 'prop-types';

import { Table, View } from 'blocks';
import CreateLink from './createLink';
import 'styles/links.scss';

class LinksList extends React.Component {
    state = {

    }

    getFooterActions() {
        const { onCreate, createdLink = {}, onDetailsSeen } = this.props;
        return (
            <CreateLink onCreate={onCreate} createdLink={createdLink} onClose={onDetailsSeen} />
        )
    }

    render() {
        const { cols, data } = this.props;
        return (
            <>
                <View className='links'>
                    <Table
                         className="full-height"
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