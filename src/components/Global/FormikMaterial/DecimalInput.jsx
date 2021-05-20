import React from 'react';
import {TextField} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { connect } from 'formik';
import { compose} from "redux";
import {withStyles} from '@material-ui/core/styles';
const styles = theme => ({
  labelRoot: {
    fontSize: '17px'
  },
  inputField: {
    borderBottom: '1px solid #2196F3',
        
  }
});
function ThreeDecimal(props) {
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
    decimalScale={3}
    thousandSeparator
    allowNegative={true}
    value={value}
    {...other}
    />
  );
}
function TwoDecimal(props) {
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
    decimalScale={2}
    thousandSeparator
    allowNegative={true}
    value={value}
    {...other}
    />
  );
}
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
    {...other}
    />
  );
}
const DecimalInput = ({label, calculateLabel, fieldName,formik,classes,decimalScale,...other}) => {
  const {values, handleChange} = formik;
  if(typeof calculateLabel === "function"){
    label = calculateLabel(formik, fieldName);    
  }  
  let numberFormat = DecimalNumberFormat;
  if(decimalScale === 2){
    numberFormat = TwoDecimal;
  } else if(decimalScale === 3){
    numberFormat = ThreeDecimal;
  }
  let inputLabelProps = {
    FormLabelClasses: {
      root: classes.labelRoot
    },
    
  }
  return(
  <TextField 
    type="text"
    label={label || (<div></div>)}
    name={fieldName}
    value={values[fieldName]}
    onChange={handleChange}
    InputLabelProps={inputLabelProps}     
    InputProps={{
      classes:{        
        input:classes.inputField        
      },
      disableUnderline:true,
      inputComponent: numberFormat,
    }}
    {...other}
  />
)};
export default compose(
  withStyles(styles),
   connect
)(DecimalInput);