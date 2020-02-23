import React from 'react';
import { CallToAction, OptIn, Timer } from '../category/notification';

const categoryComponentMap = {
  'call-to-action': CallToAction,
  'opt-in': OptIn,
  'timer': Timer,
};

const OverlayNotification = props => {
  const { category } = props;
  const ComponentMapped = categoryComponentMap[category] || OptIn;
  return (
    <ComponentMapped />
  );
};


export default OverlayNotification;
