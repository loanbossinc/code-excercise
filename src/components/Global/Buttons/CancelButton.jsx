import React, {Fragment} from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';
import CloseIcon from "@material-ui/icons/Close";

const CancelButton = ({onClick, ...other}) => {
 return (  
  <SecondaryButton onClick={onClick} {...other}>
    <CloseIcon />
    <div>CANCEL</div>    
  </SecondaryButton>  
 ) 
}
export default CancelButton;