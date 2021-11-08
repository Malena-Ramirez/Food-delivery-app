import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useSelector } from 'react-redux';

const Otp = () => {
  const { user } = useSelector((state) => state.user);

  const [otpCheck, setotpCheck] = useState(false);

  const [code, setCode] = useState('');

  const handleChange = (code) => {
    setCode(code);
    if (code.length === 4) {
      setotpCheck(code === user.otp);
    }
  };

  return (
    <>
      <OtpInput
        value={code}
        onChange={handleChange}
        numInputs={4}
        separator={<span></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          border: '1px solid transparent',
          borderRadius: '8px',
          width: '54px',
          height: '54px',
          fontSize: '1.2rem',
          color: '#626262',
        }}
        focusStyle={{
          border: '1px solid #2d2d2e',
          outline: 'none',
        }}
        containerStyle={{
          justifyContent: 'space-between',
        }}
        hasErrored={!otpCheck && code.length === 4}
        errorStyle={{
          color: 'red',
          border: '2px solid red',
        }}
      />
      {!otpCheck && code.length === 4 && (
        <p className='alert alert-danger mb-0 py-1 mt-1' role='alert'>
          <i className='bi bi-exclamation-circle-fill'></i> Código incorrecto
        </p>
      )}
    </>
  );
};

export default Otp;
