import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Table } from 'blocks';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';
import { copyToClipboard } from 'utils/helper';
import { showToast } from 'utils/ui';
import { Icon } from 'blocks';

class Top5Links extends React.Component {
    constructor() {
        super();
        this.cols = [{ 
            align: 'left', 
            label: 'Links', 
            width: 3,
            labelField: 'shortUrl', 
            renderer: this.renderLink,
        }, { 
            align: 'center', label: 'Visits', labelField: 'visits', width: 5,
        }];
    }

    onCopy(col, rowData) {
        copyToClipboard(rowData.shortUrl);
        showToast(`Link copied to clipboard`, 'success');
    }

    renderLink = (col, rowData) => {
        return (
            <div className='flexible'>
                <div className='cell'>
                    <a href={rowData.shortUrl} target='_blank'>{rowData.shortUrl}</a>
                </div>
                <div className='cell flexible-centered'>
                    <Icon 
                        onClick={() => this.onCopy(col, rowData)} 
                        className='pointer' 
                        name='copy' 
                        color='blue' 
                    />
                </div>
            </div>
        );
    }

    render() {
        const { links } = this.props;
        return(
            <Table 
                compact='very'
                cols={this.cols} 
                data={links} 
                noRecordsLabel="No Links found" 
            />
        );
    }
}
Top5Links.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        shortUrl: PropTypes.string.isRequired,
        id: PropTypes.number,
        visits: PropTypes.number,
    })),
    getLinks: PropTypes.func.isRequired,
};
Top5Links.defaultProps = {
    links: [],
    getLinks: _.noop,
};

export default connect(
    state => ({
        links: selectors.getTop5Links(state),
    }),
    (dispatch) => ({
        getLinks: () => dispatch(actions.onGetLinks()),
    })
)(Top5Links);