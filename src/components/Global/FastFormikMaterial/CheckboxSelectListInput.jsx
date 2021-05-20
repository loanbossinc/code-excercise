import React, {Fragment} from 'react';
import { connect } from 'formik';
import { compose} from "redux";
import {withStyles} from '@material-ui/core/styles';
import {Checkbox, FormGroup, FormControl, FormLabel, FormHelperText, FormControlLabel} from '@material-ui/core';

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
 const CheckboxSelectListInput = ({label, fieldName, selectLabel, selectValue, options, formik, classes,...otherProps}) => {
  if(!selectLabel)
    selectLabel = 'name';
  if(!selectValue)
    selectValue = 'id';
  const {values, errors, touched, handleChange, handleBlur} = formik;   
  return (
   <Fragment>
     <FormControl>
       <FormLabel classes={{root: classes.formLabelRoot}}>{label}</FormLabel>
       <FormGroup classes={{root: classes.formGroupRoot}}>
        {
          options.map(x => (
            <FormControlLabel
              control={
                <Checkbox classes={{root: classes.checkboxRoot}}
                  check={values[fieldName]} 
                  onChange={handleChange} 
                  value={x[selectValue]}/>
              }
              label={x[selectLabel]}/>
            )
          )
        }
       </FormGroup>
     </FormControl>
  </Fragment>
 )}


 export default compose(
   withStyles(styles),
    connect
 )(CheckboxSelectListInput);