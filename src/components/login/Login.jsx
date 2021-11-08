import React from 'react';
import Email from './Email';
import { LoginMain, LogoImg, Title, LoginContainer } from './LoginStyles';

const Login = () => {
  return (
    <LoginMain>
      <LoginContainer>
        <Title>Login</Title>
        <LogoImg
          src='https://i.imgur.com/zxhhEk9.png'
          alt='Logo de Rappi'
          className='mb-5'
        />
        <Email />
      </LoginContainer>
    </LoginMain>
  );
};

export default Login;
