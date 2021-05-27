import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {ROUTE_PROFILE_UPDATE, ROUTE_CONTACT_UPDATE} from "constants/routes";

class Example extends React.Component {

    constructor(props){
        super(props);
        this.state = {address: {}};
    }

    componentDidMount() {
        return fetch('http://localhost:8080/me').then(resp => resp.json()).then((data) => {
            return this.setState(data);
        });
    }

    render() {
        return (
            
            <Grid container spacing={1} className="container">
                <Grid item xs={12} sm={3} className="left-column">
                   <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={12}>
                                    <img className="profile-image" src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg"></img>
                                </Grid>
                                <Grid item xs={12}>
        <p style={{"text-align": "center"}}>{this.state.firstName} {this.state.lastName}</p>
                                </Grid>
                                <Grid item container xs={12}>
                                    <Grid item xs={12}>
                                        <Button color="primary">Upload Photo</Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="outline" color="secondary">Change Password</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} className="right-column">   
                    <Card>
                            <Grid container>
                                <Grid className="profile-header profile-row" item xs={12}>
                                    <h1>User Profile</h1>
                                </Grid>
                                <Grid container className="profile-row" item xs={12}>
                                    <Grid item xs={6}>
                                        <h2>Contact Information</h2>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <button className="white-button" onClick={()=> {window.location=ROUTE_PROFILE_UPDATE}}>Edit Details</button>
                                    </Grid>
                                </Grid>
                            <Grid item container xs={12} className="profile-row">
                                <Grid item xs={3} className="profile-cell">
                                    <p>Name</p>
                                </Grid>
                                <Grid item xs={9} className="profile-cell"><p>{this.state.firstName} {this.state.lastName}</p></Grid>
                            </Grid>
                            <Grid item container xs={12} className="profile-row">
                                <Grid item xs={3} className="profile-cell"><p>Title</p></Grid>
                                <Grid item xs={9} className="profile-cell"><p>{this.state.title}</p></Grid>
                            </Grid>
                            <Grid item container xs={12} className="profile-row">
                                <Grid item xs={3} className="profile-cell"><p>Function</p></Grid>
                                <Grid item xs={9} className="profile-cell"><p>{this.state.jobFunction}</p></Grid>
                            </Grid>
                        </Grid>
                    </Card>

                    <Card>
                        <Grid container>
                            <Grid item xs={6}>
                                <h2>Personal Information</h2>
                            </Grid>
                            <Grid item xs={6}>
                                <button className="white-button" onClick={()=> {window.location=ROUTE_CONTACT_UPDATE}}>Edit Details</button>
                            </Grid>
                        <Grid item container xs={12} className="profile-row">
                            <Grid item xs={3} className="profile-cell">
                                <p>Email</p>
                            </Grid>
                            <Grid item xs={9} className="profile-cell"><p>{this.state.email}</p></Grid>
                        </Grid>
                        <Grid item container xs={12} className="profile-row">
                            <Grid item xs={3} className="profile-cell"><p>Phone Number</p></Grid>
                            <Grid item xs={9} className="profile-cell"><p>{this.state.phone}</p></Grid>
                        </Grid>
                        <Grid item container xs={12} className="profile-row">
                            <Grid item xs={3} className="profile-cell"><p>Address</p></Grid>
                            <Grid item xs={9} className="profile-cell"><p>{this.state.street}, 
                            {this.state.city}, {this.state.state}, {this.state.zipcode}</p></Grid>

                        </Grid>
                    </Grid>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = ({ }) => ({ });

export default compose(withRouter, connect(mapStateToProps, {}))(Example);
