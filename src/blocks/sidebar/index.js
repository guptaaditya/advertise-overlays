import React from "react";
import _ from "lodash";
import { Container, Icon, Image, Menu } from "semantic-ui-react";

function Logo(props) {
  const {
    logo: { src, text = "", className = "", onClick = _.noop } = {}
  } = props;
  if (src) {
    return (
      <Image
        alt={text}
        size="mini"
        src={src}
        className={className}
        onClick={onClick}
      />
    );
  } else if (text) {
    return (
      <div className={className} onClick={onClick}>
        {text}
      </div>
    );
  }
  return null;
}

function MenuItems(props) {
  const { menuItems = [], onClick: onItemClickToParents } = props;
  return (
    <>
      {_.map(
        menuItems,
        (item, index) => {
          const { as = "a", icon = "", label = "", onClick = _.noop } = item;
          if (icon || label) {
            return (
              <Menu.Item as={as} key={index} onClick={e => {onClick(); onItemClickToParents(item)}} >
                {icon && <Icon name={icon} />}
                <span>{label}</span>
              </Menu.Item>
            );
          }
          return null;
        }
      )}
    </>
  );
}

export default class Sidebar extends React.Component {
  state = {
    collapsed: false
  };

  handleContractMenu = e => {
    this.setState({ collapsed: true });
  };

  handleExpandMenu = e => {
    this.setState({ collapsed: false });
  };

  handleOnMouseover = () => {
    clearTimeout(this.outTimer);
    this.handleExpandMenu();
  };

  handleOnMouseout = () => {
    this.outTimer = setTimeout(this.handleContractMenu, 3000);
  };

  getLastMenuItem = () => {
    const { collapsed } = this.state;
    const expand = {
      label: "Expand",
      icon: "expand",
      onClick: this.handleExpandMenu,
    };
    const collapse = {
      label: "Collapse",
      icon: "compress",
      onClick: this.handleContractMenu,
    };
    return collapsed ? expand : collapse;
  }

  render() {
    const { collapsed } = this.state;
    const { logo, menuItems = [], onItemClick = _.noop } = this.props;
    const topMenuItems = _.reject(menuItems, "bottom");
    let bottomMenuItems = _.filter(menuItems, "bottom") || [];
    bottomMenuItems = [...bottomMenuItems, this.getLastMenuItem()];

    if (topMenuItems && topMenuItems.length) {
      return (
        <Menu
          icon="labeled"
          fixed="left"
          inverted
          vertical
          id="leftNavigationBar"
          onMouseOver={this.handleOnMouseover}
          onMouseOut={this.handleOnMouseout}
          className={collapsed ? "collapsed" : ""}
        >
          <Container className="top">
            {logo && (
              <Menu.Item as="a" className="logo">
                <Logo logo={logo} />
              </Menu.Item>
            )}
            <MenuItems menuItems={topMenuItems} onClick={onItemClick} />
          </Container>

          {bottomMenuItems && (
            <Container>
              <MenuItems menuItems={bottomMenuItems} onClick={onItemClick} />
            </Container>
          )}
        </Menu>
      );
    }
    return null;
  }
}
