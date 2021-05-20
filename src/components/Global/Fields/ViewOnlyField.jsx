import React from "react";
import styled from 'styled-components';
import {conformToMask} from "react-text-mask";
import masks from "lib/masks";

const StyledTextField = styled.div`
  font-size: 17px;
  font-weidth:bold;
  height:35px;
  color:black;
  text-align:left;
  margin-top:4px;
  padding-bottom:3px;
  padding-left:8px;
  box-sizing:border-box;
`;

const ViewOnlyField = props => {
  // Seems to be a bug in conformToMask when applying masks directly to decimal + percentage filters: see https://stackoverflow.com/questions/43793021/how-to-format-percent-with-decimal-using-angular2-createnumbermask-from-text-mas
  const mask = props.mask && props.value ? masks[props.mask](String(props.value)).filter((val) => val != '[]') : false;
  const val = mask ? conformToMask(String(props.value), mask, {guide:false}).conformedValue : props.value || `--`;
  const displayValue = props.placeholder || val;

  return <StyledTextField>{displayValue}</StyledTextField>;
};

export default ViewOnlyField;
