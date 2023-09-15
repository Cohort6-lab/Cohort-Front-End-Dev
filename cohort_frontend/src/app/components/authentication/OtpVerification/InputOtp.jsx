'use client';
import React, { useRef, useState } from 'react';


const OtpInput = ({email}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = async (event, index) => {
    const { value } = event.target;

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className='bg-inherit flex items-center justify-center '>
      <div className='my-4'>
        <h2 className='text-center font-extrabold text-2xl sm:text-2xl lg:text-3xl tracking-tight'>Verify your account</h2>
      <p className='text-center text-xm'>An Account activation code has been sent to  <br /><strong className='text-green-700'>{email}</strong></p>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          onChange={(event) => handleChange(event, index)}
          maxLength={1}
          className="border w-12 h-12 mx-2 text-center bg-slate-650 rounded-md text-green-600 mt-16 mb-2"
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}

      <p className='text-center text-base text-white mt-12'>Didn't get the code? <a className="hover:text-sky-500 dark:hover:text-sky-600  text-green-600 underline cursor-pointer"> Send it again </a>
      </p>
    </div>
    </div>
  );
};

export default OtpInput;
