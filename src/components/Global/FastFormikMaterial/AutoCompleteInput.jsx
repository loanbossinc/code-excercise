import React, {Fragment} from 'react';
import styled from 'styled-components'
import _ from 'lodash';
import { connect, FastField } from 'formik';
import { compose} from "redux";
import Select from "react-select";
import {FormHelperText, FormControl} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {
  TinyHelper,
  styles,
  selectStyles,
  addDisabledStyles,
  checkAndAddErrorStyles,
  addSelectedOptionStyles,
} from '../CommonStyles/DropdownStyles';


const StyledFormHelperText = styled(FormHelperText)`
  && {
    color: red;
  }
`;

const shouldShowError = (fieldName, error, touched, validateOnChange) => {  
  return !!error && (_.get(touched, fieldName) || validateOnChange)
}
const AutoCompleteInput = ({formik,label, fieldName, selectName, selectValue, options,classes, children,required,validateOnChange,...other }) => {
  const {isDisabled} = other;  
  if(!selectName){
    selectName = "name"
  }
  if(!selectValue){
    selectValue = "id"
  }  

  if(!formik)
    return null;
  const {values, handleChange, errors, touched} = formik;   
  let selectedValue = _.get(values, fieldName, null);
  let selectedValueOption = null;
  if(selectedValue !== null)    
    selectedValueOption = _.find(options, {[selectValue]: selectedValue[selectValue]});  
  if(!selectedValueOption)
    selectedValueOption = null;
  let error = _.get(errors, fieldName);
  const shouldShowErrorVal = shouldShowError(fieldName, error, touched, validateOnChange);  
  let currentSelectStyles = {...selectStyles};
  let placeholder = _.find(options, {[selectValue]: _.get(values, fieldName)});    
  checkAndAddErrorStyles(currentSelectStyles, error, shouldShowErrorVal, required);
  addSelectedOptionStyles(currentSelectStyles, placeholder);    
  addDisabledStyles(currentSelectStyles, isDisabled); 
  return (
    <Fragment>      
    <Select  
      id={`dropdownFor${fieldName}`}               
      isSearchable={true}      
      styles={currentSelectStyles}
      error={!!error && _.get(touched, fieldName)}
      placeholder={placeholder ? placeholder[selectName] : label}
      value={selectedValueOption}
      onChange={(a,b) => {
        handleChange(     
          {
            target:
            {
              name: fieldName,
              value: a.value,
            }
          })
        }
      }
      options={options.map(x => {
        return {
          label: x[selectName],
          value: x[selectValue]
        }
      })}
      {...other}>
    </Select>  
    
    {!!error && <StyledFormHelperText>{error}</StyledFormHelperText>}
    
    </Fragment>  
)}
export default compose(
  withStyles(styles),
)(AutoCompleteInput);
