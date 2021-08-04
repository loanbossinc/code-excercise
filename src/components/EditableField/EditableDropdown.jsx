import React from 'react'
import Flex from '../Global/PageOrganization/Flex'

// My favorite dropdown lib... Super clean UI
import Select from 'react-select'

export const EditableDropdown = (props) => {
  const { label, options, value, onChange, dense, extraStyles, ...restProps } = props;

  const styles = {
    container: styles => ({ ...styles, flex: 1.7 }),
    control: styles => ({ ...styles, fontSize: 13, border: '1px solid rgba(100,100,100,0.2)' })
  }

  return (
    <Flex style={{ alignItems: 'center', padding: '5px 0px', ...(extraStyles ? extraStyles : {}) }}>
      <span style={{ flex: dense ? 0.5 : 1, color: '#808080', fontSize: 13, whiteSpace: 'nowrap', marginRight: 0 }}>{label}</span>
      <Select styles={styles} options={options} onChange={onChange} value={value} />
    </Flex>
  )
}
