import React from 'react';
import _ from 'lodash';
import { Segment, View, Button } from 'blocks';
import { YourLogo, EmailBox, IconPanel } from '../../elements';

const OverlayBarTimer = props => {
  return (
    <Segment className='overlay-root overlay-bar' inverted color="blue">
      <View className='inline overlay-logo'>
        <YourLogo />
      </View>
      <View className='inline overlay-messsage'>
        Any messsage that you wish to show here
      </View>
      <View className='inline overlay-email'>
        <EmailBox />
      </View>
      <View className='inline overlay-subscribe'>
        <Button color='violet'>
          Yes I am in!
        </Button>
      </View>
      <View className='inline overlay-iconsPanel'>
        <IconPanel />
      </View>
    </Segment>
  );
};

export default OverlayBarTimer;
