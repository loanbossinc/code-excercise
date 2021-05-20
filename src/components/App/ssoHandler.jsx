import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { requestSisenseJWT } from "store/state/auth";

let ssoAttempt = 0;
class SSOHandler extends React.Component {
  componentDidMount() {
    this.props.requestSisenseJWT();
  }

  render() {    
    if (!this.props.sisenseJWT) return null;

    ssoAttempt++;
    if (ssoAttempt === 1) {
      // const jwt = sessionStorage.getItem("sisenseJWT");
      const jwt = this.props.sisenseJWT;
      window.location.href = `https://loanboss.sisense.com/jwt?jwt=${jwt}`;
    }
    return (<div>Loading</div>);
  }
}


function mapStateToProps({ authentication }) {
  return {
    sisenseJWT: authentication.sisenseJWT
  };
}

export default compose(
  connect(mapStateToProps, {
    requestSisenseJWT
  })
)(SSOHandler);
