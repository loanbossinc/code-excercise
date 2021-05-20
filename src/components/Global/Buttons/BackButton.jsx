import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Button} from "@material-ui/core";
import {ArrowBack} from '@material-ui/icons';

const StyledButton = styled(Button)`
  && {
    margin-left:4px;
    padding: 8px 8px 8px 2px;
    border-radius:0;
    color: #2196F3;
    background:none;
  }
  & span {
    margin-left:4px;
  }
  &&:hover {
    background:#f6f6f6;
  }
`
const BackButton = ({title,onClick,...other}) => {
 return (  
  <StyledButton variant="contained" onClick={onClick} {...other}>
    <ArrowBack/>
    <span>{title.toUpperCase()}</span>
  </StyledButton>  
 ) 
}
export default BackButton;