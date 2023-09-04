import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { AiFillLinkedin,AiFillInstagram,AiFillTwitterCircle } from "react-icons/ai";
const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div>




<section className="text-gray-600 h-auto body-font relative" data-aos="fade-right">
  <div className="container px-5 py-28 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-3xl md:text-4xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <Button className="flex mx-auto px-10 text-xl" color='blue'>Submit</Button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <Link className="text-indigo-500">example@email.com</Link>
          <p className="leading-normal my-5">Amity university Patna
          </p>
          <span className="inline-flex">
            <Link className="text-gray-500">
			<AiFillLinkedin className='text-3xl  text-deep-purple-600'/>
            </Link>
            <Link className="ml-4 text-gray-500">
			<AiFillInstagram className='text-3xl  text-deep-purple-600'/ >
            </Link>
            <Link className="ml-4 text-gray-500">
			<AiFillTwitterCircle className='text-3xl  text-deep-purple-600'/>
            </Link>
           
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact
