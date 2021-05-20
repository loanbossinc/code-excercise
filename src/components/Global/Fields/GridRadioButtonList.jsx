import React, { Fragment } from "react";
import { InputLabel, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = theme => ({
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  listItems: {
    color: "#000000;"
  }
});

class GridRadioButtonList extends React.Component {
  createList = items => {
    const { classes } = this.props;
    return items.map(item => (
      <FormControlLabel
        key={item.label}
        control={<Radio />}
        className={classes.listItems}
        value={item.value}
        label={item.label}
      />
    ));
  };

  render() {
    return (
      this.props.shouldShow && (
        <Fragment>
          <Grid item xs={2}>
            <InputLabel htmlFor={this.props.name}>
              {this.props.label}
            </InputLabel>
          </Grid>
          <Grid item xs={2}>
            <RadioGroup
              name={this.props.name}
              value={this.props.value}
              onChange={this.props.onChange}
              row
            >
              {this.createList(this.props.options)}
            </RadioGroup>
          </Grid>
        </Fragment>
      )
    );
  }
}

export default withStyles(styles)(GridRadioButtonList);
