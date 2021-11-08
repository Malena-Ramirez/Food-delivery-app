import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { LoginInput } from './LoginStyles';

const initialForm = {
  email: '',
};

const Email = ({ setShowOtp }) => {
  const [submitStatus, setSubmitStatus] = useState(false);

  const validationsForm = (form) => {
    let error = '';
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.email.trim()) {
      error = 'El campo email es requerido.';
    } else if (!regexEmail.test(form.email.trim())) {
      error = 'El campo email es incorrecto';
    } else {
      setSubmitStatus(true);
    }

    return error;
  };

  const { form, errorMessage, handleChange, submitForm } = useForm(
    initialForm,
    validationsForm
  );

  const handleSubmit = (e) => {
    submitForm(e);
  };

  useEffect(() => {
    setShowOtp(submitStatus);
  }, [setShowOtp, submitStatus]);

  return (
    <form className='form-floating' onSubmit={handleSubmit}>
      <LoginInput
        type='email'
        name='email'
        className='form-control'
        id='floatingInput'
        placeholder='Email'
        onChange={handleChange}
        value={form.email}
      />
      <label htmlFor='floatingInput'>Email</label>
      {errorMessage && (
        <p className='alert alert-danger mb-0 py-1' role='alert'>
          <i className='bi bi-exclamation-circle-fill'></i> {errorMessage}
        </p>
      )}
      <button
        type='submit'
        className='btn btn-dark w-100 py-2 mt-4'
        disabled={!form.email}
      >
        Continuar
      </button>
    </form>
  );
};

export default Email;
