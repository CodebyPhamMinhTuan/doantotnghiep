import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.webp'
import imageProductSmall from '../../assets/images/imagesmall.webp'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct, WrapperInputNumber } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'


const ProductDetailsComponent = () => {
  const onChange = () => { }
  return (
    <Row style={{padding:'16px', background: '#fff', borderRadius: '4px' }}>
      <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '8px'}}>
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
      <Col span={14} style={{paddingLeft: '10px'}}>
          <WrapperStyleNameProduct>Alo 1 2 3 4 5 6 7 8 9 10 J Q K</WrapperStyleNameProduct>
          <div>
            <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }}/>
            <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }}/>
            <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }}/>
            <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }}/>
            <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }}/>
            <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>
                200.000đ
            </WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
              <span>Giao đến </span>
              <span className='address'>Tân Thịnh, Tân Thành, Ninh Bình</span> - 
              <span className='change-address'> Đổi địa chỉ</span>
          </WrapperAddressProduct>
          <div style={{margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
            <div style={{marginBottom: '10px'}}>Số lượng</div>
            <WrapperQualityProduct>
                <button style={{ border: 'none', background:'transparent'}}>
                  <MinusOutlined style={{color:'#000', fontSize: '20px'}}/>
                </button>
                <WrapperInputNumber min={1} max={10} defaultValue={3} onChange={onChange} size='small'/>
                <button style={{ border: 'none', background:'transparent'}}>
                  <PlusOutlined style={{color:'#000', fontSize: '20px'}}/>
                </button>
            </WrapperQualityProduct>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <ButtonComponent
              bordered={false}
              size={40}
              styleButton={{
                background: 'rgb(255,57,69)',
                height: '48px',
                width: '220px',
                borderRadius: '4px',
                border: 'none',
              }}
              textButton={'Chọn Mua'}
              styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '600'}}/>
            <ButtonComponent
              size={40}
              styleButton={{
                background: '#fff',
                height: '48px',
                width: '220px',
                borderRadius: '4px',
                border: '1px solid rgb(13, 92, 182)',
              }}
              textButton={'Mua trả góp lãi suất 0%'}
              styleTextButton={{color: 'rgb(13, 92, 182)', fontSize: '15px'}}/>
          </div>
      </Col>
    </Row>
  )
}

export default ProductDetailsComponent