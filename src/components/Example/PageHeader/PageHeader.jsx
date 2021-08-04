import React from 'react'
import Flex from "components/Global/PageOrganization/Flex";

export const PageHeader = (props) => {
  return (
    <Flex style={{
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      background: 'linear-gradient(#269AD6, #41b5f0)',
      minHeight: 200,
      padding: '0px 50px'
    }}>
      <h1 style={{ color: 'white' }}>{props.children}</h1>
    </Flex>
  )
}
