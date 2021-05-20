import React, { Fragment } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  Grid,
  Drawer,
  Divider,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CloseButton from "components/Global/Buttons/CloseButton";
import SecondaryButton from "components/Global/Buttons/SecondaryButton";
import NoteItem from "./NoteItem";
import { Done } from "@material-ui/icons";

const Spacer = styled.div`
  width: 300px;
`;

const PaddedWrapper = styled.div`
  padding: 16px;
  margin-left:16px;
  margin-top: 40px;
  max-width:800px;
`;

const NoteHeader = styled.div`
  display:flex;
  flex-flow:row;
  align-items:center;
  justify-content:space-between;
  margin-bottom:16px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const CenteredGridItem = styled(Grid)`
text-align:center;
`;

const NoteInputGrid = styled(Grid)`
  margin-bottom:50px;
`;

const StyledSaveButton = styled(SecondaryButton)`
  &&{
    width:100%;
    height:100%;
  }
`;

const styles = () => ({
  drawerPaper: {
    width:"80%",
    maxWidth:"800px",
    "white-space": "pre-wrap"
  }
});

const SaveButton = props => {
  return (
    <StyledSaveButton onClick={props.onClick} id="saveNoteButton">
      <Done />
      SAVE
    </StyledSaveButton>
  );
};

const FootnoteDiv = styled.div`
  color: rgba(127, 127, 127, 0.866666666666667);
  font-size: 16px;
`;

class NotesDrawer extends React.Component {
  state = {
    isLoading: false,
    newNote: ""
  };

  isLast = (index, noteCount) => {
    return index === noteCount - 1;
  };

  handleChange = (name, data) => {
    this.setState({
      newNote: data.value
    });
  };

  saveNote = () => {
    this.props.addNote(this.state.newNote);
    this.setState({ newNote: "" });
  };

  createNote = (note, index, noteCount) => {
    const { handleRemove } = this.props;
    if (this.isLast(index, noteCount))
      return (
        <NoteItem
          key={note.id}
          note={note}
          onRemove={() => handleRemove(note.id)}
        />
      );
    else
      return (
        <Fragment key={note.id}>
          <NoteItem note={note} onRemove={() => handleRemove(note.id)} />
          <Divider />
        </Fragment>
      );
  };
  render() {
    const { classes, notes, isOpen, closeDrawer } = this.props;
    return (
      <Fragment>
          <Drawer
            onClose={closeDrawer}
            anchor="right"
            open={isOpen}
            classes={{ paper: classes.drawerPaper }}
          >
            <PaddedWrapper>
              <NoteHeader>
                  <Title>Notes</Title>                           
                  <Spacer />                                
                  <CloseButton onClick={() => closeDrawer()} />                
              </NoteHeader>
              <NoteInputGrid container direction="row" justify="flex-end">
                <Grid item xs={10}>
                  <TextField
                    id="newNoteField"
                    multiline
                    fullWidth
                    value={this.state.newNote}
                    multiline={true}
                    label="New Note"
                    onChange={event =>
                      this.handleChange("newNote", event.target)
                    }
                  />
                </Grid>
                <CenteredGridItem item xs={2}>
                  <SaveButton onClick={this.saveNote} />
                </CenteredGridItem>                
              </NoteInputGrid>
              
              <Grid container direction="column" id="notesList">
                {notes.map((x, i) => this.createNote(x, i, notes.length))}
              </Grid>
              {!this.props.authentication.isGuest &&
                <FootnoteDiv>
                  <p>
                    * Internal/Private notes can only be seen by users within your company
                    <br />
                    ** Public notes can be seen by users within your company and guests.
                  </p>
                </FootnoteDiv>
              }
            </PaddedWrapper>
          </Drawer>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication });

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(NotesDrawer);
