import React from 'react';
import Button from './Components/Atoms/Button/Index';
import User from './Statics/Images/Vector/User';

export default function ComponentTesting() {
  return (
    <div>
      <Button IconFront={<User />} children="Use email address" />
      <Button IconFront={<User />} children="Adam Ibrahim" />
    </div>
  );
}
