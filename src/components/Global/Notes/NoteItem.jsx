import PropTypes from "prop-types";
import { compose } from "redux";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import { Grid, Chip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Delete } from "@material-ui/icons";
import { updateNote } from "../../../store/state/note";

const NoteContainerGrid = styled(Grid)`
  && {
    padding-top: 5px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const NoteHeaderGrid = styled(Grid)`
  && {
    font-size: 14px;
    font-family: Roboto-Medium, "Roboto Medium", Roboto, sans-serif;
    color: rgba(0, 0, 0, 0.537254901960784);
    height: 17px;
  }
`;

const NoteContentGrid = styled(Grid)`
  && {
    font-size: 16px;
    padding-top: 5px;
  }
`;

const ButtonGrid = styled(Grid)`
  && {
    text-align: right;
  }
`;

const styles = () => ({
  icon: {
    color: "#2196f3",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      color: "#9e9e9e"
    }
  }
});

const BaseChip = styled(Chip)`
  && {
    font-size: 14px;
    height: 25px;
    width: 75px;
    border-style: solid;
    border-width: 1px;
    margin-left: 5px;
  }
`;

const SelectedChip = styled(BaseChip)`
  && {
    color: #49a1f4;
    border-color: #49a1f4;
    background-color: #ecf5fe;
  }
`;

const UnselectedChip = styled(BaseChip)`
  && {
    color: #7f7f7f;
    border-color: #7f7f7f;
    background-color: #ffffff;
  }
`;

class NoteItem extends Component {
  setIsPrivate(isPrivate) {
    this.props.note.isPrivate = isPrivate;
    this.props.updateNote(this.props.note);
    this.forceUpdate();
  }

  render() {
    return (
      <NoteContainerGrid item xs="12" container direction="row" style={this.props.note.isPrivate || this.props.authentication.isGuest ? undefined : { backgroundColor: "#fad4ce" }} alignItems="flex-start">
        <Grid item direction="column" xs="6">
          <Grid container>
            <NoteHeaderGrid item xs="12">
              {!this.props.note.contact ? "N/A" : this.props.note.contact.fullName}
            </NoteHeaderGrid>
            <NoteHeaderGrid item xs="12">
              {moment(this.props.note.updatedAt).format("M/D/YY")}
              @
              {moment(this.props.note.updatedAt).format("h:mm A")}
            </NoteHeaderGrid>
          </Grid>
        </Grid>
        <ButtonGrid item xs="6" textAlign="right">
          {!this.props.authentication.isGuest && this.props.note.isPrivate && (
            <>
              <UnselectedChip label="Public" component="a" clickable onClick={() => this.setIsPrivate(false)} />
              <SelectedChip label="Internal" />
            </>
          )}
          {!this.props.authentication.isGuest && !this.props.note.isPrivate && (
            <>
              <SelectedChip label="Public" />
              <UnselectedChip label="Internal" component="a" clickable onClick={() => this.setIsPrivate(true)} />
            </>
          )}
        </ButtonGrid>
        <NoteContentGrid xs="11">{this.props.note.note}</NoteContentGrid>
        <ButtonGrid xs="1">
          {(!this.props.authentication.isGuest || this.props.note.userId === this.props.authentication.user.id)
            && (<Delete classes={{ root: this.props.classes.icon }} onClick={this.props.onRemove} />
            )}
        </ButtonGrid>
      </NoteContainerGrid>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
};

const mapStateToProps = ({ authentication }) => ({ authentication });

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    {
      updateNote
    }
  )
)(NoteItem);
