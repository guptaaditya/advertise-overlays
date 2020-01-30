import React from 'react';

import Sidebar from 'components/sidebar';
import AppBody from 'blocks/appbody';


const logo = { src: "https://react.semantic-ui.com/logo.png" };

export default class MainApp extends React.Component {
    handleMenuClick = item => {
        if (item.route) {
            const { onRedirect } =  this.props;
            onRedirect(item.route);
        }
    }

    render() {
        const menuItems = [{
              label: "Dashboard", icon: "dashboard", route: "/dashboard",
            }, {
              label: "Links", icon: "linkify", route: "/links",
            }, {
              label: "Overlays", icon: "affiliatetheme", route: "/overlays",
            }, {
              bottom: true, label: "Profile", icon: "user outline", route: "/user-profile",
            }, {
              bottom: true, label: "Signout", icon: "power off", route: "/logout",
        }];
          
        return (
            <>
                <Sidebar logo={logo} menuItems={menuItems} onItemClick={this.handleMenuClick} />
                <AppBody>
                    {this.props.children}
                </AppBody>
            </>
        );

    }
}