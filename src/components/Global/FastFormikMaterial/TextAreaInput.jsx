import React, {Fragment} from 'react';
import { connect,FastField } from 'formik';
import { compose} from "redux";
import _ from 'lodash';
import {withStyles} from '@material-ui/core/styles';
import {TextField, FormHelperText} from '@material-ui/core';

const styles = theme => ({
  labelRoot: {
    fontSize: '17px'
  },
  inputField: {
    borderBottom: '1px solid #2196F3',
        
  },
  inputFieldNoUnderline: {
    fontSize: '17px'
  },
  error: {
    '& input':{
       borderBottom: '1px solid red'
    }
  }  
})
 const TextAreaInput = ({label, fieldName,formik, classes, disableUnderline,...otherProps}) => {

  return (
    <FastField
      name={fieldName}
      render={({field,form}) => {
        const {touched, errors} = form;        
        const fieldError = _.get(errors,fieldName);
        const fieldTouched = _.get(touched, fieldName);
        return (
          <Fragment>
            <TextField
             type="text"  
             name={fieldName}
             multiline={true}
             InputProps={{
                classes:{                  
                  input: disableUnderline ? classes.inputFieldNoUnderline : classes.inputField,
                  error: classes.error
                },
                disableUnderline:true,
              }}        
              InputLabelProps={{
                FormLabelClasses: {
                  root: classes.labelRoot
                }
              }}                  
              error={!!fieldError && fieldTouched}
              id={fieldName}              
              label={label || ""}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              {...otherProps}/>
            {!!fieldError && <FormHelperText>{fieldError}</FormHelperText>}
          </Fragment>
        )
      }}
    />
 )}


 export default compose(
   withStyles(styles),    
 )(TextAreaInput);