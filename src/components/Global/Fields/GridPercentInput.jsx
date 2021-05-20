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
    '&:hover': {
      borderBottom: '1px solid #21c1f2'
    }
  },
  disabledInputField: {
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
export const StyledInputLabel = styled('InputLabel')`
& {
  font-weight: bold;
}`;

class GridPercentInput extends React.Component {
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
              type="text"
              name={this.props.name}
              placeholder={this.props.placeholder}
              classes={{
                input:inputFieldClass,
                error: classes.error,
                ...this.props.Classes
              }}
              value={this.props.value}
              onBlur={this.props.onBlur}
              onChange={this.props.onChange}              
              inputComponent={inputComponentMask({
                mask: "percent2Decimal"
              })}
              disabled={this.props.disabled}
              disableUnderline={true}
            />
          </Grid>
        </Fragment>
      )
    );
  }
}

export default withStyles(styles)(GridPercentInput);
