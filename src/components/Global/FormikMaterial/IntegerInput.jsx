import React, {Fragment} from 'react';
import {TextField, FormHelperText} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { connect } from 'formik';
import { compose} from "redux";
import {withStyles} from '@material-ui/core/styles';
import inputComponentMask from "lib/inputMask";

const styles = theme => ({
  labelRoot: {
    fontSize: '17px'
  },
  inputField: {
    borderBottom: '1px solid #2196F3',
        
  },
  error: {
    borderBottom: '1px solid red'    
  }  
})

function IntegerFormat(props) {
  const { inputRef, value, onChange, ...other } = props;

  return (
    <NumberFormat
    isNumericString={true}
    getInputRef={inputRef}
    onValueChange={values => {                   
      onChange({
        target: {
          name: props.name,
          value: values.value,
        },
      });
    }}                    
    decimalScale={0}
    allowNegative={true}
    value={value}
    {...other}
    />
  );
}

const IntegerInput = ({label, fieldName, classes, formik, ...otherProps}) => {
  const {handleChange,errors, values} = formik;
  let inputFieldClass = classes.inputField;
  let hasError = Boolean(errors[fieldName])
  if(hasError){
    inputFieldClass = classes.error;
  }

  return (
    <Fragment>
    <TextField      
      label={label}      
      type="text"              
      name={fieldName}
      value={values[fieldName] || ''}
      onChange={handleChange}
      InputLabelProps={{
        FormLabelClasses: {
          root: classes.labelRoot
        }
      }}    
      InputProps={{
        classes:{
          input:inputFieldClass
        },
        disableUnderline:true,
        inputComponent: IntegerFormat
      }}
      error={hasError}
      {...otherProps}
      />    
    {hasError && <FormHelperText error={hasError}>{errors[fieldName]}</FormHelperText>}
    </Fragment>
    )
  };
export default compose(
  withStyles(styles),
   connect
)(IntegerInput);