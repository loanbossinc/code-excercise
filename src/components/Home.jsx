import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Paper, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import InputIcon from "@material-ui/icons/Input";
import {ROUTE_APP_LANDING} from 'constants/routes';

const LoginLink = props => <Link to="/login" {...props} />;

class Home extends Component {
  state = {
    animate: false
  };
  componentDidMount() {
      const route = ROUTE_APP_LANDING;
      this.props.history.push(route);
  }

  render() {
    return (
      <Fragment>
        <Grid className="login_Panel" container spacing={24}>
          <Grid item xs={12} className="login_PanelInner">
            <Paper
              className={`login_PanelInnerPaper shouldAnimate ${
                this.state.animate ? "animateDownFadeIn" : ""
              }`}
            >
              <div className="homePage_wrapper">
                <div className="homePage_inner">
                  <Button
                    color="primary"
                    className="welcome_loginButton"
                    component={LoginLink}
                  >
                    Login <InputIcon />
                  </Button>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  authentication,
});

export default compose(connect(mapStateToProps))(Home);
