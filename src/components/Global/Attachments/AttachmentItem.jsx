import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Chip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { GetApp, Delete } from "@material-ui/icons";
import { updateFile } from "../../../store/state/file";

const StyledDiv = styled.div`
  padding: 8px;
  color: rgb(153, 153, 153);
  max-width: 400px;
  word-break: break-all;
`;

const styles = () => ({
  icon: {
    marginTop: "5px",
    color: "#2196f3",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      color: "#9e9e9e"
    }
  }
});

const Spacer = styled.div`
  flex-grow: 1;
`;

const BaseChip = styled(Chip)`
  && {
    margin-top: 5px;
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
    margin-top: 5px;
    color: #49a1f4;
    border-color: #49a1f4;
    background-color: #ecf5fe;
  }
`;

const UnselectedChip = styled(BaseChip)`
  && {
    margin-top: 5px;
    color: #7f7f7f;
    border-color: #7f7f7f;
    background-color: #ffffff;
  }
`;

const FileContainerGrid = styled(Grid)`
  padding-top: 15px;
  padding-bottom: 15px;
`;

class AttachmentItem extends Component {
  setIsPrivate(isPrivate) {
    this.props.file.isPrivate = isPrivate;
    this.props.updateFile(this.props.file);
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <FileContainerGrid>
          <Grid container direction="row" alignItems="top" spacing={16} style={{ backgroundColor: this.props.file.isPrivate || this.props.authentication.isGuest ? "" : "#fad4ce", height:"70px" }}>
            <Grid item xs={6}>
              <StyledDiv name={`attachmentNamed${this.props.file.name}`}>{this.props.file.name}</StyledDiv>
            </Grid>
            {!this.props.authentication.isGuest && this.props.file.isPrivate && (
              <>
                <Grid item>
                  <UnselectedChip label="Public" component="a" clickable onClick={() => this.setIsPrivate(false)} />
                  <SelectedChip label="Internal" />
                </Grid>
              </>
            )}
            {!this.props.authentication.isGuest && !this.props.file.isPrivate && (
              <>
                <Grid item>
                  <SelectedChip label="Public" />
                  <UnselectedChip label="Internal" component="a" clickable onClick={() => this.setIsPrivate(true)} />
                </Grid>
              </>
            )}
            <Grid item>
              <GetApp name={`downloadAttachment${this.props.file.name}`} classes={{ root: this.props.classes.icon }} onClick={this.props.onDownload} />
            </Grid>
            <Grid item>
              {(!this.props.authentication.isGuest || this.props.file.userId === this.props.authentication.user.id) && (
                <Delete name={`deleteAttachment${this.props.file.name}`} classes={{ root: this.props.classes.icon }} onClick={this.props.onRemove} />
              )}
            </Grid>
          </Grid>
        </FileContainerGrid>
      </>
    );
  }
}

AttachmentItem.propTypes = {
  file: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onDownload: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

const mapStateToProps = ({ authentication }) => ({ authentication });

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    {
      updateFile
    }
  )
)(AttachmentItem);
