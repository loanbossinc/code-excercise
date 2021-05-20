import React from "react";
import { Toolbar, AppBar, Typography, Button } from "@material-ui/core";
import styled from "styled-components";
import { isEmpty } from "lodash";
import { withRouter,Link } from "react-router-dom";

const BreadCrumbLink = styled(Link)`
  font-size:17px;  
  font-weight:bold;
`
const StyledAppBar = styled(AppBar).attrs({
  classes: { root: "AppBar" }
})`  
  && {
    background:none;
  }
  .breadcrumb {
    text-transform: uppercase;
    color: #606061;
    font-size: 17px;
    min-width: auto;
    padding: 0;
    text-transform: capitalize;
  }
  .title {        
    font-size: 17px;
    color: #606061;
    font-weight:bold;
  }
`;

const PageHeader = class extends React.Component {

  render() {
    const { title, children, deal } = this.props;
    const breadcrumbsArray = window.location.pathname.split("/");
    const isDeal = breadcrumbsArray[1] === "deals";
    return (
      <StyledAppBar position="static">
        <Toolbar
          style={{
            justifyContent: "space-between",
            minHeight: "50px",
            borderBottom: "2px solid #afafb0"
          }}
        >
          <Typography variant="headline" color="inherit">
            {isDeal && <BreadCrumbLink to={'/portfolio'}>{"Portfolio"} / </BreadCrumbLink>}
            {!isDeal && <BreadCrumbLink to={`/${breadcrumbsArray[1]}/active`}>{breadcrumbsArray[1]} / </BreadCrumbLink>}            
            {!isEmpty(deal.fund) && <BreadCrumbLink to={`/funds/${deal.fund.id}`}>{deal.fund.name} / </BreadCrumbLink>}
            <span className="title">{title}</span>
          </Typography>
          {children}
        </Toolbar>
      </StyledAppBar>
    );
  }
};

export default withRouter(PageHeader);
