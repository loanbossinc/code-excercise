import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Button, } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  root: {
    background:'#005AA9',
    borderRadius: 2,
    color: '#fff',
    '&:hover': {
      background: '#005AA9'
    },
    '&:selected': {
      background: '#005AA9'
    }
  },
  disabled: {
    background: '#f5f5f5',
    
  }
})
const PrimaryButton = ({onClick,children,classes,...other}) => {
 return (  
  <Button 
    color="primary" 
    onClick={onClick} 
    classes={{
      root:classes.root,
      disabled: classes.disabled
    }}
    {...other}>
    {children}
  </Button>
 ) 
}
export default withStyles(styles)(PrimaryButton);