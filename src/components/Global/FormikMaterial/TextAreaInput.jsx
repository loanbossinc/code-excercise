import React, {Fragment} from 'react';
import { connect } from 'formik';
import { compose} from "redux";
import {withStyles} from '@material-ui/core/styles';
import {TextField, FormHelperText} from '@material-ui/core';

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
 const TextAreaInput = ({label, fieldName,formik, classes,...otherProps}) => {
  const {values, errors, touched, handleChange, handleBlur} = formik;   
  return (
   <Fragment>
    <TextField
      multiline={true}
      InputProps={{
        classes:{                  
          input:classes.inputField,
          error: classes.error
        },
        disableUnderline:true,
      }}        
      InputLabelProps={{
        FormLabelClasses: {
          root: classes.labelRoot
        }
      }}                  
      error={!!errors[fieldName] && touched[fieldName]}
      id={fieldName}              
      label={label}
      value={values[fieldName]}
      onChange={handleChange}
      onBlur={handleBlur}
      {...otherProps}/>
    {!!errors.name && <FormHelperText>{errors.name}</FormHelperText>}
  </Fragment>
 )}


 export default compose(
   withStyles(styles),
    connect
 )(TextAreaInput);