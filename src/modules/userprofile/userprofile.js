import React from 'react';
import 'styles/userprofile.scss';
import { connect } from "react-redux";
import { Divider, Grid, GridCol, Segment } from 'blocks'
import AccountDetails from './accountDetails';
import EditAccountDetails from './editAccountDetails';
import Membership from './membership';
import * as selectors from './selectors';

class UserProfile extends React.Component {
    render() {
        const { isEditVisible } = this.props;
        return (
            <Segment>
              <Grid columns={2} relaxed='very'>
                <GridCol>
                    { !isEditVisible && <AccountDetails /> }
                    { isEditVisible && <EditAccountDetails /> }
                </GridCol>
                <GridCol>
                    <Membership />
                </GridCol>
              </Grid>
              <Divider className='fullheight' vertical></Divider>
            </Segment>
        );
    }
}
export default connect(function mapStateToProps(state){
    return {
        isEditVisible: selectors.getIsEditVisible(state),
    }
}, null)(UserProfile)