import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import data from 'data/userData.json';

class EditPersonalInformation extends Component {

    render() {
        return (
            <div>
		<h1>Edit Personal Information<h1>
		<label>Name:&nbsp;</label>
		<input type="text" value="{data.firstName}"/>
		&nbsp;
		<input type="text" value="{data.lastName}"/>
		<br/><br/>
		<label>Job Title:&nbsp;</label>
		<input type="text" value="{data.jobTitle}"/>
		<br/><br/>
		<label>Job Function:&nbsp;</label>
		<input type="text" value="{data.jobFunction}"/>
		<br/><br/>
		<input type="button">Save Changes</>
	    </div>
        );
    }
}

const mapStateToProps = ({ }) => ({ });

export default compose(withRouter, connect(mapStateToProps, {}))(Example);
