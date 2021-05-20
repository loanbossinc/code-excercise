import React, {Fragment} from 'react';
import {RadioGroup, FormControlLabel, Radio, FormHelperText} from '@material-ui/core';
import styled from 'styled-components';
import { connect,FastField } from 'formik';
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
const StyledFormControlLabel = styled.div`&&& {
  /* Work Sans / 12 Semibold CAPS */
  font-family: Work Sans; 
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  
  
  /* Text / Dark Gray */
  color: #5F6368;
  }`;

const RadioInput = ({label, fieldName, isDisabled, options, classes, ...otherProps}) => {  
  return (
    <FastField
    name={fieldName}
    render={({field,form}) => {      
      const {touched, errors} = form;        
      const fieldError = _.get(errors,fieldName);
      const fieldTouched = _.get(touched, fieldName);
      return (
        <Fragment>
        <RadioGroup
          onChange={(e, val) => {            
            form.setFieldValue(fieldName, val);
            }
          }
          value={field.value}
          row>
          {options.map(x => {
            return (
              <FormControlLabel key={x.value} value={x.value} control={<Radio name={`radioOptionFor${x.name}`}/>} label={<StyledFormControlLabel>{x.name}</StyledFormControlLabel>} disabled={isDisabled} />
            )
          })}
        </RadioGroup>
        {!!fieldError && <FormHelperText>{fieldError}</FormHelperText>}
        </Fragment>
      ) }}
    />
    )
  };
export default compose(
  withStyles(styles)   
)(RadioInput);