import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TextField, MenuItem, Select} from "@material-ui/core";


import {ROUTE_APP_LANDING} from "constants/routes";



class ProfileUpdate extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            jobfunctionList: [],
            currentFirstName: "",
            currentLastName: ""
        };
        Object.assign(this, {
            handleTextChange : this.handleChange,
            saveChanges : this.saveChanges
        });
    }

    componentDidMount() {
        fetch("http://localhost:8080/me/profile-update").then(resp => resp.json()).then((data) => {
            data.currentFirstName = data.firstName;
            data.currentLastName = data.lastName;
            this.setState(data);
        });
    }

    handleChange(field, event) {
        let state = this.state;
        state[field] = event.target.value;
        this.setState(state);
    }

    saveChanges(state) {
        fetch("http://localhost:8080/me/profile-update", {
            method: 'post',
            body: JSON.stringify(state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json()).then((data) => {
            //TODO - Material UI badge?
            window.location=ROUTE_APP_LANDING;
        });

    }

    render() {
        return (
            
            <Grid spacing={2} container className="container">
                <Grid item xs={12} sm={6}>
                    <Card>
                        <Grid container>
                                <Grid container className="profile-row" item xs={12}>
                                    <Grid item xs={12}>
                                        <h2>Personal Information</h2>
                                    </Grid>
                                </Grid>
                            <Grid item container xs={12} className="profile-row">
                                <Grid xs={12}>
                                    <p>Name</p>
                                </Grid>
                                <Grid item xs={6} className="profile-cell">
                                    <TextField value={this.state.firstName} onChange={(e) => {this.handleChange('firstName', e)}}  id="filled-basic" variant="filled" />
                                </Grid>
                                <Grid item xs={6} className="profile-cell">
                                    <TextField id="filled-basic" onChange={(e) => {this.handleChange('lastName', e)}} value={this.state.lastName} variant="filled" />
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} className="profile-row">
                                <Grid xs={12}>
                                    <p>Occupation</p>
                                </Grid>
                                <Grid item xs={6} className="profile-cell">
                                    <TextField id="filled-basic" onChange={(e) => {this.handleChange('title', e)}}  value={this.state.title} variant="filled" />
                                </Grid>
                                <Grid item xs={6} className="profile-cell">

                                    <Select
                                    value={this.state.jobFunction}
                                    onChange={(e) => {this.handleChange('jobFunction', e)}}
                                    >
                                        {this.state.jobfunctionList.map((option) => {
                                            return (<MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                            </MenuItem>)
                                        })}
                                    </Select>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6}>
                   <Card>
                        <Grid container>
                            <Grid container item xs={12}>
                                <Grid item xs={6}>
                                    <p style={{"text-align": "center"}}>{this.state.currentFirstName} {this.state.currentLastName}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <img className="profile-image" src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg"></img>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={12}>
                                    <Button color="primary" onClick={() => {this.saveChanges(this.state)}}>Save Changes</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outline" onClick={()=> {window.location=ROUTE_APP_LANDING}} color="secondary">Cancel</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                
            </Grid>
        );
    }
}

const mapStateToProps = ({ }) => ({ });

export default compose(withRouter, connect(mapStateToProps, {}))(ProfileUpdate);
