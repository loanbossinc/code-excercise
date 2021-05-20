import React from "react";
import Slide from "@material-ui/core/Slide";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";
export const dateMask = value => value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : [];
export const autoCorrectedDatePipe = createAutoCorrectedDatePipe("mm/dd/yyyy");


export const styles = theme => ({
  highZ: {
    zIndex: 5,
    border: "2px solid red",
  },
});
