import React, {Fragment} from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';
import {AttachFile} from '@material-ui/icons';

const AttachmentsButton = ({onClick, ...other}) => {
 return (  
  <SecondaryButton onClick={onClick} {...other}>
    <AttachFile />
    <div>ATTACHMENTS</div>    
  </SecondaryButton>  
 ) 
}
export default AttachmentsButton;