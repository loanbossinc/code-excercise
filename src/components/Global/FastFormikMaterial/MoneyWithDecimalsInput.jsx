import React, {Fragment} from 'react';
import {TextField, FormHelperText} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { FastField } from 'formik';
import _ from 'lodash';
import { compose} from "redux";
import {withStyles} from '@material-ui/core/styles';

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
    decimalScale={2}
    allowNegative={false}
    value={value}
    {...other}
    />
  );
}

const MoneyWithDecimalsInput = ({label, fieldName, classes, ...otherProps}) => {  
  return (
    <FastField
    name={fieldName}
    render={({field,form}) => {
      const {touched, errors} = form;        
      const fieldError = _.get(errors,fieldName);
      return (
        <Fragment>
          <TextField      
            label={label || ""}
            type="text"              
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
              inputComponent: MoneyNumberFormat
            }}
            {...otherProps}
            />    
           {!!fieldError && <FormHelperText>{fieldError}</FormHelperText>}
        </Fragment>
      )
    }}/>
  );
}

export default compose(
  withStyles(styles)
)(MoneyWithDecimalsInput);
