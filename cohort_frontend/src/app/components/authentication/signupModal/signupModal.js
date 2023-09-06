import React from 'react'
import RootLayout from '../../../layout'
import '../globals.css'
import Image from 'next/image'
import Input from '../InputFields/Input'
import AuthButton from '../Buttons/AuthButton'

export default function Signup() {
  return (
    <RootLayout>
    <div className='min-h-screen'>
      <div className='  border-0 md:border-b-2'>
        <div className='absolute top-3 left-9 flex-row hidden md:flex lg:flex xl:flex sm:flex justify-center items-center'>
          <Image
            src='/cohort 10.svg'
            alt='logo'
            width={34}
            height={16}
            className='pt-5 mb-4 md:w-[6vh]'
          />
         <p className='font-bold text-[1.5vh] '>COHORT</p>
        </div>
        <div className='mt-[7vh] sm:mt-[20vh] flex flex-col justify-center items-center'> 
          <div className='w-[70%] md:w-[50%]'>
          <p className='font-bold text-[3vh] mb-[5vh]'>{} meexample@gmail.com</p>
              <Input
              customClass='w-[50%] h-[5.5vh] bg-[#c5fbbd] focus:bg-[white] mb-[3vh]'
              labelText='Full name'
              labelFor='full name'
              placeholder='Full-Name'
            />

            <Input
              customClass='w-[50%] h-[5.5vh] bg-[#c5fbbd] focus:bg-[white] mb-[3vh]'
              labelText='Username'
              labelFor='Username'
              placeholder='Username'
            />

            <Input
              customClass='w-[50%] h-[5.5vh] bg-[#c5fbbd] focus:bg-[white] mb-[3vh]'
              labelText='Phone number'
              labelFor='Phone number'
              placeholder='Phone number'
            />

            <Input
              customClass='w-[50%] h-[5.5vh] bg-[#c5fbbd] focus:bg-[white] mb-[3vh]'
              labelText='Nationality'
              labelFor='Nationality'
              placeholder='Nationality'
            />

            <Input
              customClass='w-[50%] h-[5.5vh] bg-[#c5fbbd] transition focus:bg-[white] mb-[3vh]'
              labelText='Cohort'
              labelFor='Cohort'
              placeholder='Cohort'
            />
            <AuthButton
            text='Continue'
            customClass='w-[100%] sm:h-[5.5vh] sm:text-[2vh] sm:font-bold'/>
          </div>
        <div className=' text-[2vh] text-left sm:text-center sm:text-[2.5vh] sm:w-[70%] md:text-[2.2vh] md:w-[50%] m-[6vh] mt-0'>
          <p>By continuing you agree to Cohort's <span className='font-bold'>Terms of service</span> and confirm that you have read cohort's <span className='font-bold'>Privacy Policy</span></p>
        </div>
      </div>
      <div className='block md:hidden'>
        <Image
        alt='stripes'
          src='/cohort 9.svg'
          width={100}
          height={80}
          className='absolute bottom-0 left-0'
        />
      </div>
    </div>
    </div>
  </RootLayout>
  )
}