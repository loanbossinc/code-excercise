import React from "react";
import { FastField } from "formik";
import styled from "styled-components";
import DatePicker from "material-ui-pickers/DatePicker";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

const DATE_FORMAT = "MM/DD/YYYY";

const dateMask = value =>
  value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : [];

const autoCorrectedDatePipe = createAutoCorrectedDatePipe("mm/dd/yyyy");

/**
 * handleChange creator
 *
 * @param {Object} field Formik field object
 * @param {Function} setFieldValue
 */
const makeHandleChange = (name, setFieldValue) => value => {  
  if(!value){
    setFieldValue(name, null);
  } else {
    setFieldValue(name, value.toISOString());
  }
};

const StyledDatePicker = styled(DatePicker)`
  margin: 16px 0 8px 20px;
  font-size: 17px;
  min-width: 300px;
`;

const DateField = ({ pickerClassNames, ...props }) => (
  <FastField
    {...props}
    render={({ field, form: { touched, errors, setFieldValue } }) => (
      <StyledDatePicker
        id={field.name}
        {...props}
        {...field}
        className={pickerClassNames}
        error={touched[field.name] && !!errors[field.name]}
        helperText={errors[field.name] ? errors[field.name] : props.helperText}
        value={props.value || field.value}
        onChange={makeHandleChange(field.name, setFieldValue)}
      />
    )}
  />
);

export const UnstyledDateField = ({ pickerClassNames, fastFieldStyles, ...props }) => (
  <FastField
    style={{fastFieldStyles}}
    {...props}
    render={({ field, form: { touched, errors, setFieldValue } }) => (
      <DatePicker
        id={field.name}
        {...props}
        {...field}
        className={pickerClassNames}
        error={touched[field.name] && !!errors[field.name]}
        helperText={errors[field.name] ? errors[field.name] : props.helperText}
        value={props.value || field.value}
        onChange={makeHandleChange(field.name, setFieldValue)}
      />
    )}
  />
);
UnstyledDateField.defaultProps = {
  format: DATE_FORMAT,
  mask: dateMask,
  pipe: autoCorrectedDatePipe,
  keyboard: true,
  disableOpenOnEnter: true,  
}

// You can override these by passing props to the component when used.
DateField.defaultProps = {
  format: DATE_FORMAT,
  mask: dateMask,
  pipe: autoCorrectedDatePipe,
  keyboard: true,
  disableOpenOnEnter: true,
  pickerClassNames: "datePickerFix",
  margin: "normal"
};

export default DateField;
