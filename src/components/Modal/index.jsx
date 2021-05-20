import React from "react";
import { Dialog, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled, { css } from "styled-components";
import DialogTitle from "./styles/Title";

const ModalClassname = "ModalStyles";
const ModalStyles = styled(Dialog).attrs({
  classes: { paper: ModalClassname }
})`
  .${ModalClassname} {
    display: flex;
    flex-flow: column;
    min-width: 500px;
    max-width: 1440px;
    overflow: hidden;

    ${props =>
      props.fullwidth &&
      css`
        height: 100%;
        width: 100%;
      `};
  }
`;

const Modal = ({
  modalTitle,
  hideModal,
  children,
  HeaderActions,
  ...props
}) => (
  <ModalStyles
    aria-labelledby="form-dialog-title"
    className="modalActionsPanel"
    {...props}
  >
    <DialogTitle style={props.titleStyle}>
      {modalTitle}
      {HeaderActions && <HeaderActions />}
      <IconButton onClick={hideModal}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>

    {children}
  </ModalStyles>
);

export default Modal;
