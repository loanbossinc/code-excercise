import React, { Fragment } from "react";
import styled from 'styled-components';
import { InputLabel, Grid, Input } from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import inputComponentMask from "lib/inputMask";
import {MoneyInput,DatePicker} from 'components/Global/FormikMaterial';

const styles = theme => ({
  inputField: {
    borderBottom: '1px solid #2196F3',    
    transition: '0.3s',
    '&:hover': {
      borderBottom: '1px solid #21c1f2'
    }
  },
  disabledInputField: {
    paddingTop:"0",
    borderBottom: '0',
    "text-align": "right",
    color: "black"
  },
  error: {
    '& input':{
       borderBottom: '1px solid red'
    }
  } 
})

const StyledInputLabel = styled("InputLabel")`& {
  font-weight: bold;
}`;

const StyleDatePicker = styled(DatePicker)`&& {
    width:100%;
  }`;

class GridDatePicker extends React.Component {  
  
  render() {
    const {classes, otherProps} = this.props;

    return (
      this.props.shouldShow && (
        <Fragment>
          
            <StyleDatePicker
              fieldName={this.props.name}          
              placeholder="MM/DD/YYYY"
              value={this.props.value}
              {...otherProps}>
            </StyleDatePicker>
          
        </Fragment>
      )
    );
  }
}

export default withStyles(styles)(GridDatePicker);
