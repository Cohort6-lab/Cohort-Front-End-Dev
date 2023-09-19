import React from 'react';
import RootLayout from '../../../layout';
import '../globals.css';
import Image from 'next/image';
import Input from '../InputFields/Input';
import AuthButton from '../Buttons/AuthButton';

export default function Signup() {
  const description =
    'Create a profile, follow other accounts, make your own videos, and more';

  return (
    <RootLayout>
      <div className="min-h-screen">
        <div className="  border-0 md:border-b-2">
          <div className="absolute top-3 left-9 flex-row hidden md:flex lg:flex xl:flex sm:flex justify-center items-center">
            <Image
              src="/cohort 10.svg"
              alt="logo"
              width={34}
              height={16}
              className="pt-5 mb-4 md:w-[6vh]"
            />
            <p className="font-bold text-[1.5vh] ">COHORT</p>
          </div>
          <div className="mt-[7vh] sm:mt-[20vh] flex flex-col justify-center items-center">
            <div className="w-[70%] md:w-[50%]">
              <div className="font-bold text-3vh mb-5vh">
                {description}Create a profile, follow other accounts, make your
                own videos, and more
              </div>
              <Input
                customClass="w-50% h-5.5vh bg-[#c5fbbd] focus:bg-white mb-3vh"
                labelText="Email"
                labelFor="Email"
                placeholder="Enter your email address"
                style={{
                  border: '1px solid #000',
                }}
              />
              <AuthButton
                text="Continue"
                customClass="w-[100%] sm:h-[5.5vh] sm:text-[2vh] sm:font-bold"
              />
            </div>
          </div>
          <div className="block md:hidden">
            <Image
              alt="stripes"
              src="/cohort 9.svg"
              width={100}
              height={80}
              className="absolute bottom-0 left-0"
            />
          </div>
          <div className="footer text-[2vh] text-left sm:text-center sm:text-[2.5vh] sm:w-[70%] md:text-[2.2vh] md:w-[50%] m-[6vh] mt-0">
            Already have an account?{' '}
            <a href="#" className="font-bold text-green-600">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
