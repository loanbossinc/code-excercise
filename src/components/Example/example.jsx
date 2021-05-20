import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";


class Example extends Component {

    render() {
        console.log('HERE');
        return (
            <>
                Example Page - Add Components Here
            </>
        );
    }
}

const mapStateToProps = ({ }) => ({ });

export default compose(withRouter, connect(mapStateToProps, {}))(Example);
