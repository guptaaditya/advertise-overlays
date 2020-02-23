import React from 'react';
import _ from 'lodash';
import { 
  Label, View, Icon, Modal, Image
} from 'blocks';
import OverlayBar from './type/bar';
import OverlayNotification from './type/notification';
import OverlayPopup from './type/popup';
import OverlayFullPage from './type/fullpage';

export const overlayTypeMap = {
    bar: OverlayBar,
    notification: OverlayNotification,
    fullpage: OverlayFullPage,
    popup: OverlayPopup,
}

export default class OverlayType extends React.Component {
    state = {
      isModalOpen: false
    };

    handleOnExpand = () => this.setState({ isModalOpen: true });
    
    handleClose = () => this.setState({ isModalOpen: false });

    render() {
      const { onSelect, type, caption, img } = this.props;
      const { isModalOpen } = this.state;
      const TypeComponent = props => (
          <>
            <View className='overlay-img'>
              <Image src={img} />
              {!isModalOpen && (
                <Label className='pointer' onClick={e => onSelect(type)} as='button' 
                    color='orange'>
                    Select
                </Label>
              )}
            </View>
            {props.children}
            {!isModalOpen && (
              <>
                <Label ribbon attached='top right' color='red' className='overlay-name'>
                  {_.startCase(caption)}
                </Label>
                <View className='overlay-expandedview pointer' onClick={this.handleOnExpand}>
                  <Icon name='magnify' size='huge' />
                </View>
              </>
            )}
          </>
        );
        const ZoomedView = () => (
          <View className='overlay-zoomview'><TypeComponent /></View>
        )
        return (
          <TypeComponent>
            <Modal 
              open={isModalOpen}
              content={ZoomedView} 
              modalSize='tiny' 
              onClose={this.handleClose}
            />
          </TypeComponent>
        )
    }
}