
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

function QuoteDuplicationConfirmationDialog({ modalOpen, handleNo, handleYes}) {
    return (
      <Dialog fullWidth={true} open={modalOpen} onClose={handleNo} id={"confirmDialog"}>
        <DialogTitle>{"Duplicate Created"}</DialogTitle>
        <StyledDialogIconButton onClick={handleNo}>
            <CloseIcon id="closeIcon" style={{ fontSize: 22 }} />
        </StyledDialogIconButton>
        <StyledDialogContent>
          <DialogContentText><p>{"You have successfully created a copy of this quote. Would you like to stay on this page or go to the copy?"}</p></DialogContentText>
        </StyledDialogContent>
        <DialogActions>
            <SecondaryButton id={"dialogNo"} onClick={handleNo}>{"STAY ON PAGE"}</SecondaryButton>
            <PrimaryButton id="dialogYes" onClick={handleYes}>{"GO TO COPY"}</PrimaryButton>
        </DialogActions>
      </Dialog>);
  }

  export default QuoteDuplicationConfirmationDialog