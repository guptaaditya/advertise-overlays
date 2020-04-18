import React from 'react';
import _ from 'lodash';
import ShowOverlay from '../';

import BarImg from 'img/overlay/type/bar.png';
import NotificationImg from 'img/overlay/type/notification.png';
import PopupImg from 'img/overlay/type/popup.png';
import FullScreenImg from 'img/overlay/type/fullpage.png';

const entities = [
    {type: 'bar', caption: 'Upgrade to Pro', img: BarImg},
    {type: 'notification', caption: 'Upgrade to Pro', img: NotificationImg},
    // {type: 'popup', caption: 'Popup', img: PopupImg},
    // {type: 'fullpage', caption: 'Full Screen', img: FullScreenImg},
]


const entitiesUpgraded = [
    {type: 'bar', caption: 'Bar', img: BarImg},
    {type: 'notification', caption: 'Notification', img: NotificationImg},
];

export default function ShowOverlayType(props) {
    const { onSelect, isUpgradedMember } = props;
    const overlayProps = {
        onSelect: isUpgradedMember ? onSelect: _.noop,
        entities: isUpgradedMember ? entitiesUpgraded : entities,
    }
    return <ShowOverlay display='horizontal' {...overlayProps} />
}