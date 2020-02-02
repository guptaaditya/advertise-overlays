import React from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import Sidebar from 'components/sidebar';
import { AppBody } from 'blocks';
import { redirectTo } from 'modules';

const logo = { src: "https://react.semantic-ui.com/logo.png" };

export class MainApp extends React.Component {
    handleMenuClick = item => {
        if (item.route) {
            redirectTo(item.route);
        }
    }

    render() {
        const { match } = this.props;
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

        const loadedRouteComponent = _.find(menuItems, ({ route }) => _.startsWith(match.path, route));
        if (loadedRouteComponent) {
          loadedRouteComponent.active = true;
        }
          
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

export default withRouter(MainApp);
