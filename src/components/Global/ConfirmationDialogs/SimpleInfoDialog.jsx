
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

const renderBulletPoints= (bullets) => {
  let output = [];
  bullets.forEach(bullet =>{
    if(!bullet)return;
    output.push(<li>{bullet}</li>)
  });
  return output;
}

/*
handleClose is whenever its closed with X
handleAccept is only when they click OK. 
secondaryContent comes after message. Can be more text or another component
*/
function SimpleInfoDialog({title, message, secondaryContent, modalOpen, handleClose, handleAccept, bulletPoints}) {
    return (
      <Dialog fullWidth={true} open={modalOpen} onClose={handleClose} id={"InfoDialog"}>
        <DialogTitle>{title}</DialogTitle>
        <StyledDialogIconButton onClick={handleClose}>
            <CloseIcon id="closeIcon" style={{ fontSize: 22 }} />
        </StyledDialogIconButton>
        <StyledDialogContent>
            <p>{message}</p>
            {bulletPoints && (<ul>{renderBulletPoints(bulletPoints)}</ul>)}
            {secondaryContent}
        </StyledDialogContent>
        <DialogActions>
            <PrimaryButton id="dialogOK" onClick={handleAccept}>{"OK"}</PrimaryButton>
        </DialogActions>
      </Dialog>);
  }

  export default SimpleInfoDialog