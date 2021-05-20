import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Button, } from "@material-ui/core";
import {Add, GetApp} from '@material-ui/icons';

const NewButton = styled(Button)`
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
    cursor:pointer;
    background:#f6f6f6;
  }
`
const AddButton = ({title, onClick, ...other}) => {
 return (  
  <NewButton variant="contained" onClick={onClick} {...other}>
    <Add/>
    <span>{title.toUpperCase()}</span>
  </NewButton>  
 ) 
}
export default AddButton;