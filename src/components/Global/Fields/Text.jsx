import React from "react";
import styled from "styled-components";
import { FastField } from "formik";
import Base from "@material-ui/core/TextField";

const defaultValue = value => {
  if (typeof value === "number") {
    return value;
  }
  if (value) {
    return value;
  }
  return "";
};

const StyledTextField = styled(Base)`
  margin: 16px 0 8px 20px;
  font-size: 17px;
  min-width: ${props => props.minWidth ? props.minWidth :  '300px'};
`;
const TextField = props => (
  <FastField
    {...props}
    render={({ field, form: { touched, errors }, disabled = false }) => (
      <StyledTextField
        {...field}
        error={touched[field.name] && !!errors[field.name]}
        helperText={errors[field.name] ? errors[field.name] : props.helperText}
        disabled={disabled}
        {...props}        
        value={defaultValue(field.value)}
      />
    )}
  />
);



TextField.defaultProps = {
  type: "text"
};

export default TextField;
