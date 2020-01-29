import React from "react";
import _ from "lodash";

import { Sidebar } from "blocks";

import "styles/sidebar.scss";

const logo = { src: "https://react.semantic-ui.com/logo.png" };
const menuItems = [
  {
    label: "Dashboard",
    icon: "dashboard"
  },
  {
    label: "Links",
    icon: "linkify"
  },
  {
    label: "Overlays",
    icon: "affiliatetheme"
  },
  {
    bottom: true,
    label: "Profile",
    icon: "user outline"
  },
  {
    bottom: true,
    label: "Signout",
    icon: "power off"
  },
  {
    bottom: true,
    label: "Collapse",
    icon: "compress"
  }
];

const expand = {
  label: "Expand",
  icon: "expand"
};

const collapse = {
  label: "Collapse",
  icon: "compress"
};

export default class SidebarComponent extends React.Component {
  state = {
    collapsed: false
  };

  constructor(props) {
    super(props);
    this.menuItems = menuItems;
    this.menuItems[menuItems.length - 1].onClick = this.handleContractMenu;
  }

  handleContractMenu = e => {
    this.setState({ collapsed: true });
    _.assign(this.menuItems[menuItems.length - 1], expand);
    this.menuItems[menuItems.length - 1].onClick = this.handleExpandMenu;
    this.forceUpdate();
  };

  handleExpandMenu = e => {
    this.setState({ collapsed: false });
    _.assign(this.menuItems[menuItems.length - 1], collapse);
    this.menuItems[menuItems.length - 1].onClick = this.handleContractMenu;
    this.forceUpdate();
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Sidebar logo={logo} menuItems={this.menuItems} collapsed={collapsed} />
    );
  }
}
