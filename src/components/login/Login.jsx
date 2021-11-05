import React from 'react';
import { LoginMain, LogoImg, Title } from './LoginStyles';

const Login = () => {
  return (
    <LoginMain>
      <Title>Login</Title>
      <LogoImg src='https://i.imgur.com/zxhhEk9.png' alt='Logo de Rappi' />
      <form>
        <input type='email' name='email' id='email' placeholder='Email' />
        <button type='submit'>Continuar</button>
      </form>
    </LoginMain>
  );
};

export default Login;
