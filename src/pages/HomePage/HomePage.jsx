import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import  slider1  from '../../assets/images/slider1.webp'
import  slider2  from '../../assets/images/slider2.webp'
import  slider3  from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
// import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const HomePage = () => {
    const arr = ['TV', 'Tu lanh', 'Laptop']
    return (
        <>
            <div style={{ padding: '0 120px'}}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item}/>
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div id="container" style ={{backgroundColor: '#efefef', padding: '0 120px', height: '1000px'}}>
                <SliderComponent arrImages={[slider1, slider2, slider3]} />
                <WrapperProducts>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProducts>
                <div style={{ width: '100%', display:'flex', justifyContent: 'center', marginTop: '15px' }}>
                    <WrapperButtonMore textButton="Xem thêm" type= "outline" styleButton={{
                        border: '1px solid rgba( 11, 116, 229)', color:'rgb(11, 116, 229)',
                        width: '240px', height: '38px', borderRadius: '4px'
                    }} styleTextButton={{ fontWeight: '500' }}/>
                </div>
                {/* <NavbarComponent/> */}
            </div>
        </>
    )
}

export default HomePage