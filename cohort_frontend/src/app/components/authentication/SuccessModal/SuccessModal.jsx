import React from 'react';

const SuccessModal = ({ email }) => {
  return (
    <div className="overlay fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-40 flex items-center justify-center">
      <div className="fixed top-56 left-1/2 -translate-x-1/2 bg-white px-8 md:px-32 py-16 md:py-28 rounded-2xl text-center shadow-xl">
        <p className="font-semibold text-md md:text-xl mb-2 md:mb-3">
          {email}
        </p>
        <p className="text-green-800 text-xs md:text-sm mt-6">
          <span>Email Verification successful</span>
        </p>
      </div>
    </div>
  );
};

export default SuccessModal;