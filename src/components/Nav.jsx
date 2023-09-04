import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex z-50 fixed w-full justify-between  items-center h-20  mx-auto px-4 text-white" style={{backgroundColor:"#002D62"}}>
      <h1 className="w-full text-3xl font-bold text-[white]">TechAshu.</h1>
      <ul className="hidden top-24 md:flex">
        <Link to={'/'}>
          <li className="p-4 hover:text-deep-orange-400 ">HOME</li>
        </Link>

        <Link  to={'/product'}>
          <li className="p-4 hover:text-deep-orange-400 ">RPODUCTS</li>
        </Link>

        <Link to={'/team'}>
          <li className="p-4 hover:text-deep-orange-400 ">TEAMS</li>
        </Link>

        <Link to={'/contact'}>
          <li className="p-4 hover:text-deep-orange-400 ">CONTACT</li>
        </Link>

        <Link to={'/login'}>
          <li className="p-4 hover:text-deep-orange-400 ">LOGIN</li>
        </Link>

        
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 z-50 top-20 w-[60%] h-full border-r   ease-in-out duration-500"
            : "ease-in-out duration-500  top-24 fixed left-[-100%]"
        }
        style={{backgroundColor:"#002D62"}}
      >
        <Link to={'/'}>
          <li className="p-4 hover:text-deep-orange-400 ">HOME</li>
        </Link>

        <Link  to={'/product'}>
          <li className="p-4 hover:text-deep-orange-400 ">RPODUCTS</li>
        </Link>

        <Link to={'/team'}>
          <li className="p-4 hover:text-deep-orange-400 ">TEAMS</li>
        </Link>

        <Link to={'/contact'}>
          <li className="p-4 hover:text-deep-orange-400 ">CONTACT</li>
        </Link>

        <Link to={'/login'}>
          <li className="p-4 hover:text-deep-orange-400 ">LOGIN</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
