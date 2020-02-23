import React from 'react';
import _ from 'lodash';
import { Segment, View, Button } from 'blocks';
import { YourLogo } from '../../elements';

const OverlayNotificationCallToAction = props => {
    return (
      <Segment className='overlay-root overlay-notification' inverted color="blue">
        <View className='inline overlay-logo'>
          <YourLogo />
        </View>
        <View className='inline overlay-messsage'>
            Any messsage that you wish to show here
        </View>
        <View className='inline overlay-subscribe'>
          <Button color='violet'>
            Yes I am in!
          </Button>
        </View>
      </Segment>
    );
};

export default OverlayNotificationCallToAction;
