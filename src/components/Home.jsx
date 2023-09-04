import React, { useEffect } from "react";
import Features from "./Features";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "@material-tailwind/react";
import Typed from "react-typed";
import img from './img.svg'
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div className="overflow-x-hidden">
      <section className="bg-gray-900   text-white ">
        <div
          className="mx-auto px-4 w-full  overflow-hidden py-32 lg:flex lg:h-screen lg:items-center"
          data-aos="flip-up"
        >
          <div className="mx-auto max-w-3xl text-center">
            {/* <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Flow.

        <span className="sm:block"> Increase Conversion. </span>
      </h1> */}
            <Typed    className="bg-gradient-to-r pl-3 from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl" strings={["Here you can find everything related to PC BUILDING and GAMING","BUDGET-PCs","GAMING-PCs","Graphics Cards & Monitors ","PC Components & Accessories"]} backSpeed={50} loop={true} typeSpeed={80} />

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Step into a realm where creativity meets craftsmanship, and dreams are assembled pixel by pixel.
            Welcome to our sanctuary of PC building.
            Explore, design, and ignite your passion for the extraordinary. Welcome to a journey where your imagination becomes reality.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                to="/login"
              >
                Get Started
              </Link>

              <Link
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                to="/"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="dark:bg-gray-800   dark:text-gray-100"
        data-aos="flip-up"
      >
        <div className="w-full overflow-hidden flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-20 mt-10 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <iframe
        width="550"
        height="310"
        src="https://www.youtube.com/embed/mFTd6AAFTPU"
        title="Use Laptop With External Monitor"
        frameborder="5"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
          </div>
          <div className="flex flex-col justify-center p-45 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leadi sm:text-5xl">
            Use Laptop With External Monitor
              <span className="dark:text-violet-400"></span>
            </h1>
            <h2 className="text-4xl font-bold leadi sm:text-5xl"> <span className="dark:text-violet-400"> </span>Lid Closed </h2>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
How to close laptop lid and still use the external monitor. Learn what setting to change on Windows 10 laptop to use on external monitor while the laptop is closed. Use monitor as main laptop display.
Also, the video shows how to connect your keyboard and laptop to your monitor. Works on all Windows 10 laptops including Lenovo, Dell, HP, Asus, etc.
 Close laptop and Use monitor.
🔥Don't Forget to Subscribe for Weekly!! Videos🔥
Please Do Like and Subscribe. 
Thank you
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to="https://www.youtube.com/channel/UC_1HvbHz9N86XDC6q1Qp4BQ">
                <Button color="red">Subscribe</Button>
              </Link>

              <Link to="https://www.youtube.com/channel/UCtHF8MWLCAQgrYAL_hR-5cA">
                <Button color="blue">BihariKoder</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Features />
    </div>
  );
};

export default Home;
