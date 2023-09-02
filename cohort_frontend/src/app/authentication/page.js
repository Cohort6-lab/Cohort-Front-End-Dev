/**AuthButton- is An Example when you want to import any interface */ 
import AuthButton from'../components/authentication/Buttons/AuthButton';
import OtpInput from'../components/authentication/OtpVerification/InputOtp';


//Dont use the 'const' keyword in this file- You are not to Define any variable ###
export default function Authentication() {

  return (
    <>
<div className='text-xl m-5 font-bold underline text-green-400'>THE PROJECTS Authentication PAGE  THIS WILL USE THE Authentication FOLDER FROM THE COMPONENTS AS AN INTERFACE</div>
</>
  )

};
