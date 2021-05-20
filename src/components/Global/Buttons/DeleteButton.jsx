import React, {Fragment} from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';
import {Delete} from "@material-ui/icons";

const DeleteButton = ({onClick, ...other}) => {
 return (  
  <SecondaryButton onClick={onClick} {...other}>
    <Delete />    
    DELETE
  </SecondaryButton>  
 ) 
}
export default DeleteButton;