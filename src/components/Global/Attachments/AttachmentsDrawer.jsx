import React, {Fragment} from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from 'styled-components';
import 
{ Grid,
  Drawer,
  Paper,
  Fade,
  Divider,
  LinearProgress,
  Collapse,
  ClickAwayListener
 } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FileUpload from 'components/Files/Upload';
import CloseButton from 'components/Global/Buttons/CloseButton';
import AttachmentItem from './AttachmentItem';
import { downloadFile } from "utils/api";
const Spacer = styled.div`
 width:300px;
`
const PaddedWrapper = styled.div`
 padding:16px;
 margin-top:40px;
 margin-left:16px;
 max-width:800px; 
`
const Title = styled.div`
 font-size: 20px;
`
const styles = theme => ({
  drawerPaper: {
    width:"80%",
    maxWidth:"600px"
  },
})

const FootnoteDiv = styled.div`
  color: rgba(127, 127, 127, 0.866666666666667);
  font-size: 16px;
`;

class AttachmentsDrawer extends React.Component {
  handleDownload = fileId => downloadFile(`files/${fileId}`);  

  handleUpload = files => {            
    this.props.addFile(files[0]);    
  };
  isLast = (index, fileCount) => {
    return index === fileCount -1
  }
  createAttachment = (file, index, fileCount) => {
    const {handleRemove} = this.props;
    if(this.isLast(index,fileCount))
      return (
        <AttachmentItem 
          key={file.id}
          file={file} 
          onRemove={() => handleRemove(file.id)}
          onDownload={() => this.handleDownload(file.id)}/>
      )
    else 
      return (
        <Fragment key={file.id}>
          <AttachmentItem             
            file={file} 
            onRemove={() => handleRemove(file.id)}
            onDownload={() => this.handleDownload(file.id)}/>
          <Divider/>
        </Fragment>
      )
  }
  render(){    
    const {classes, files, isOpen, closeDrawer, isLoading,internalID} = this.props;    
    return (
      <Fragment>
        <Drawer 
          onClose={closeDrawer}
          name={`attachmentsDrawer${internalID}`} 
          anchor="right" 
          open={isOpen}
          classes={{paper: classes.drawerPaper}}
          >
          <PaddedWrapper>
            <Grid container direction="row" alignItems="center" spacing={16}>
              <Grid item>
                <Title>Attachments</Title>
              </Grid>
              <Grid item>
                <Spacer/>
              </Grid>
              <Grid item>
                <CloseButton name="attachmentsDrawerCloseButton" onClick={() => closeDrawer()}/>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
              <Grid item>
                <Collapse in={!isLoading} timeout={300}>
                  <Paper elevation={1}>
                      <FileUpload onDrop={this.handleUpload} />
                  </Paper>
                </Collapse>
                <Fade in={isLoading} timeout={300}>
                  <Paper elevation={1}>
                    <LinearProgress />
                  </Paper>
                </Fade>
              </Grid>
            </Grid>
            <Grid container direction="column">
              {files.map((x,i) => this.createAttachment(x,i,files.length))}
            </Grid>
            {!this.props.authentication.isGuest &&
              <FootnoteDiv>
                <p>
                  * Internal attachments can only be seen by users within your company
                  <br />
                  ** Public attachments can by users within your company and guests.
                </p>
              </FootnoteDiv>
            }
          </PaddedWrapper>
        </Drawer>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication });

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(AttachmentsDrawer);
