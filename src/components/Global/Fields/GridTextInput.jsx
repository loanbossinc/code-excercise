import React, { Fragment } from "react";
import styled from 'styled-components';
import { InputLabel, Grid, Input } from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import inputComponentMask from "lib/inputMask";
import {StyledLabel} from "components/Global/Fields/StyledInputLabel";

const styles = theme => ({
  inputField: {
    borderBottom: '1px solid #2196F3',    
    transition: '0.3s',
    fontSize:"17px",
    '&:hover': {
      borderBottom: '1px solid #21c1f2'
    }
  },
  disabledInputField: {
    paddingTop:"0",
    borderBottom: '0',
    "text-align": "right",
    fontSize:"17px",
    color: "black"
  },
  error: {
    '& input':{
       borderBottom: '1px solid red'
    }
  } 
})

class GridTextInput extends React.Component {
  render() {
    const {classes} = this.props;    
    let inputFieldClass = this.props.disabled ? classes.disabledInputField : classes.inputField;
    let layout = this.props.xsLayout || {label:5, field:5}; 
    return (
      this.props.shouldShow && (
        <Fragment>
          <Grid item xs={layout.label}>
            <StyledLabel htmlFor={this.props.name} text={this.props.label}/>
          </Grid>
          <Grid item xs={layout.field}>
            <Input
                id={`inputGridFor${this.props.name}`}
                fullWidth              
                type={this.props.type || "text"}
                name={this.props.name}
                classes={{
                  input:inputFieldClass,
                  error: classes.error,
                  ...this.props.Classes
                }}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange}
                inputComponent={inputComponentMask({
                  mask: this.props.mask
                })}
                defaultValue={this.props.defaultValue}              
                disabled={this.props.disabled}
                disableUnderline={true}
                error={this.props.error}              
              />
          </Grid>
        </Fragment>
      )
    );
  }
}


export default withStyles(styles)(GridTextInput);
