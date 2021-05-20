import React, { Fragment } from "react";
import styled from "styled-components";
import { Field } from "formik";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";

const StyledFormControl = styled(FormControl)`
  margin: 16px 0 8px 20px;
`;

const StyledSelect = styled(Select)`
  font-size: 17px;
  min-width: 300px;
  text-transform: capitalize;
`;

const createSelectItem = whitespace => item => {
  if (typeof item === "string") {
    return (
      <MenuItem value={item} key={item}>
        {whitespace
          ? item.replace(/([A-Z]+)/g, " $1")
          : item.replace(/([A-Z]+)/g, "$1")}
      </MenuItem>
    );
  }
  if (typeof item === "object") {
    const { label, value } = item;
    return (
      <MenuItem value={value} key={value}>
        {whitespace
          ? label.replace(/([A-Z]+)/g, " $1")
          : label.replace(/([A-Z]+)/g, "$1")}
      </MenuItem>
    );
  }
  return null;
};

const renderErrors = (errors, touched, field, disabled, disabledText) => {    
  if(touched && touched[field.name] && !!errors[field.name])
    return (<FormHelperText>Error</FormHelperText>);
  if(disabled)
    return (<FormHelperText>{disabledText}</FormHelperText>)
  return null;
}
const renderSelect = ({
  props,
  field,
  label,
  disabled,
  selectClassnames,
  touched,
  errors,
  options,
  whitespace,
  disabledText  
}) => {  
  
  return (
    <Fragment>
      <InputLabel
        htmlFor={field.name}
        shrink={Boolean(field.value && field.value !== "")}
      >
        {label}
      </InputLabel>
      <StyledSelect
        disabled={disabled}
        {...props}
        {...field}
        className={selectClassnames}
        error={touched[field.name] && !!errors[field.name]}
        value={field.value || ""}
        onBlur={() => {
          field.onBlur(field.name);
        }}
      >
        {options.map(createSelectItem(whitespace))}
      </StyledSelect>
      {renderErrors(errors, touched, field, disabled, disabledText)}
    </Fragment>
  );
};

const SelectField = ({
  label,
  className,
  selectClassnames,
  options = [],
  whitespace,
  ...props
}) => (
  <StyledFormControl className={className}>
    <Field
      {...props}
      render={
        ({ field, form: { touched, errors }, disabled = false }) => {
        const renderParams = {
          props,
          field,
          label,
          disabled: props.disabled || disabled,
          selectClassnames,
          touched,
          errors,
          options,
          whitespace,
          disabledText:props.disabledText
        };
        return renderSelect(renderParams);
      }
    }
    />
  </StyledFormControl>
);

SelectField.defaultProps = {
  whitespace: true
};

export default SelectField;
