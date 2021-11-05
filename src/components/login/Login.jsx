import React from 'react';
import {
  LoginMain,
  LogoImg,
  Title,
  LoginContainer,
  LoginInput,
} from './LoginStyles';

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
        <form className='form-floating'>
          <LoginInput
            type='email'
            className='form-control mb-4'
            id='floatingInput'
            placeholder='Email'
          />
          <label htmlFor='floatingInput'>Email</label>
          <button type='submit' className='btn btn-dark w-100 py-2'>
            Continuar
          </button>
        </form>
      </LoginContainer>
    </LoginMain>
  );
};

export default Login;
