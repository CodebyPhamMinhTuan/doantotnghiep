import { Button } from 'antd'
import React from 'react'

// const ButtonComponent = ({size, bordered, backgroundColorButton, colorButton, SearchOutlined, textButton}) => {
//   console.log('textButton',textButton)
//   return (
//     <Button
//         size={size}
//         bordered={bordered}
//         style={{ backgroundColor: backgroundColorButton, borderRadius: "2px", border:'none', color: colorButton}}
//         icon={<SearchOutlined color={colorButton}/>}
//     >
//         <span style={{color: colorButton}}>{textButton}</span>
//   </Button>
//   )
// }

// export default ButtonComponent

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, disabled, ...rests }) => {
  return (
    <Button
      style={{
        ...styleButton,
        background: disabled ? '#ccc' : styleButton?.background
      }}
      size={size}
      {...rests}
    >
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  )
}

export default ButtonComponent