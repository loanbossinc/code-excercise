import React from 'react';
import styled from 'styled-components';

export const PagePadding = styled.div`
  padding: ${props => props.padding ? props.padding : '15px 10px'};
`
const PageWrapper = ({padding, children})=> {
  return (
    <PagePadding padding={padding}>
      {children}
    </PagePadding>
  )
}
export default PageWrapper;