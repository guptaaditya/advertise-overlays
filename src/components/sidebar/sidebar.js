import React from 'react';
import { Sidebar } from 'blocks';

const navigationItems= [
    {
        as: 'Image',
        src: 'https://aapastech.com/img/aapastech.png', 
    }, {
        label: 'Dashboard',
        icon: 'dashboard',
    }, {
        label: 'Overlays',
        icon: 'adversal',
    }, {
        label: 'Links',
        icon: 'linkify',
    }, {
        label: 'Reports',
        icon: 'signal',
    },
];

export default class SidebarComponent extends React.Component {
    state = {
        expanded: true,
    }

    handleContractMenu = e => this.setState({ expanded: false });

    handleExpandMenu = e => this.setState({ expanded: true });

    render() {
        const { expanded } = this.state;
        return (
            <Sidebar animation='push' items={navigationItems} expanded={expanded} 
                onMenuClick={this.handleExpandMenu}>
                <h1>Hello world</h1>
            </Sidebar>
        );
    }
}