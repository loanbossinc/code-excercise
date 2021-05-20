import React, { Fragment } from "react";
import { Grid, TextField } from "@material-ui/core";
import { withStyles  } from '@material-ui/core/styles';
import inputComponentMask from "lib/inputMask";
import { StyledLabel } from "components/Global/Fields/StyledInputLabel";

const styles = () => ({
  inputField: {
    borderBottom: '1px solid #2196F3',    
    transition: '0.3s',
    fontSize:"17px",
    color: "rgba(0, 0, 0, 0.87) !important",
    '&:hover': {
      borderBottom: '1px solid #21c1f2'
    }
  },
  disabledInputField: {
    paddingTop:"0",
    borderBottom: '0',
    "text-align": "right",
    fontSize:"17px",
    color: "black !important"
  },
  error: {
    '& input':{
       borderBottom: '1px solid red'
    }
  } 
})


class GridTextArea extends React.Component {
  render() {
    const { classes } = this.props;    
    let inputFieldClass = this.props.disabled ? classes.disabledInputField : classes.inputField;
    return (
      this.props.shouldShow && (
        <Fragment>
          <Grid item xs={5}>
            <StyledLabel htmlFor={this.props.name} text={this.props.label} />
          </Grid>
          <Grid item xs={5}>
          <TextField
            multiline
            fullWidth
            id={this.props.name}
            name={this.props.name}
            value= {this.props.value}
            label=""
            onChange={this.props.onChange}
            InputProps={{
              classes:{                
                input: inputFieldClass,
                error: classes.error,
                ...this.props.Classes
              },
              disableUnderline: true,
              inputComponent: inputComponentMask({
                mask: this.props.mask
              })
            }}
            disabled={this.props.disabled}
            disableUnderline={true}
            />
          </Grid>
        </Fragment>
      )
    );
  }
}

export default withStyles(styles)(GridTextArea);
