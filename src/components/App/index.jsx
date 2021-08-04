import Home from "components/Home";
import LoadingIndicator from "components/LoadingIndicator";
import PrivateRoute from "components/PrivateRoute";
import TopNavigation from "components/TopNavigation";
import Example from '../Example/example';
import Personal from '../Example/editPersonal';
import Contact from '../Example/editContact';
import { ROUTE_APP_LANDING, ROUTE_EDIT_PERSONAL, ROUTE_EDIT_CONTACT } from "constants/routes";
import "material-icons-font/material-icons-font.css";
import numeral from "numeral";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkAuth } from "store/state/auth";
import styled from "styled-components";
import "typeface-space-mono";
import "typeface-work-sans";
import "./App.css";
import Flex from '../Global/PageOrganization/Flex';

numeral.register("format", "phone", {
  regexps: {
    format: /\+?N?[\.\ \-]?\(?NNN\)?[\.\ \-]?NNN[\.\ \-]?NNNN/
  },
  format(value, formatString) {
    function normalize(phoneNumber) {
      if (!phoneNumber) return 0;
      return phoneNumber.toString().replace(/^[\+\d{1,3}\-\s]*\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "$1$2$3");
    }

    function format(phoneNumber, formatString) {
      phoneNumber = normalize(phoneNumber);
      for (let i = 0, l = phoneNumber.length; i < l; i++) {
        formatString = formatString.replace("N", phoneNumber[i]);
      }
      if (formatString.indexOf("N") > -1) {
        console.warn("invalid phone number", phoneNumber);
        return "--";
      }
      return formatString;
    }

    return format(value, formatString);
  }
});
const AppFlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;
const Spacer = styled.div`
  flex-grow: 1;
`;

export class App extends React.Component {
  state = {
    hasError: false,
    error: {},
    isInitial: true
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.props.checkAuth();
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate');
    if (this.props.authentication.authed && !prevProps.authentication.authed)
      setTimeout(() => {
        console.log('SET_TIMEOUT');
        this.setState({ isInitial: false });
      }, 2500);
  }

  componentDidCatch(error) {
    console.log("ERROR", error);
    this.setState({ hasError: true, error });
  }

  getMainContentClass() {

    return "mainContent";
  }


  render() {
    const { authed, history, loading } = this.props;
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <Fragment>
          <h1>An error has occured:</h1>
          <pre>{JSON.stringify(error, null, 4)}</pre>
        </Fragment>
      );
    }
    return (
      <Router history={history}>
        <Fragment>
          <AppFlexContainer>
            {/* <LoadingIndicator loading={false} > */}
            <TopNavigation />
            <Flex className="mainContent" id="mainContent" style={{ flex: 1 }}>
              <Switch>
                <Route path="/" exact component={Home} />

                <PrivateRoute allRoles authentication={this.props.authentication} path={ROUTE_APP_LANDING} Component={Example} />
                <PrivateRoute allRoles authentication={this.props.authentication} path={ROUTE_EDIT_PERSONAL} Component={Personal} />
                <PrivateRoute allRoles authentication={this.props.authentication} path={ROUTE_EDIT_CONTACT} Component={Contact} />

              </Switch>
            </Flex>
            {/* </LoadingIndicator> */}
          </AppFlexContainer>
          <ToastContainer closeButton={false} autoClose={2000} transition={Flip} />
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authentication, loading }) => ({
  authentication,
  loading
});

export default connect(mapStateToProps, { checkAuth })(App);
