import React, {Fragment} from 'react';
import {TextField,FormHelperText} from '@material-ui/core';
import { FastField } from 'formik';
import { compose} from "redux";
import _ from 'lodash';
import {withStyles} from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';

const styles = theme => ({
  labelRoot: {
    fontSize: '17px'
  },
  inputField: {
    borderBottom: '1px solid #2196F3',
        
  },
  errorInputField: {
    borderBottom: '1px solid red',
        
  },
  error: {
    '& input':{
       borderBottom: '1px solid red'
    }
  },
  disabled: {
    fontSize: '17px'
  }
})
function ThreeDecimal(props) {
  const { inputRef,value, onChange, ...other } = props;  
  return (
    <NumberFormat
    getInputRef={inputRef}
    onValueChange={values => {                  
      onChange({
        target: {
          name: props.name,
          value: values.value,
        },
      });
    }}       
    decimalScale={3}    
    value={value}    
    allowNegative={props.allowNegative}
    suffix="%"
    {...other}
    />
  );
}

function NumberFormatCustom(props) {
  const { inputRef,value, onChange, ...other } = props;  
  return (
    <NumberFormat
    getInputRef={inputRef}
    onValueChange={values => {                  
      onChange({
        target: {
          name: props.name,
          value: values.value,
        },
      });
    }}       
    decimalScale={3}    
    allowNegative={props.allowNegative}
    value={value}    
    suffix="%"
    {...other}
    />
  );
}

const selectInputStyle = (classes, disabled, error,touched, isSubmitting) => {
  if(disabled)
    return classes.disabled
  else if(error)
    return classes.errorInputField
  else
    return classes.inputField
}

const PercentInput = ({label, fieldName, classes,decimalScale,...props}) => {
  const {disabled} = props;  
  var customFormat = NumberFormatCustom;
  if(decimalScale !== 0 && !decimalScale)
    decimalScale = 2
  if(decimalScale === 3)
    customFormat = ThreeDecimal;

  return (    
    <FastField
    name={fieldName}
    render={({field,form}) => {
      const {touched, errors,isSubmitting} = form;        
      const fieldError = _.get(errors,fieldName);
      const fieldTouched = _.get(touched, fieldName);
      return (
        <TextField 
          type="text"
          label={label || ""}
          name={fieldName}
          value={field.value}
          onChange={field.onChange}
          InputLabelProps={{
            FormLabelClasses: {
              root: classes.labelRoot
            }
          }}     
          helperText={(!!fieldError && fieldError)}      
          InputProps={{
            classes:{        
              input: selectInputStyle(classes, disabled, fieldError,fieldTouched, isSubmitting),
              error: classes.error
            },      
            disableUnderline:true,        
            inputComponent: customFormat,
          }}
          inputProps={{
            allowNegative: props.allowNegative === undefined ? false : props.allowNegative
          }}
          {...props}
        />    
      )
    }}/>
  )
}
export default compose(  
  withStyles(styles)   
)(PercentInput);