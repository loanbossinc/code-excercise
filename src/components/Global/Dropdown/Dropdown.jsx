import React from 'react';
import styled from 'styled-components'
import _ from 'lodash';
import { compose} from "redux";
import Select from "react-select";
import {FormHelperText, FormControl} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {
  TinyHelper,
  styles,
  selectStyles,
  addDisabledStyles,
  addErrorStyles,
  addSelectedOptionStyles,
} from '../CommonStyles/DropdownStyles';

const Dropdown = ({onChange, selectedValue, options,isError,isDisabled,classes,label,required,valueName, ...other }) => {
  const valName = valueName || 'value';
  let selectedValueOption = _.find(options, {[valName]: selectedValue});
  if(!selectedValueOption)
    selectedValueOption = null;
  let currentSelectStyles = {...selectStyles};
  if(isError)
    addErrorStyles(currentSelectStyles);
  addDisabledStyles(currentSelectStyles, isDisabled);
  return (
    <FormControl classes={{root:classes.root}} required={required}>
      {selectedValueOption && <TinyHelper className="shrunken-label">{label}</TinyHelper>}
      <Select                  
        isSearchable={true}      
        styles={selectStyles}
        value={selectedValueOption}
        onChange={onChange}
        options={options}
        placeholder={selectedValueOption ? selectedValueOption.label : label}
        {...other}>
      </Select>
    </FormControl>
  )
}
export default compose(
  withStyles(styles),
)(Dropdown);
