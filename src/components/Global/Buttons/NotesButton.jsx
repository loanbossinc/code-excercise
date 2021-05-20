import React, {Fragment} from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';
import {InsertDriveFile} from '@material-ui/icons';

const NotesButton = ({onClick, ...other}) => {
 return (  
  <SecondaryButton onClick={onClick} {...other}>
    <InsertDriveFile />
    <div>NOTES</div>    
  </SecondaryButton>  
 ) 
}
export default NotesButton;