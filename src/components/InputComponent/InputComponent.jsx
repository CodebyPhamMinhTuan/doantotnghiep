import { Input } from 'antd'
import React from 'react'

const InputComponent = ({size, placeholder, bordered, backgroundColorInput} ) => {
  return (
    <Input
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput, borderRadius: "2px", border: "none" }}
    />
  )
}

export default InputComponent