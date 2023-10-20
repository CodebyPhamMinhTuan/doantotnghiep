import React from 'react'
import { WrapperLableText, WrapperTextValue, WrapperContent, WrapperTextPrice } from './style'
// import { type } from '@testing-library/user-event/dist/type'
import { Checkbox, Rate } from 'antd';


const NavbarComponent = () => {
  const onChange = () => { }
  const renderContent = (type, options) => {
      switch(type) {
        case 'text':
          return options.map((option) => {
            return <WrapperTextValue>{option}</WrapperTextValue>
          })
        case 'checkbox':
          return(
                <Checkbox.Group style={{ width: '100%', display:'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                    {options.map((option) =>{
                      return (
                          <Checkbox value={option.value}>{option.label}</Checkbox>            

                      )
                    })}
                </Checkbox.Group>
                )
        case 'star':
          return options.map((option) =>{
            return(
              <div style={{display:'flex', gap: '10px'}}>
                <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                <span>{`từ ${option} sao`}</span>
              </div>
            )
          })
        case 'price':
          return options.map((option) =>{
            return(
              <WrapperTextPrice>
                {option}
              </WrapperTextPrice>
            )
          })
        default:
          return {}
      }
  }

  return (
    <div>
        <WrapperLableText>Lable</WrapperLableText>
        <WrapperContent>
            {renderContent('text', ['Tu Lanh', 'TV', 'May Giat'])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('checkbox', [
              {value: 'a', label:'A'},
              {value: 'b', label:'B'},
            ])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('star', [3, 4, 5])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('price', ['dưới 40.000', 'trên 50.000'])}
        </WrapperContent>
    </div>
  )
}

export default NavbarComponent