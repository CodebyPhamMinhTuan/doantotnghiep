import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
          <h1>Xin chào,</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>
          <InputFormComponent style={{marginBottom: '10px'}} placeholder='abc@gmail.com'/>
          <div style={{position: 'relative'}}>
            <span 
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px',
            }}>
              {isShowPassword ? (
                <EyeFilled style={{cursor: 'pointer'}}/>
              ):(
                <EyeInvisibleFilled style={{cursor: 'pointer'}}/>
              )}
            </span>
            <InputFormComponent placeholder='password' type={isShowPassword ? 'text': 'password'}/>
          </div>
          <ButtonComponent
                bordered={false}
                size={40}
                styleButton={{
                  background: 'rgb(255,57,69)',
                  height: '40px',
                  width: '100%',
                  borderRadius: '4px',
                  border: 'none',
                  marginTop: '26px',
                  marginBottom: '10px',
                }}
                textButton={'Đăng nhập'}
                styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '600'}}/>
          <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
          <p>Chưa có tài khoản? <WrapperTextLight> Tạo tài khoản</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt='image-logo' height={203} width={203} />
          <h4>Mua sắm tại Shop Lỏ</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage