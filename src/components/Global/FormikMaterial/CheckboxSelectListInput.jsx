import React from 'react';
import { connect } from 'formik';
import { compose} from "redux";
import _ from 'lodash';
import {withStyles} from '@material-ui/core/styles';
import {Checkbox} from '@material-ui/core';

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
 const CheckboxSelectListInput = ({label, fieldName, selectLabel, selectValue, options, isDisabled, formik, classes,...otherProps}) => {
  if(!selectLabel)
    selectLabel = 'name';
  if(!selectValue)
    selectValue = 'id';
  const {values, errors, touched, handleChange, handleBlur} = formik;  
  
  const val = _.get(values, fieldName);
  
  return (
      <Checkbox
        name={fieldName}
        classes={{root: classes.checkboxRoot}}
        checked={val} 
        onChange={handleChange} 
        value={values[selectValue]}
        disabled={isDisabled} />)
}

 export default compose(
   withStyles(styles),
    connect
 )(CheckboxSelectListInput);