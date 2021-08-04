import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  padding: 15px;
  box-sizing: border-box;
  border-radius: 6px;
  box-shadow: 0px 5px 30px 1px rgba(100,100,100,0.1);
`

export const InputCard = styled.div`
  padding: 15px;
  box-sizing: border-box;
  border-radius: 6px;
  background: #fcfffc;
`

export const InputCardHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(50,50,50,0.1);
  margin-bottom: 15px;
`

export default Card;