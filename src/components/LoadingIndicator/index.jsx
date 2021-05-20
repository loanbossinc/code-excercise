import React, { Fragment } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const LoadingIndicator = ({ loading, children, replace }) => {
  const StyledLoading = styled.div`
    position: absolute;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
    overflow: hidden;
    z-index: 10000;
    transition: all 0.3s ease;
  `;

  if (replace) {
    if (loading) {
      return (
        <StyledLoading>
          <CircularProgress />
        </StyledLoading>
      );
    }
    return children;
  }

  return (
    <Fragment>
      {loading && (
        <StyledLoading>
          <CircularProgress />
        </StyledLoading>
      )}
      {children}
    </Fragment>
  );
};

export default LoadingIndicator;
