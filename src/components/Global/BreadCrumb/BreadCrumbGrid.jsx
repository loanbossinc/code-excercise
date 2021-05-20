import React from 'react';
import styled from 'styled-components';
import {Grid} from '@material-ui/core';
const StyledBreadCrumbGrid = styled(Grid)`
  margin-bottom:8px;
  font-size:17px !important;
  color: #606061;
  font-weight:bold;
`
const BreadCrumbGrid = ({children}) => {
  return (
    <Grid>
      <StyledBreadCrumbGrid item>
        {children}
      </StyledBreadCrumbGrid>
    </Grid>
  )
}

export default BreadCrumbGrid;