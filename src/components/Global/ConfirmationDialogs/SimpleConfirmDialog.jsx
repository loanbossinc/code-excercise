
import React, { Fragment } from "react";
import _ from 'lodash';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {PrimaryButton, SecondaryButton} from 'components/Global/Buttons'
import styled from 'styled-components';


const StyledDialogIconButton = styled(IconButton)`
  && {
    position: absolute;
    top: 8px;
    right: 13px;
  }
`;

const StyledDialogContent = styled(DialogContent)`
  && {
    padding-right: 60px;
    color: #666;
  }
`;

function SimpleConfirmDialog({title, message,secondaryContent, modalOpen, handleNo, handleYes,noText,yesText, maxWidth}) {
    return (
      <Dialog fullWidth={true} maxWidth={maxWidth} open={modalOpen} onClose={handleNo} id={"confirmDialog"}>
        <DialogTitle>{title}</DialogTitle>
        <StyledDialogIconButton onClick={handleNo}>
            <CloseIcon id="closeIcon" style={{ fontSize: 22 }} />
        </StyledDialogIconButton>
        <StyledDialogContent>
          <DialogContentText>{message}</DialogContentText>
          <DialogContentText>{secondaryContent}</DialogContentText>
        </StyledDialogContent>
        <DialogActions>
            <SecondaryButton id={"dialogNo"} onClick={handleNo}>{noText}</SecondaryButton>
            <PrimaryButton id="dialogYes" onClick={handleYes}>{yesText}</PrimaryButton>
        </DialogActions>
      </Dialog>);
  }

  export default SimpleConfirmDialog