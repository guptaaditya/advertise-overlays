import React from "react";
import { Header, Modal, Button } from "semantic-ui-react";

export default class ModalComponent extends React.Component {
  render() {
    const {
      open,
      modalSize = "small",
      trigger = null,
      header,
      isBasic = false,
      content: Content,
      actions
    } = this.props;

    const modalProps = { size: modalSize, open };
    if (isBasic) modalProps.basic = true;
    if (trigger) {
        const { label, ...buttonProps } = trigger;
        modalProps.trigger = <Button {...buttonProps}>{label}</Button>;
    }

    return (
      <Modal {...modalProps}>
        {header && <Header {...header} />}
        {Content && (
          <Modal.Content scrolling>
            <Content />
          </Modal.Content>
        )}
        {actions && <Modal.Actions>{actions}</Modal.Actions>}
      </Modal>
    );
  }
}
