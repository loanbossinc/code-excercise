import React, { Fragment, Component } from "react";
import {PrimaryButton} from 'components/Global/Buttons'
import styled from 'styled-components';
import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
    Slide,
    Button,
  } from "@material-ui/core";
  import { styles } from "./SlidingSectionStyle";

const ConstainerDiv = styled.div`
    #border: 1px solid red;
`;
  
const Base = styled.div`
  border-radius: 5px;
  background-color: rgba(255,255,255,0);
  border: 1px solid #aaaaaa;
  z-index: -50;
  height: 100%
`;  


const TitleSection = styled.p`
  font-size: 16pt;
  color: #888888;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 0px;
  vertical-align: top;
  width: 80%;
  display: inline-block;
`;

const DescriptionSection = styled.p`
  display: inline-block;
  width: calc(80% - 15px);
  whitespace: wrap;
  margin-left: 15px;
  color: #444444
`;
const PrimaryButtonContainer = styled.div`
  display:inline-block;
  vertical-align: top;
  margin-top: 10px;
  min-height: 100%;
  float: right;
  text-align: center;
  width: 17%
`

const SlidingDiv = styled.div`
    border-radius: 5px;
    background-color: rgba(40,40,40,.85);
    border: 1px solid #aaaaaa
    height: 100%
    z-index: 5;
    white-space: nowrap;
`
const StyledSlide = styled(Slide)`
  &&&&{
      margin-bottom: -130px;
      height: 130px;
      z-index: 5;
  }
`;

const StyledButton = styled(Button)`
  &&{
      border: 1px solid #ffffff;
      color: #ffffff
      display: inline-block;
      margin-top: 40px;
      :hover {
          
      }
  }
`;


export class ChangeDealStatusModal extends Component {

    state = {
        isHidden: true,
    }

    unExpand = () => {
        this.setState({isHidden:true});
    }

    expand = () => {
      this.setState({isHidden: false});
    }

    beginButtonAction = () => {
      if(this.props.noSlide){
        this.props.onConfirm();
      }else{
        this.expand();
      }
    }

    render() {
        const {title, description, primaryButtonText, icon, onConfirm, containerStyle, confirmText, cancelText, noSlide} = this.props;
        const isHidden = this.state.isHidden;
        return(
          <ConstainerDiv style={{...containerStyle, height: "125px"} || {height: "125px"}}>
            {!isHidden &&
               <StyledSlide direction="left" style={{zIndex:5}} in={!isHidden}>
                <SlidingDiv>
                  <div style={{width:"50%", display:"inline-block", textAlign:"right"}}>
                  <StyledButton style={{marginRight:"20px"}} onClick={()=>{
                      if(onConfirm) onConfirm();
                      this.unExpand();
                      }}>
                      {confirmText || "CONFIRM"}
                    </StyledButton>
                  </div>                    
                  <div style={{width: "45%", display:"inline-block", textAlign:"left"}}>
                    <StyledButton style={{marginLeft:"20px"}} onClick = {this.unExpand}>
                        {cancelText || "CANCEL"}
                    </StyledButton>
                  </div>
                </SlidingDiv>
              </StyledSlide>
            }
              <Base>
                <TitleSection>
                    {icon} {title}
                </TitleSection>
                <DescriptionSection >
                    {description}
                </DescriptionSection>
                <PrimaryButtonContainer>
                    {isHidden && 
                    <PrimaryButton onClick={this.beginButtonAction}>
                        {primaryButtonText || "BEGIN"}
                    </PrimaryButton>
                    }
                </PrimaryButtonContainer>
              </Base>

             
          </ConstainerDiv>
        )
    }
    
    }
    
    
    function mapStateToProps({ }) {
        return {
            
        };
      }
      
      export default compose(
        withStyles(styles),
        connect(
          mapStateToProps,
          {
            
          }
        )
      )(ChangeDealStatusModal);