import React, {Fragment} from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';
import Check from "@material-ui/icons/Check";

const SaveButton = ({onClick, ...other}) => {
 return (  
  <SecondaryButton onClick={onClick} {...other}>
    <Check />
    <div>SAVE</div>    
  </SecondaryButton>  
 ) 
}
export default SaveButton;