import React from 'react';
import styled from 'styled-components';
import {Badge} from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  root: {
    color:'#fff'
  },
  badge: {
    background: '#2196F3'
  }
})
const PrimaryBadge = (props) => (<Badge classes={props.classes} {...props}/>)
export default withStyles(styles)(PrimaryBadge);