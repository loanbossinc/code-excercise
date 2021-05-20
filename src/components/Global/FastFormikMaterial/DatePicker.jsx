import React from "react";
import styled from "styled-components";
import { FastField } from "formik";
import { compose } from "redux";
import _ from "lodash";
import { FormHelperText } from "@material-ui/core";
import MaterialDatePicker from "material-ui-pickers/DatePicker";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

const DATE_FORMAT = "MM/DD/YYYY";
const dateMask = value => (value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : []);
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
    font-size: 17px;
  }
  & label {
    font-size: 17px;
  }
  && {
    border-bottom: 1px solid #2196f3;
    transition: 0.3s;
  }
`;

const DatePicker = ({ pickerClassNames, fieldName, fastFieldStyles, ...props }) => {
  return (
    <FastField
      name={fieldName}
      render={({ field, form }) => {
        const { touched, errors, setFieldValue } = form;
        const fieldError = _.get(errors, fieldName);
        const fieldTouched = _.get(touched, fieldName);
        return (
          <>
            <StyledMaterialDatePicker
              InputProps={{
                disableUnderline: true
              }}
              clearable
              id={fieldName}
              className={pickerClassNames}
              error={fieldTouched && !!fieldError}
              helperText={(!props.errorOnBottom && fieldError) || props.helperText}
              value={field.value || null}
              onChange={makeHandleChange(fieldName, setFieldValue)}
              {...props}
            />
            {props.errorOnBottom && !!fieldError && <FormHelperText>{fieldError}</FormHelperText>}
          </>
        );
      }}
    />
  );
};

DatePicker.defaultProps = {
  format: DATE_FORMAT,
  mask: dateMask,
  pipe: autoCorrectedDatePipe,
  keyboard: true,
  disableOpenOnEnter: true
};

export default compose()(DatePicker);
