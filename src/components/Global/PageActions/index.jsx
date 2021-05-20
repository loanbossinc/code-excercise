import React from "react";
import Grid from "@material-ui/core/Grid";

const PageActions = ({ children }) => (
  <Grid
    className="headerActions"
    container
    spacing={24}
    style={{
      backgroundColor: "#f1f2f2",
      height: "42px",
      margin: "0px",
      padding: "0 14px",
      boxShadow: "0px 1px 4px #9e9e9e"
    }}
  >
    {children}
  </Grid>
);

export default PageActions;
