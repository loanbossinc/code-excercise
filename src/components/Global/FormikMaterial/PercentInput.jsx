import React, {Fragment} from 'react';
import {TextField,FormHelperText} from '@material-ui/core';
import { connect } from 'formik';
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
        
    "text-align": "right",
    color: "black"
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
    allowNegative={false}
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
    decimalScale={2}    
    allowNegative={false}
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

const PercentInput = ({label, fieldName, formik ,classes,decimalScale,...props}) => {
  const {values, handleChange,errors, touched, isSubmitting} = formik;
  const {disabled} = props;  
  let hasError = Boolean(errors[fieldName]);
  var customFormat = NumberFormatCustom;
  if(decimalScale !== 0 && !decimalScale)
    decimalScale = 2
  if(decimalScale === 3)
    customFormat = ThreeDecimal;

  return (    
    <TextField 
      type="text"
      error={hasError}
      label={label}
      name={fieldName}
      value={_.get(values,fieldName)}
      onChange={handleChange}
      InputLabelProps={{
        FormLabelClasses: {
          root: classes.labelRoot
        }
      }}     
      helperText={(!!_.get(errors,fieldName) && _.get(errors,fieldName))}      
      InputProps={{
        classes:{        
          input: selectInputStyle(classes, disabled, _.get(errors, fieldName),_.get(touched, fieldName), isSubmitting),
          error: classes.error
        },      
        disableUnderline:true,        
        inputComponent: customFormat,
      }}
      {...props}
    />    
  )
}
export default compose(  
  withStyles(styles),
   connect
)(PercentInput);