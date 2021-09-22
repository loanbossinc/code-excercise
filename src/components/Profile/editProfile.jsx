import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import { List, Container, ListItem, ListSubheader, ListItemText, Button, Grid, FormControl, TextField, InputLabel, Select, FormControlLabel, FormGroup, MenuItem, Card, CardActionArea, CardMedia, CardContent, Typography, FilledInput, OutlinedInput, ListItemSecondaryAction } from "@material-ui/core";


import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  textField: {
    padding: '15px',
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  container: {
    paddingBottom: '20px'
  }
  
});

function EditUser(props) {
  const { classes } = props;
  const user = props.location.state.userProp;
  const functionSelection = [
    "Asset Manager", "Property Manager", "Controllers", "Finance"
  ]
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <span> EDIT PROFILE</span>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Grid container justify="space-between" className={classes.container}>
          <Grid item xs={6}>
            <span>Contact Information</span>
          </Grid>           
          <Grid item align="right" xs={6}>
            <button onClick={() => props.history.push("/profile/edit")}>EditProfile</button>
          </Grid>
        </Grid>
        <form className={classes.form}>
            <FormControl className="form">
                <TextField className={classes.textField}
                    value={user.contactInfo.firstName }
                    variant="outlined"
                    label="Name"
                    labelPlacement="start"/>
                <TextField className={classes.textField}
                    value={props.history.location.state.userProp.contactInfo.role}
                    variant="outlined"
                    label="Role"
                    labelPlacement="start" />
                <TextField className={classes.textField}
                    value={props.history.location.state.userProp.contactInfo.function}
                    variant="outlined"
                    label="Function"
                    labelPlacement="start" />
            </FormControl>
        </form>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container justify="space-between" className={classes.container}>
          <Grid item xs={6}>
            <span>Personal Information</span>
          </Grid>           
          <Grid item align="right" xs={6}>
            <button>Edit Profile</button>
          </Grid>
        </Grid>
        <form className={classes.form}>
            <FormControl className="form">
                <TextField className={classes.textField}
                    value={props.history.location.state.userProp.personalInfo.email}
                    variant="outlined"
                    label="Email"
                    labelPlacement="start" />
                <TextField className={classes.textField}
                    value={props.history.location.state.userProp.personalInfo.phone}
                    variant="outlined"
                    label="Phone"
                    labelPlacement="start" />
                <TextField className={classes.textField}
                    value={props.history.location.state.userProp.personalInfo.address.street + " " + 
                    props.history.location.state.userProp.personalInfo.address.city + " " + 
                    props.history.location.state.userProp.personalInfo.address.state + " " + 
                    props.history.location.state.userProp.personalInfo.address.zipcode}
                    multiline
                    variant="outlined"
                    label="Address"
                    labelPlacement="start" />
            </FormControl>
        </form>
      </Paper>
    </main>
  );
}

EditUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ }) => ({ });

export default compose(withRouter, withStyles(styles), connect(mapStateToProps, {}))(EditUser);