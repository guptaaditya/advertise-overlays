import React from 'react';
import _ from 'lodash';
import { SitePlaceholder, Segment, Label, View, Button, Icon, Input, Image, Header } from 'blocks';

const text = `I'm here to tell you something, and you will probably read me first.`;
const YourLogo = () => (
  <>
    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' width={14} className='inline' circular />
    <View className="inline">Your logo</View>
  </>
);
const EmailBox = () => <Input placeholder='Enter your email' />;
const IconPanel = () => (
  <View className='overlay-iconbox'>
    <Icon name='facebook f' />
    <Icon name='twitter' />
  </View>
);

const OverlayBar = props => {
  return (
    <Segment className='overlay-root overlay-bar' inverted color="blue">
      <View className='inline overlay-logo'>
        <YourLogo />
      </View>
      <View className='inline overlay-messsage'>
        Your bar message here
      </View>
      <View className='inline overlay-email'>
        <EmailBox />
      </View>
      <View className='inline overlay-subscribe'>
        <Button className='smallest' color='violet'>
          Yes I am in!
        </Button>
      </View>
      <View className='inline overlay-iconsPanel'>
        <IconPanel />
      </View>
    </Segment>
  );
};

const OverlayNotification = props => {
    return (
      <Segment className='overlay-root overlay-notification' inverted color="blue">
        <View className='inline overlay-logo'>
          <YourLogo />
        </View>
        <View className='inline overlay-email'>
          <EmailBox />
        </View>
        <View className='inline overlay-subscribe'>
          <Button className='smallest' color='violet'>
            Yes I am in!
          </Button>
        </View>
      </Segment>
    );
};

const OverlayPopup = props => {
    return (
      <Segment className='overlay-root overlay-popup' inverted color="blue">
        <Header icon className='inline'>
          <Icon fitted size='mini' name='secret' /> Join our community
        </Header>
        <View className='inline overlay-email'>
          <EmailBox />
        </View>
        <View className='inline overlay-subscribe'>
          <Button className='smallest' color='violet'>
            Yes I am in!
          </Button>
        </View>
      </Segment>
    );
};

const OverlayFullPage = props => {
    return (
      <Segment className='overlay-root overlay-fullpage' inverted color="blue">
        <YourLogo />
        {text}
      </Segment>
    );
};

const overlayTypeMap = {
    bar: OverlayBar,
    notification: OverlayNotification,
    ['full page']: OverlayFullPage,
    popup: OverlayPopup,
}
  
export default class OverlayType extends React.Component {
    render() {
        const { type = 'bar', onSelect = _.noop } = this.props;
        const ComponentMapped = overlayTypeMap[type];

        return (
            <SitePlaceholder>
                <Label ribbon attached='top right' color='red' className='overlay-name'>
                {_.startCase(type)}
                </Label>
                <ComponentMapped />
                <Label className='pointer' onClick={e => onSelect(type)} as='button' 
                  attached='bottom' color='orange'>
                  Select
                </Label>
            </SitePlaceholder>
        );
    }
}