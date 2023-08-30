import Image from 'next/image';
import RootLayout from '../../../layout';
import './globals.css';

export default function AuthenticationPage6() {
  return (
    <RootLayout>
      <main className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="w-full px-4 md:px-8 py-8 md:py-12">
          <div className="flex">
            <Image
              src="/cohort 10.svg"
              alt="Logo"
              width={31}
              height={29}
              className="mb-4 md:mb-8"
            />
            <p className="font-extrabold">COHORT</p>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-2 md:mb-4">
            Verify your account
          </h1>
          <p className="text-center mb-4 md:mb-6 max-w-md mx-auto font-medium">
            Account activation has been sent to the e-mail address you provided
          </p>
        </div>

        <div className="mt-auto w-full px-4 md:px-8 py-2 md:py-4 border-t border-gray-500 text-center">
          <p className="mb-1 md:mb-2 font-semibold text-md md:text-xl">
            Already have an account?{' '}
            <a href="#" className="text-green-700 font-bold">
              Sign in
            </a>
          </p>
        </div>
        <div className="overlay fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-40 flex items-center justify-center">
          <div className="fixed top-56 left-1/2 -translate-x-1/2 bg-white px-8 md:px-32 py-16 md:py-28 rounded-2xl text-center shadow-xl">
            <p className="font-semibold text-md md:text-xl mb-2 md:mb-3">
              meexample@gmail.com
            </p>
            <p className="text-green-800 text-xs md:text-sm mt-6">
              <span>Email Verification successful</span>
            </p>
          </div>
        </div>
        <div className='block md:hidden'>
        <Image
        alt='stripes'
          src='/cohort 9.svg'
          width={70}
          height={65}
          className='absolute bottom-0 left-0'
        />
      </div>
      </main>
    </RootLayout>
  );
}
