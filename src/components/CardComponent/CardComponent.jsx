import { WrapperCardStyle } from './style'
import React from 'react'
import { StyleNameProduct, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png'

const CardComponent = () => {
  return (
        <WrapperCardStyle
        hoverable
        bodyStyle={{ padding:'10px'}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <img src={logo} alt='logo' 
        style={{ width: '68px', height: '14px', position: 'absolute', top: '-1px', left: '-1px',
                 borderTopLeftRadius: '7px'}} />
      <StyleNameProduct>Iphone 15 utra pro max</StyleNameProduct>
      <WrapperReportText>
          <span style={{marginRight: '4px'}}>
            <span style={{marginRight: '4px'}}>4.96</span>
            <StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }}/>
          </span>
          <span>| Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000đ
        <WrapperDiscountText>
          <span> -5% </span>
        </WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent