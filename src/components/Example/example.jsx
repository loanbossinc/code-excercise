import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import data from 'data/userData.json';

class Example extends Component {

    render() {
        console.log('HERE');
        return (
            <div>
		<h1>User Profile</h1>
		<h2>Personal Information&nbsp;<Link to="/editPersonalInformation">Edit Details</Link></h2>
		<label>Name:&nbsp;{data.firstName}&nbsp;{data.lastName}</label>
		<br/><br/>
		<label>Job Title:&nbsp;{data.jobTitle}</label>
		<br/><br/>
		<label>Job Function:&nbsp;{data.jobFunction}</label>
		<h2>Contact Information&nbsp;<input type="button" value="Edit Details"/></h2>
		<label>Email Address:&nbsp;{data.emailAddress}</label>
		<br/><br/>
		<label>Phone Number:&nbsp;({data.phoneAreaCode}){data.phoneFirstThree}-{data.phoneLastFour}</label>
		<br/><br/>
		<label>Mailing Address:</label>
		<br/><br/>
		<label>Street:&nbsp;{data.street}</label>
		<br/>
		<label>City:&nbsp;{data.city}</label>
		<br/>
		<label>State:&nbsp;{data.state}</label>
		<br/>
		<label>Zip Code:&nbsp;{data.zipCode}</label>
	    </div>
        );
    }
}

const mapStateToProps = ({ }) => ({ });

export default compose(withRouter, connect(mapStateToProps, {}))(Example);
