import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.webp'
import imageProductSmall from '../../assets/images/imagesmall.webp'
import { WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct } from './style'

const ProductDetailsComponent = () => {
  return (
    <Row style={{padding:'16px', background: '#fff' }}>
      <Col span={10}>
        <Image src={imageProduct} alt='image product' preview={false}/>
        <Row style={{paddingTop:'10px', justifyContent: 'space-between' }}>
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false}/>
            </WrapperStyleColImage>

            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false}/>
            </WrapperStyleColImage>
            
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false}/>
            </WrapperStyleColImage>

            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false}/>
            </WrapperStyleColImage>

            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false}/>
            </WrapperStyleColImage>

            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false}/>
            </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14}>
          <WrapperStyleNameProduct>Alo 1 2 3 4 5 6 7 8 9 10 J Q K</WrapperStyleNameProduct>
          <div>
            
          </div>
      </Col>
    </Row>
  )
}

export default ProductDetailsComponent