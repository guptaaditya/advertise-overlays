import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';

class QuickStats extends React.Component {
    componentDidMount() {
        this.props.getStats();
    }

    render() {
        const { stats } = this.props;
        return(
            <>
                {_.map(stats, ({ name, value}, index) => (
                    <div key={`stat-${index}`} className='stats-box cell flex-y flexible-hvcentered'>
                        <h5 className='stat-name'>{name}</h5>
                        <span className='stat-value font-size-35'>{value}</span>
                    </div>
                ))}
            </>
        );
    }
}

QuickStats.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number,
    })),
    getStats: PropTypes.func.isRequired,
};
QuickStats.defaultProps = {
    stats: [],
    getStats: _.noop,
};

export default connect(
    state => ({
        stats: selectors.getStats(state),
    }),
    (dispatch) => ({
        getStats: () => dispatch(actions.onGetStats()),
    })
)(QuickStats);