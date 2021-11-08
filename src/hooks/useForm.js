import { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  };

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage(validateForm(form));
    handleChange(e);
  };


  return {
    form,
    errorMessage,
    handleChange,
    submitForm
  }
}
