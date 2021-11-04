import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { withWindowSize } from "react-fns";
import styled from 'styled-components';
import { compose } from "redux";
import { Grid, ClickAwayListener, ListItem, Toolbar } from "@material-ui/core";
import Logo from "lib/images/LBLogomark.svg";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    background: "#ffffff"
  },
  toolbarRoot: {
    minHeight: '50px',
    margin: "auto",
    width: "1104px",
  },
  drawerPaper: {
    background: "#55555f",
    marginTop: '50px',
    width: '200px',

  },
  button: {
    backgroundColor: "rgba(15, 144, 208, 1)",
    color: "#fff",
    width: "150px",
    borderRadius: "20px",
    fontFamily: "Roboto",
    margin: "5px",
    "&:hover": {
      backgroundColor: "rgba(15, 144, 208, .7)"
    }
  },
  label: {
    fontFamily: "Roboto",
    color: "#000",
    fontWeight: "100",
    letterSpacing: "1px",

  }
};
const ToolbarButtonWrapper = styled.div`
  display: block;
  flex-flow: row nowrap;
  align-items:center;
  justify-content:space-between
  width:100%;
`
const ItemGroup = styled.div`
  display:flex;
  flex-flow:row nowrap;  
`
const NavListItem = styled(ListItem)`
  && *{
    color:#000;
  }
`
const FlexNav = styled.div`
  display:flex;
  flex-flow:row nowrap;
  align-items:center;
  & * {
    font-size: 17px;
    margin: 0 4px;
  }
`
const CenteringLink = styled(Link)`
  display:flex;
`
const StyledNavListItem = styled(NavListItem)` &&&&& {
  background-color: white;
  margin: auto;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
}`;

const HeaderContainerCenter = styled.div`
  display:flex;
  flex-flow:row nowrap;  
  margin-top: 8px;
  margin: auto;
`
const BlueLink = styled.div` &&&{
  color: #005AA9;
  }
`

const BlackLink = styled.div` &&&{
  color: #5F6368;
}
`

const StyledHeaderContainer = styled.div` &&&{
  display: flex
  margin: auto;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
}
`;
const StyledImage = styled.img` &&&{  
  width: 150px;
}`

const LeftNavItem = ({ label, icon, link, callback, trailingIcon, pathName }) => {
  return (

      <StyledNavListItem button component={Link} to={link} activeClassname="selected" onClick={callback}>
        <FlexNav>
          {icon}
          {pathName === link && <BlueLink id={`leftNav-${label.toUpperCase()}`}>{label}</BlueLink>}
          {pathName !== link && <BlackLink id={`leftNav-${label.toUpperCase()}`}>{label}</BlackLink>}
          {trailingIcon}
        </FlexNav>
      </StyledNavListItem>

)}

export class MainTopNavigation extends Component {
  state = {
    drawerOpen: false,
    popupOpen: false,
  };

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
  }

  handleDrawerOpen = () => {
    console.log("handleDrawerOpen");
    this.setState({ drawerOpen: true });
  };

  handleDrawerClose = () => {
    console.log("handleDrawerClose");
    this.setState({ drawerOpen: false });
    document.getElementById("mainContent").style.marginLeft = "0px";
  };

  handleLogout = () => {
    console.log("handleLogout");
    document.getElementById("mainContent").style.marginLeft = "0px";
    this.setState({ drawerOpen: false });
  };

  toggleDrawer = (side, open) => () => {
    console.log("toggleDrawer");
    this.setState({
      [side]: open
    });
  };

  closePopup = () => {
    console.log("closePopup");
    this.setState({ popupOpen: false });
  }

  renderTopApplicationBar() {
    const { authentication: { authed }, classes } = this.props;
    return (<StyledHeaderContainer id="ScrollToNav">
      <Grid container>
        <Grid item xs={12}>
          <Toolbar classes={{ root: classes.toolbarRoot }} disableGutters>
            <ToolbarButtonWrapper>
              <ItemGroup>
                <CenteringLink to="/example"><StyledImage src={Logo} id="homeLogo" className="App-logo" alt="logo" /></CenteringLink>
                <HeaderContainerCenter>
                  {this.renderNavItem("Dashboard", "/example", false, null, this.props.location.pathname)}
                  {this.renderNavItem("Reporting", "/example", false, null, this.props.location.pathname)}
                  {this.renderNavItem("Properties", "/example", false, null, this.props.location.pathname)}
                  {this.renderNavItem("Calculations", "/example", false, null, this.props.location.pathname)}
                </HeaderContainerCenter>
              </ItemGroup>
            </ToolbarButtonWrapper>
          </Toolbar>
        </Grid>
      </Grid>

    </StyledHeaderContainer>);
  }

  renderNavItem(label, link, icon, pathName) {

    return <LeftNavItem
      label={label}
      icon={icon}
      link={link}
      callback={() => this.handleDrawerClose()}
      pathName={pathName} />
  }

  render() {

    return (
      <ClickAwayListener onClickAway={() => this.handleDrawerClose()}>
        {this.renderTopApplicationBar()}
      </ClickAwayListener>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  authentication
});

export default compose(
  withRouter,
  connect(mapStateToProps),
  withWindowSize,
  withStyles(styles),
)(MainTopNavigation);
