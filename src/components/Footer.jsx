import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiFacebook, CiTwitter, CiLinkedin, CiYoutube  } from "react-icons/ci";
import { Link } from 'react-scroll'
import logolight from "../assets/images/logo-light.png"

export default function Footer() {
  return (
    <>
    <footer className='bg-slate-800 text-white flex flex-col space-y-2 lg:space-y-0 lg:flex-row px-8 md:px-32 lg:px-24 py-20 sm:py-24 gap-16 lg:gap-24'>
      <div className='w-full lg:w-1/3 flex flex-col text-sm md:text-base lg:text-xl gap-8 sm:gap-10'>
        <div className=''>
          <a href='' className='mx-auto'>
            <img src={logolight} alt="Company Logo" className='mb-6 h-8' />
          </a>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is dummy text of the industry.</p>
        </div>
        <div>
          <p className='space-y-3'>
            <a className='flex gap-2'>
              <IoLocationOutline className='mt-1' />
              <address>Brooklyn, New York, United States</address>
            </a>
            <a className='flex gap-2'>
              <FiPhone className='mt-1' />
              <span>+0123-456789</span>
            </a>
            <a className='flex gap-2'>
              <HiOutlineMail className='mt-1'/>
              <span>contact@homeverse.com</span>
            </a>
          </p>
        </div>
        <div>
          <p className='flex gap-5'>
            <a href=''><CiFacebook /></a>
            <a href=''><CiTwitter /></a>
            <a href=''><CiLinkedin /></a>
            <a href=''><CiYoutube /></a>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-xl lg:text-2xl font-bold'>Company</h1>
          <p className='flex flex-col gap-5 text-sm md:text-base lg:text-xl'>
            <a href='' className='text-white hover:text-red-500'>About</a>
            <a href='' className='text-white hover:text-red-500'>Blog</a>
            <a href='' className='text-white hover:text-red-500'>All Products</a>
            <a href='' className='text-white hover:text-red-500'>Locations Map</a>
            <a href='' className='text-white hover:text-red-500'>FAQ</a>
            <a href='' className='text-white hover:text-red-500'>Contact us</a>
          </p>
        </div>
        <div className='flex flex-col gap-8'>
          <h1 className='text-xl lg:text-2xl font-bold'>Services</h1>
          <p className='flex flex-col gap-5 text-sm md:text-base lg:text-xl'>
            <a href='' className='text-white hover:text-red-500'>Order tracking</a>
            <a href='' className='text-white hover:text-red-500'>Wish List</a>
            <a href='' className='text-white hover:text-red-500'>Login</a>
            <a href='' className='text-white hover:text-red-500'>My account</a>
            <a href='' className='text-white hover:text-red-500'>Terms & Conditions</a>
            <a href='' className='text-white hover:text-red-500'>Promotional Offers</a>
          </p>
        </div>
        <div className='flex flex-col gap-8'>
          <h1 className='text-xl lg:text-2xl font-bold'>Customer Care</h1>
          <p className='flex flex-col gap-5 text-sm md:text-base lg:text-xl'>
            <a href='' className='text-white hover:text-red-500'>Login</a>
            <a href='' className='text-white hover:text-red-500'>My account</a>
            <a href='' className='text-white hover:text-red-500'>Wish List</a>
            <a href='' className='text-white hover:text-red-500'>Order tracking</a>
            <a href='' className='text-white hover:text-red-500'>FAQ</a>
            <a href='' className='text-white hover:text-red-500'>Contact us</a>
          </p>
        </div>
      </div>
    </footer>
    <div className='text-center text-white p-6 sm:p-7 text-base md:text-lg lg:text-xl bg-slate-900 mb-16 sm:mb-0'>
      © 2024 <a href="#">codewithsadee</a>. All Rights Reserved
    </div>
  </>
  );
}
   
