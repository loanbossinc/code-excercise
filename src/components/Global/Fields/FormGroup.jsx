import React from "react";
import Grid from "@material-ui/core/Grid";

const FormGroup = ({ header, children }) => (
  <Grid container classes={{ container: "FormGroup" }}>
    <Grid item xs={12} className="row">
      {header()}
    </Grid>
    <Grid item xs={12} className="row">
      {children}
    </Grid>
  </Grid>
);

FormGroup.defaultProps = {
  header: () => {}
};

export default FormGroup;
