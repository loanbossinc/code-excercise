
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import { Grid, FormControl, TextField, } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getUserAction } from 'store/actions/userActions';

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
function Profile(props) {
  const currentUser = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction())
  }, []);

  console.log(currentUser);

  const { classes } = props;
  const functionSelection = [
    "Asset Manager", "Property Manager", "Controllers", "Finance"
  ]

  return (
    
    //testing currentUser state here. 
    // <div>
    //     {
    //         currentUser.firstName ? 
    //         <>
    //         <h1>hello, {currentUser.firstName}</h1> 
    //         </>
    //         :
    //         <>
    //         <h1>login</h1>
    //         </>
    //     
    // </div>


    //Trying to get user state from dispatchActions. I havent really fully grasped redux. Im used to vuex, but cant quite make the connection. I see in dev tools,
    //that currentUser starts at an empty initial state i setup in /store/state/user, i then see it update my state. currentUser.user is the object with my actual profile,
    //but then it goes back to initial state somehow??? I need more time to fully get a handle on reduce and these state hooks. 
    //though process is to get current user from redux, have these fields below populate from that. None of the fields have onChange so user can't edit details. 
    //If they click edit Profile button, will open the editProfile component. From there, will have editable fields, that change a copy of the currentUser state
    //Send that back with a dispatch action to compare oldState vs newState. Then update the currentState. Redux is kicking my ass lol. Also this looks like garbage.
    //spent most of my time fighting with redux lol. 


    <div style={{ display: 'flex' }}>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Grid container justify="space-between" className={classes.container}>
            <Grid item xs={6}>
              <span>Contact Information</span>
            </Grid>
            <Grid item align="right" xs={6}>
              <button onClick={() => this.props.history.push("/profile/edit",
                {
                  userProp: this.state.user,
                  onChange: this.state.onChange
                })}>EditProfile</button>
            </Grid>
          </Grid>
          <form className={classes.form}>
            <FormControl className="form">
              <TextField className={classes.textField}
                value={firstName}
                variant="outlined"
                label="Name"
                labelPlacement="start" />
              <TextField className={classes.textField}
                value={user.role}
                variant="outlined"
                label="Role"
                labelPlacement="start" />
              <TextField className={classes.textField}
                value={user.function}
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
                value={user.email}
                variant="outlined"
                label="Email"
                labelPlacement="start" />
              <TextField className={classes.textField}
                value={user.phone}
                variant="outlined"
                label="Phone"
                labelPlacement="start" />
              <TextField className={classes.textField}
                value={user.street + " " +
                  user.city + " " +
                  user.state + " " +
                  user.zipcode}
                multiline
                variant="outlined"
                label="Address"
                labelPlacement="start" />
            </FormControl>
          </form>
        </Paper>
      </main>
    </div>

  );
}
const mapStateTostate = ({ }) => ({});

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default compose(withRouter, withStyles(styles), connect(mapStateTostate, {}))(Profile);