import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TextField, MenuItem, Select} from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";

import numeral from "numeral";


import {ROUTE_APP_LANDING} from "constants/routes";


class ContactUpdate extends React.Component {

    constructor(props){
        super(props);
        this.state = {statesList: []};
        Object.assign(this, {
            handleTextChange : this.handleChange,
            handlePhoneNumber: this.handlePhoneNumber,
            submit: this.submit
        });
    }

    componentDidMount() {
        fetch("http://localhost:8080/me/contact-update").then(resp => resp.json()).then((data) => {
            this.setState(data);
        });
    }

    handlePhoneNumber(value) {
        let state = this.state;
        state.phone = value;
        this.setState(state);
    }

    handleChange(field, event) {
        let state = this.state;
        state[field] = event.target.value;
        this.setState(state);
    }

    submit(state) {
        fetch("http://localhost:8080/me/contact-update", {
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
                                        <h2>Contact Information</h2>
                                    </Grid>
                                </Grid>
                            <Grid item container xs={12} className="profile-row">
                                <Grid xs={3}>
                                    <p>Email</p>
                                </Grid>
                                <Grid item xs={9} className="profile-cell">
        <p>{this.state.email}</p>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} className="profile-row">
                                <Grid xs={12}>
                                    <p>Phone</p>
                                </Grid>
                                <Grid item xs={12} className="profile-cell">
                                    <MuiPhoneNumber onlyCountries={['us']} countryCodeEditable={false} disableCountryCode={false} disableDropdown={true} id="filled-basic" onChange={(e) => {this.handlePhoneNumber(e)}}  value={this.state.phone} variant="filled" />
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} className="profile-row">
                                <Grid xs={12}>
                                    <p>Address</p>
                                </Grid>
                                <Grid item xs={12} className="profile-cell">
                                    <TextField fullwidth id="filled-basic" onChange={(e) => {this.handleChange('street', e)}}  value={this.state.street} variant="filled" />
                                </Grid>
                                <Grid container item xs={12} className="profile-cell">
                                    <Grid item xs={6}>
                                        <TextField id="filled-basic" onChange={(e) => {this.handleChange('city', e)}}  value={this.state.city} variant="filled" />
                                    </Grid>
                                    <Grid container item xs={6}>
                                        <Select
                                        value={this.state.state}
                                        onChange={(e) => {this.handleChange('state', e)}}
                                        >
                                        {this.state.statesList.map((option) => {
                                            return (<MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>)
                                        })}
                                        </Select>
                                    </Grid>
                                </Grid>
                                <Grid container xs={12}>
                                    <Grid item xs={12}>
                                        <TextField id="filled-basic" onChange={(e) => {this.handleChange('zipcode', e)}}  value={this.state.zipcode} variant="filled" />
                                    </Grid>
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
                                    <p style={{"text-align": "center"}}>{this.state.firstName} {this.state.lastName}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <img className="profile-image" src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg"></img>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={12}>
                                    <Button onClick={() => {this.submit(this.state)}} color="primary">Save Changes</Button>
                                </Grid> 
                                <Grid item xs={12}>
                                    <Button variant="outline" color="secondary" onClick={()=> {window.location=ROUTE_APP_LANDING}}>Cancel</Button>
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

export default compose(withRouter, connect(mapStateToProps, {}))(ContactUpdate);
