import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import {
  MdOutlineShoppingCart,
  MdOutlineSearch,
  MdOutlineMenu,
  MdDeleteForever,
} from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useStore } from "../zustand/store";

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, favorites, removeFromCart, decreaseFromCart, addToCart } =
    useStore();

  const Linkitems = [
    { title: "Home", link: "" },
    { title: "Contact", link: "" },
    { title: "About", link: "" },
    { title: "Sign in", link: "" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
      className={`fixed top-[2.7rem] left-0 right-0 z-10 transition-all duration-100 ease-linear border-b-2 ${
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
            <a href="/">Exclusive</a>
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

        <ul className="relative flex items-center lg:gap-12 gap-6 sm:text-3xl text-2xl">
          <button className="hidden lg:block">
            <MdOutlineSearch />
          </button>
          <div className="relative">
            <CiHeart />
            <span className="absolute -top-1 right-0 bg-red-700 text-white h-4 w-4 text-center rounded-full text-xs">
              {favorites.length}
            </span>
          </div>
          <div className="relative group">
            <MdOutlineShoppingCart className="cursor-pointer z-20" />
            <span className="absolute -top-1 right-0 bg-red-700 text-white h-4 w-4 text-center rounded-full text-xs z-20">
              {cart.length}
            </span>
            <div
              className="absolute sm:top-[1.8rem] top-[1.2rem] right-0 bg-gray-100 shadow-lg rounded-lg w-64 lg:px-4 px-2 py-2 lg:space-y-4 sm:space-y-2 opacity-0 invisible 
    group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-opacity duration-500 z-10"
            >
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <span className="capitalize text-lg">{item.title}</span>
                      <span className="block text-sm text-gray-500">
                        {item.price} {" x "} {item.quantity}
                      </span>
                    </div>
                    <div className="flex space-x-2 items-center text-xl">
                      <button
                        onClick={() => decreaseFromCart(item.id)}
                        className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center text-center"
                      >
                        -
                      </button>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center text-center"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 text-lg">
                  Your cart is empty
                </p>
              )}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
