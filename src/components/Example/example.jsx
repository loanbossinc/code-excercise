import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import UserProfile from "components/App/UserProfile";


class Example extends Component {
  render() {
    return (
      <div>
        <UserProfile />
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default compose(withRouter, connect(mapStateToProps, {}))(Example);
