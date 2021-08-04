import styled from 'styled-components';

export const StyledEditButton = styled.button`
opacity: ${props => props.disabled ? '0.1' : '1.0'};
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
background: none;
border: 2px solid #279BD7;
border-radius: 4px;
box-sizing: border-box;
height: 30px;
padding: 0px 15px;
color: #279BD7;
transition: 100ms;
&:hover {
    background: ${props => props.disabled ? 'none' : 'rgba(64, 186, 247, 0.1)'};
}
`

export const StyledCancelButton = styled.button`
margin-right: 10px;
background: none;
cursor: pointer;
border: 2px solid rgb(191, 191, 191);
border-radius: 4px;
box-sizing: border-box;
height: 30px;
padding: 0px 15px;
color: rgb(191, 191, 191);
transition: 100ms;
&:hover {
    background: rgba(191, 191, 191, 0.1);
}
`