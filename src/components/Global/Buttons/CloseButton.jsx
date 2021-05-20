import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Button, } from "@material-ui/core";
import {Add, GetApp} from '@material-ui/icons';
import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";

const CloseButton = ({onClick,...other}) => {
 return (  
  <IconButton onClick={onClick} {...other}>
    <CloseIcon style={{ fontSize: 24 }} />
  </IconButton>
 ) 
}
export default CloseButton;