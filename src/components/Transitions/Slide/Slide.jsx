import React from "react";
import propTypes from "prop-types";
import Slide from "@material-ui/core/Slide";

const SlideTransition = ({ direction, ...props }) => (
  <Slide direction={direction} {...props} />
);

SlideTransition.propTypes = {
  direction: propTypes.string
};

SlideTransition.defaultProps = {
  direction: "down"
};

export default SlideTransition;
