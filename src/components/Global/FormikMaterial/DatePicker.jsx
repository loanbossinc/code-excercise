import React from "react";
import styled from 'styled-components';
import { Field,connect } from "formik";
import { compose} from "redux";
import MaterialDatePicker from "material-ui-pickers/DatePicker";
import TextInput from './TextInput';
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

const DATE_FORMAT = "MM/DD/YYYY";
const dateMask = value => value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : [];
const autoCorrectedDatePipe = createAutoCorrectedDatePipe("mm/dd/yyyy");

const makeHandleChange = (name, setFieldValue) => value => {
  if (value) {
    setFieldValue(name, value.toISOString());
  } else {
    setFieldValue(name, null);
  }
};

const StyledMaterialDatePicker = styled(MaterialDatePicker)`
  & input {
    font-size:17px;
  }
  & label {}
  && {
    border-bottom: 1px solid #2196F3;
    transition: 0.3s;
  }  
`
const DatePicker = ({ pickerClassNames,fieldName, fastFieldStyles,formik, ...props }) => {
  const {values,handleChange,errors, touched, setFieldValue} = formik;
  return (
    <StyledMaterialDatePicker                  
      InputProps={{
        disableUnderline:true,
      }}
      clearable={true}
      id={fieldName}
      className={pickerClassNames}
      error={touched[fieldName] && !!errors[fieldName]}
      helperText={errors[fieldName] ? errors[fieldName] : props.helperText}
      value={values[fieldName]}
      onChange={makeHandleChange(fieldName, setFieldValue)}
      style={{...props.style, borderBottom: errors[fieldName] ? "2px solid red" : ""}}
      {...props}        
      />    
  );
};

DatePicker.defaultProps = {
  format: DATE_FORMAT,
  mask: dateMask,
  pipe: autoCorrectedDatePipe,
  keyboard: true,
  disableOpenOnEnter: true,  
}

export default compose(
  connect
)
(DatePicker);
