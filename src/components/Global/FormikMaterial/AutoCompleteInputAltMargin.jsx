import React from 'react';
import styled from 'styled-components'
import _ from 'lodash';
import { connect } from 'formik';
import { compose} from "redux";
import Select from "react-select";
import {FormHelperText, FormControl} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const TinyHelper = styled.div`
  color: #999999;
  position: absolute;
  top: -13px;
  z-index: 5;
`

const StyledFormHelperText = styled(FormHelperText)`
&&&{
  color: rgb(255, 0, 0);
}`

const styles = theme => ({
  root: {
    
    width:'80%',
    marginTop: '11px',
    
  }
})
let selectStyles = {    
  container: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #2196F3',
    transition: 'border 0.1s',
    '&:hover': {
      cursor: 'pointer',
      borderBottom: '1px solid #43A8FF'
    },
    padding: '0'
  }),
  valueContainer : (provided, state) => ({
    ...provided,
    padding:'0',
    cursor: 'pointer'
  }),
  indicatorSeparator: (provided, state) => ({
    display:'none'
  }),
  placeholder: (provided, state) => ({
    color: '#999',      
    padding: 0,
    position:'absolute',
    top: '9px'
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow: 'none',
    border:'none',
    padding: 0
    
  }),
  menu:  (provided, state) => ({
    ...provided,
    zIndex: 6
  })
}

const addDisabledStyles = (currentSelectStyles, isDisabled) => {
  if (isDisabled) {
    currentSelectStyles.container = (provided,state) => ({            
        ...provided,
        background:'none',
        border: '0',
        borderBottom: '0px',
        '&:hover': {
          cursor: 'pointer',
          borderBottom: '0px'
        },
    });
    currentSelectStyles.control = (provided,state) => ({
      ...provided,
      background: 'none',
      border: '0',
    })
    currentSelectStyles.indicatorsContainer = (provided,state) => ({
      ...provided,
      display:'none'
    })
  }
}
const addErrorStyles = (currentSelectStyles, error,shouldShowError, required) => {  
  if(!!error && shouldShowError && required){
    currentSelectStyles.placeholder = (provided, state) => ({
      color: 'red',      
      padding: 0,
      position:'absolute',
      top: '9px'
    });
    currentSelectStyles.container = (provided, state) => ({
      ...provided,
      borderBottom: '1px solid red',
      transition: 'border 0.1s',
      '&:hover': {
        cursor: 'pointer',
        borderBottom: '1px solid red'
      },
      padding: '0'
    })
  }
}
const addSelectedOptionStyles = (currentSelectStyles, placeholder) => {
  if(placeholder){
    currentSelectStyles.placeholder = (provided, state) => ({
      color: '#000',
      padding: 0,
      position:'absolute',
      top: '9px'
    });
  }
}
const shouldShowError = (fieldName, error, touched, validateOnChange) => {  
  return !!error && (_.get(touched, fieldName) || validateOnChange)
}
const AutoCompleteInputAltMargin = ({label, fieldName, selectName, selectValue, options,formik,classes, children,hideLabel,required,validateOnChange,...other }) => {
  const {isDisabled} = other;
  if(!selectName){
    selectName = "label"
  }
  if(!selectValue){
    selectValue = "id"
  }  
  const {values, handleChange, errors, touched} = formik;    
  let error = _.get(errors, fieldName);
  const shouldShowErrorVal = shouldShowError(fieldName, error, touched, validateOnChange);  
  let currentSelectStyles = {...selectStyles};
  let placeholder = _.find(options, {[selectValue]: _.get(values, fieldName)});    
  addErrorStyles(currentSelectStyles, error, shouldShowErrorVal, required);
  addSelectedOptionStyles(currentSelectStyles, placeholder);    
  addDisabledStyles(currentSelectStyles, isDisabled);
  return (
  <FormControl id={`dropdownFor${fieldName}`} classes={{root:classes.root}} required={required}>
    {children}
    {!hideLabel && placeholder && <TinyHelper className="shrunken-label">{label}</TinyHelper>}
    <Select               
      isSearchable={true}      
      styles={currentSelectStyles}
      error={!!error && _.get(touched, fieldName)}
      placeholder={placeholder ? placeholder[selectName] : label}      
      value={options.find(x=>x.value === _.get(values, fieldName))}
      menuPlacement="auto"
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
     {!!error && shouldShowErrorVal && <StyledFormHelperText>{error}</StyledFormHelperText>}
 </FormControl>
)}
export default compose(
  withStyles(styles),
   connect
)(AutoCompleteInputAltMargin);
