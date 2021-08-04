import React from 'react'
import Flex from '../Global/PageOrganization/Flex'
import NumberFormat from "react-number-format";

export const EditableField = (props) => {
  const { label, dense, extraStyles, phone, ...restProps } = props;

  const disabledStyle = {
    background: 'transparent'
  }

  const activeStyle = {
    background: 'white',
    border: '1px solid rgba(100,100,100,0.2)',
  }

  return (
    <Flex style={{ alignItems: 'center', padding: '5px 0px', ...(extraStyles ? extraStyles : {}) }}>
      <span style={{ flex: dense ? 0.5 : 1, color: '#808080', fontSize: 13, whiteSpace: 'nowrap', marginRight: 10 }}>{label}</span> {phone ?
        <NumberFormat
          format="(###) ###-####" mask="_"
          style={{ fontSize: 13, borderRadius: 5, boxSizing: 'border-box', padding: '12px 10px', flex: 1.7, ...(props.disabled ? disabledStyle : activeStyle) }}
          {...restProps}
        /> : <input style={{ fontSize: 13, borderRadius: 5, boxSizing: 'border-box', padding: '12px 10px', flex: 1.7, ...(props.disabled ? disabledStyle : activeStyle) }}  {...restProps} />}
    </Flex>
  )
}