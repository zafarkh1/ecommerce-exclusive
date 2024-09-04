import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import {
  MdOutlineShoppingCart,
  MdOutlineSearch,
  MdOutlineMenu,
} from "react-icons/md";
import { FaTimes } from "react-icons/fa";

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const Linkitems = [
    { title: "Home", link: "" },
    { title: "Contact", link: "" },
    { title: "About", link: "" },
    { title: "Sign in", link: "" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-[2.7rem] left-0 right-0 z-10 transition-all border-b-2 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="relative container mx-auto flex justify-between items-center lg:py-4 py-3">
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="sm:text-3xl text-2xl absolute sm:top-3 top-4 left-8 cursor-pointer z-50 -ml-3"
          >
            {open ? null : <MdOutlineMenu />}
          </button>
        </div>

        <div>
          <h4 className="lg:text-3xl text-xl font-semibold tracking-widest">
            <a href="#">Exclusive</a>
          </h4>
        </div>

        <ul
          className={`lg:static fixed top-[2.7rem] left-0 h-full lg:w-auto sm:w-1/3 w-3/5 flex lg:items-center lg:flex-row flex-col lg:gap-12 gap-6 text-xl lg:bg-transparent 
            bg-gray-800 lg:text-black text-white lg:px-0 px-6 lg:py-0 py-10 transition-all duration-500 ease-in ${
              open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
        >
          <li>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden lg:text-3xl text-2xl absolute top-6 right-6 cursor-pointer z-50"
            >
              <FaTimes />
            </button>
          </li>
          {Linkitems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="relative group">
                {item.title}
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center lg:gap-12 gap-6 sm:text-2xl text-xl">
          <button className="hidden lg:block">
            <MdOutlineSearch />
          </button>
          <CiHeart />
          <MdOutlineShoppingCart />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
