import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Button, } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  root: {
    background:'',
    borderRadius: 2,
    color: '#2196F3',
    '&:hover': {
      background: '#F9F9F9'
    },
    '&:selected': {
      background: '#F6F6F6'
    }
  }
})
const SecondaryButton = ({onClick,children,classes,...other}) => {
 return (  
  <Button color="primary" 
    onClick={onClick} 
    classes={{
      root:classes.root
    }}
    {...other}>
    {children}
  </Button>
 ) 
}
export default withStyles(styles)(SecondaryButton);