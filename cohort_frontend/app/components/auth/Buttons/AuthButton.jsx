import React from 'react';

const AuthButton = ({ text, iconClass, onClick, customClass }) => {
  return (
    <div>
      <button
        type="button"
        className={`text-gray-900 pt-[12px] pb-[12px] bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm inline-flex items-center justify-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mb-5 py-4 px-6 ${customClass}`}
        onClick={onClick}
        // style={{ width: '400px', paddingTop: '12px', paddingBottom: '12px' }}
      >
        {iconClass && (
          <i className={`fa ${iconClass} mr-2`} aria-hidden="true" />
        )}

        {text}
      </button>
    </div>
  );
};

export default AuthButton;
