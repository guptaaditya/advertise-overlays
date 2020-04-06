import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'blocks';
import * as actions from './actions';
import * as selectors from './selectors';
import 'styles/admin.scss';

const PERCENT_L1 = 10;
const PERCENT_L2 = 5;
const MEMERSHIP_COST = 25;

class Admin extends React.Component {
    constructor() {
        super();
        this.totalPayout = 0;
        this.cols = [{ 
            align: 'left', label: 'Name', labelField: 'name', 
        }, { 
            align: 'left', label: 'Affiliate(s) L1', labelField: 'affiliate1',
        }, { 
            align: 'left', label: 'Affiliate(s) L2', labelField: 'affiliate2',
        }, { 
            align: 'center', label: `Payouts = ${PERCENT_L1}% x L1 + ${PERCENT_L2}% x L2`, renderer: this.renderTotalPayout,
        }, { 
            align: 'right', label: 'Send payments', renderer: this.renderPayout,
        }];
    }

    componentDidMount() {
        this.props.getAffiliates();
    }

    renderTotalPayout = (cols, rowData) => {
        const { affiliate1, affiliate2 } = rowData;
        const totalPayout = (affiliate1 * 0.01 * PERCENT_L1 * MEMERSHIP_COST) + (affiliate2 * 0.01 * PERCENT_L2 * MEMERSHIP_COST);
        const formattedPayout =  totalPayout.toFixed(2);

        this.totalPayout += Number(formattedPayout);
        return (
            <div>$ {formattedPayout}</div>
        );
    };

    renderPayout = (cols, rowData) => {

    };

    render() {
        const { affiliates } = this.props;
        return(
            <Table 
                compact='very'
                cols={this.cols} 
                data={affiliates} 
                noRecordsLabel="No Affiliates found" 
            />
        );
    }
}
Admin.propTypes = {
    affiliates: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        affiliate1: PropTypes.number,
        affiliate2: PropTypes.number,
    })).isRequired,
};

export default connect(
    state => {
        return {
            affiliates: selectors.getAffiliates(state),
        };
    },
    (dispatch) => ({
        getAffiliates: () => dispatch(actions.onGetAffiliates()),
    })
)(Admin);