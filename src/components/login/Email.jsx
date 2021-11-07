import React from 'react';
import { LoginInput } from './LoginStyles';

const Email = () => {
  return (
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
  );
};

export default Email;
