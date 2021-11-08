import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const Otp = () => {
  const [code, setCode] = useState('');

  const handleChange = (code) => setCode(code);

  return (
    <div>
      <OtpInput
        value={code}
        onChange={handleChange}
        numInputs={4}
        separator={<span style={{ width: '8px' }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          border: '1px solid transparent',
          borderRadius: '8px',
          width: '54px',
          height: '54px',
          fontSize: '1.2rem',
          color: '#626262',
          fontWeight: '400',
          caretColor: 'blue',
        }}
        focusStyle={{
          border: '1px solid #CFD3DB',
          outline: 'none',
        }}
        hasErrored={false}
        errorStyle={{ color: 'red' }}
      />
    </div>
  );
};

export default Otp;
