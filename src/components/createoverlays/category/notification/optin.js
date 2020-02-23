import React from 'react';
import _ from 'lodash';
import { Segment, View, Button } from 'blocks';
import { YourLogo, EmailBox } from '../../elements';

const OverlayNotificationOptIn = props => {
    return (
      <Segment className='overlay-root overlay-notification' inverted color="blue">
        <View className='inline overlay-logo'>
          <YourLogo />
        </View>
        <View className='inline overlay-email'>
          <EmailBox />
        </View>
        <View className='inline overlay-subscribe'>
          <Button color='violet'>
            Yes I am in!
          </Button>
        </View>
      </Segment>
    );
};

export default OverlayNotificationOptIn;
