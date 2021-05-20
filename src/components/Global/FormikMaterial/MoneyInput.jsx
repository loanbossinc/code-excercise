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
    '& input':{
       borderBottom: '1px solid red'
    }
  }  
})

function MoneyNumberFormat(props) {
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
    thousandSeparator
    prefix="$"    
    decimalScale={0}
    allowNegative={false}
    value={value}
    {...other}
    />
  );
}

const MoneyInput = ({label, fieldName, classes, formik, endAdornment, ...otherProps}) => {
  const {handleChange,errors, values} = formik;
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
          input:classes.inputField
        },
        endAdornment,
        disableUnderline:true,
        inputComponent: MoneyNumberFormat
      }}
      {...otherProps}
      />    
    {!!errors.name && <FormHelperText>{errors.name}</FormHelperText>}
    </Fragment>
    )
  };
export default compose(
  withStyles(styles),
   connect
)(MoneyInput);