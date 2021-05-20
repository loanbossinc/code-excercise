import React from "react";
import { Field } from "formik";

const ConditionalField = ({ conditions, name, children }) => (
  <Field
    name={name}
    render={({ field: { value } }) => {
      if (conditions.includes(value)) {
        return children;
      }
      return null;
    }}
  />
);

export default ConditionalField;
