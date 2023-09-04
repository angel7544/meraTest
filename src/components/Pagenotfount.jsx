import { Link } from "react-router-dom"
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Pagenotfount = () => {
 useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div>
    <div className="grid py-52 md:py-52 h-screen  place-items-center bg-white px-6  sm:py-32 lg:px-8" data-aos="fade-right">
        <div className="text-center">
          <p className="font-semibold text-3xl text-indigo-600">404</p>
          <h1 className="mt-4  font-bold tracking-tight text-red-500 text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default Pagenotfount
