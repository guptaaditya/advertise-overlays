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
  const { menuItems = [] } = props;
  return (
    <>
      {_.map(
        menuItems,
        ({ as = "a", icon = "", label = "", onClick = _.noop }, index) => {
          if (icon || label) {
            return (
              <Menu.Item as={as} key={index} onClick={onClick}>
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

export default function Sidebar(props) {
  const { logo, menuItems = [], onHover = _.noop, collapsed } = props;
  const topMenuItems = _.reject(menuItems, "bottom");
  const bottomMenuItems = _.filter(menuItems, "bottom");
  if (topMenuItems && topMenuItems.length) {
    return (
      <Menu
        icon="labeled"
        fixed="left"
        inverted
        vertical
        id="leftNavigationBar"
        onHover={onHover}
        className={collapsed && "collapsed"}
      >
        <Container className="top">
          {logo && (
            <Menu.Item as="a" className="logo">
              <Logo logo={logo} />
            </Menu.Item>
          )}
          <MenuItems menuItems={topMenuItems} />
        </Container>

        {bottomMenuItems && (
          <Container>
            <MenuItems menuItems={bottomMenuItems} />
          </Container>
        )}
      </Menu>
    );
  }
  return null;
}
