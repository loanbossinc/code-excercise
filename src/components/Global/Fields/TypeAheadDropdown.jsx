/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from "react";
import PropTypes, { func } from "prop-types";
import Select from "react-select";
import styled from 'styled-components';
import _ from 'lodash';
import { withStyles } from "@material-ui/core/styles";
import { InputLabel, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {StyledLabel} from "components/Global/Fields/StyledInputLabel";

const styles = theme => ({
  input: {
    display: "flex",
    padding: 0
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "right",
    fontSize:"17px",    
    overflow: "hidden"
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize:"17px",    
    marginTop:'6px',    
    "text-align": "right"
  }
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        disableUnderline: true,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

const components = {
  Control,
  NoOptionsMessage,
  Option,
  Placeholder,
  ValueContainer
};

export const DisabledInput = styled.div`
  text-align: right;
`;

class TypeAheadDropdown extends React.Component {
  GetFromList(list, id){    
    if(list && list.length > 0) {      
      let found =  _.find(list, x=> x.value === id);
      return found ? found.label : 'no label';    
    }
  }
  render() {
    const { classes, theme, isDisabled } = this.props;
    let error = this.props.error || false;
    let selectStyles; 
    
    if (isDisabled) {
      selectStyles = {
        ...this.props.selectStyles,
        input: base => ({
          ...base,
          color: "rgba(0, 0, 0, 0.38)",
          "& input": {
            font: "inherit"
          }
        }),
      };
    } else {
      selectStyles = {
        ...this.props.selectStyles,
        input: base => ({
          ...base,
          color: theme.palette.text.primary,
          "& input": {
            font: "inherit"
          }
        })
      };
    }
    if(error){
      selectStyles.container = (provided, state) => ({
          ...provided,
          borderBottom: '1px solid red',
          transition: 'border 0.1s',
          '&:hover': {
            cursor: 'pointer',
            borderBottom: '1px solid red'
          },
          padding: '0'
        })
    }

    return (
      this.props.shouldShow && (
        <React.Fragment>
          <Grid item xs={4}>
            {this.props.customLabel || <StyledLabel htmlFor={this.props.name} />}
          </Grid>
          <Grid item xs={6}>
            {this.props.isDisabled ? 
            (<DisabledInput>{this.GetFromList(this.props.options, this.props.value)}</DisabledInput>)
            :
            (<Select
              id={this.props.label+"Dropdown"}
              fullWidth
              name={this.props.name}
              classes={classes}
              styles={selectStyles}
              options={this.props.options}
              components={components}
              onChange={this.props.usingFormik ? 
                option => {
                  this.props.setFieldValue(this.props.name, option)
                } : this.props.handleChange
            }
              placeholder={this.props.placeholder}
              menuPlacement="auto"
              value={this.props.options.find(
                option => option.value === this.props.value
              )}
              defaultValue={this.props.defaultValue}
              isDisabled={this.props.isDisabled}
            />)}
          </Grid>
        </React.Fragment>
      )
    );
  }
}

TypeAheadDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TypeAheadDropdown);
