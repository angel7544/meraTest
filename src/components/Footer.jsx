import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const Footer = () => {
  return (
    <div className="w-full px-4 flex items-center justify-center " style={{backgroundColor:"#002D62"}}>
      <div className="md:h-3/2 w-full px-2 text-white flex flex-col">
        <div className="w-full mt-5 text-3xl font-bold">
          <h1 className="w-full md:w-2/3">How can we help you. get in touch</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400">
            To ensure that all Wikipedia content is verifiable, anyone may
            question an uncited claim. If your work has been tagged
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <Link to={'/contact'} >
            <Button color="blue">Contact us</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-5 mb-4 flex-row justify-between">
            <div className="">
            {/* <Link>TechAshu</Link> */}
            </div>
            <Link className="hidden md:block cursor-pointer text-white hover:text-deep-orange-400 uppercase">
              About
            </Link>
            <Link className="hidden md:block cursor-pointer text-white hover:text-deep-orange-400  uppercase">
              Services
            </Link>
            <Link className="hidden md:block cursor-pointer text-white hover:text-deep-orange-400  uppercase">
              Why us
            </Link>
           

            <div className="flex flex-row space-x-8 items-center justify-between">
              <Link></Link>
              <Link></Link>
              <Link ></Link>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-4 text-gray-600">
            Copyright © 2023 TeachAshu
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
