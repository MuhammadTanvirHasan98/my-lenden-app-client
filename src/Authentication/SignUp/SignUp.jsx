import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, } from "react-router-dom";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

import RegisterImg from '../../assets/images/RegisterImg.png'
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";



const SignUp = () => {

   const [loading, setLoading] = useState(false);
   const [showPass, setShowPass] = useState(false);


    const handleSignIn=(e)=>{
       e.preventDefault();
       const form = new FormData(e.currentTarget);

       console.log(form);

       const name = form.get('name')
       const userId = form.get('userId');
       const password = form.get('password')

       console.log({name, userId, password});
    }



  // console.log(location);
  // const gotoThere = location.state || '/';

  // useEffect(()=>{
  //    if(user){
  //      navigate(gotoThere);
  //    }
  // },[user])


  // if(user) return

  return (
    <div className='flex justify-center items-center'>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl my-32 border-2 border-blue-200'>
        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'
          style={{
            backgroundImage: `url('${RegisterImg}')`,
          }}
        ></div>

        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <p className='mt-3 text-2xl text-center text-gray-600 font-extrabold merienda'>
            Get your free account!
          </p>

          {/* <div className='flex cursor-pointer items-center justify-center gap-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 px-4 py-3 '>

              <FcGoogle className="text-xl"/>
              Sign in with Google
          </div> */}

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>

            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
              Register with email or number
            </div>

            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>

          {/* Form */}
          <form onSubmit={handleSignIn}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-semibold text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Name
              </label>
              <input
                id='LoggingEmailAddress'
                name='name'
                placeholder="Enter your name"
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                required
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-semibold text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address or Phone Number
              </label>
              <input
                id='LoggingEmailAddress'
                name='userId'
                placeholder="Enter email address or phone number"
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                required
              />
            </div>

            <div className='mt-4 relative'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-semibold text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                placeholder="Enter your password"
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type={showPass? 'text': 'password'}
                required
              />

              <span
              onClick={()=>setShowPass(!showPass)}
              className="absolute right-3 bottom-2.5">
                {
                showPass?
                <LuEye className="text-xl text-gray-500"/>: <LuEyeOff className="text-xl text-gray-500"/>
                }
              </span>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                onClick={()=>setLoading(true)}
                className='w-full px-6 py-2 text-lg font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 '
              >
                {loading ? (
                <ImSpinner9 className='animate-spin m-auto' />
              ) : (
                'Sign In'
              )}
              </button>
            </div>
          </form>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b dark:border-gray-400  md:w-1/4'></span>

            <Link
              to='/signIn'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or Sign In
            </Link>

            <span className='w-1/5 border-b dark:border-gray-400 md:w-1/4'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp