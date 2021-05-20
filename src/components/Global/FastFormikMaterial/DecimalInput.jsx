import React from 'react';
import {TextField} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { connect,FastField } from 'formik';
import { compose} from "redux";
import _ from 'lodash';
import {withStyles} from '@material-ui/core/styles';
const styles = theme => ({
  labelRoot: {
    fontSize: '17px'
  },
  inputField: {
    borderBottom: '1px solid #2196F3',
        
  }
})
function DecimalNumberFormat(props) {
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
    allowNegative={true}
    value={value}
    decimalScale={2}
    {...other}
    />
  );
}
const DecimalInput = ({label, fieldName,classes,...other}) => {
  return(
    <FastField
    name={fieldName}
    render={({field,form}) => {
      const {touched, errors} = form;        
      const fieldError = _.get(errors,fieldName);
      const fieldTouched = _.get(touched, fieldName);
      return (
        <TextField 
          type="text"
          label={label || ''}
          name={fieldName}
          value={field.value}
          onChange={field.onChange}
          InputLabelProps={{
            FormLabelClasses: {
              root: classes.labelRoot
            }
          }}     
          InputProps={{
            classes:{        
              input:classes.inputField        
            },
            disableUnderline:true,
            inputComponent: DecimalNumberFormat,
          }}
          {...other}
        />
      )}}/>
)};
export default compose(
  withStyles(styles)
)(DecimalInput);