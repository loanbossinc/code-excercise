import React, {Fragment} from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import ReplyIcon from "@material-ui/icons/Reply";

const SaveAndReturnButton = ({onClick, ...other}) => {
 return (  
  <PrimaryButton onClick={onClick} {...other}>
    <ReplyIcon />
    <div>SAVE &amp; RETURN</div>    
  </PrimaryButton>  
 ) 
}
export default SaveAndReturnButton;