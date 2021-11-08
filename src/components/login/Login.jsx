import React, { useState } from 'react';
import Email from './Email';
import { LoginMain, LogoImg, Title, LoginContainer } from './LoginStyles';
import Otp from './Otp';

const Login = () => {
  const [showOtp, setShowOtp] = useState(false);
  return (
    <LoginMain>
      <LoginContainer>
        <Title>Login</Title>
        <LogoImg
          src='https://i.imgur.com/zxhhEk9.png'
          alt='Logo de Rappi'
          className='mb-5'
        />
        {showOtp ? <Otp /> : <Email setShowOtp={setShowOtp} />}
      </LoginContainer>
    </LoginMain>
  );
};

export default Login;
