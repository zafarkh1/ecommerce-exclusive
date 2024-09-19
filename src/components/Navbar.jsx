import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CiHeart } from "react-icons/ci";
import {
  MdOutlineShoppingCart,
  MdOutlineSearch,
  MdOutlineMenu,
} from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useStore } from "../zustand/store";
import { useModalStore } from "../zustand/modalStore";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

function Navbar(props) {
  const [targetSection, setTargetSection] = useState(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { cart, favorites, toggleFavorite } = useStore();
  const { isOpen } = useModalStore();
  const navigate = useNavigate();

  const Linkitems = [
    { title: t("navbar.products"), link: "products" },
    { title: t("navbar.arrivals"), link: "arrivals" },
    { title: t("navbar.services"), link: "services" },
  ];

  const isFavorited = (id) => favorites.some((item) => item.id === id);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && targetSection) {
      const section = document.getElementById(targetSection);
      if (section) {
        const yOffset = -84; // Adjust according to your navbar height (84px here)
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setTargetSection(null); // Clear the target after scrolling
    }
  }, [location, targetSection]);

  const handleLinkClick = (link) => {
    if (location.pathname !== "/") {
      // If we're not on the homepage, navigate to the homepage first
      setTargetSection(link); // Store the section to scroll to
      navigate("/");
    } else {
      // If already on the homepage, scroll immediately
      const section = document.getElementById(link);
      if (section) {
        const yOffset = -84; // Adjust according to your navbar height
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <div
      className={`fixed top-[3.7rem] left-0 right-0 z-10 transition-all duration-100 ease-linear ${
        isOpen ? "border-b-0 " : "border-b-2"
      }  ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
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
            <RouterLink to="/">Exclusive</RouterLink>
          </h4>
        </div>

        <ul
          className={`lg:static fixed top-[2.7rem] left-0 h-full lg:w-auto sm:w-1/3 w-3/5 flex lg:items-center lg:flex-row flex-col 
            lg:gap-12 gap-6 text-xl lg:bg-transparent bg-gray-900 lg:text-black text-white lg:px-0 px-6 lg:py-0 py-10 transition-all duration-500 ease-in ${
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
              <span
                className="relative group cursor-pointer"
                onClick={() => handleLinkClick(item.link)}
              >
                {item.title}
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-1 lg:bg-secondary transform scale-x-0 group-hover:scale-x-90 
                transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </span>
            </li>
          ))}
        </ul>

        <ul className="relative flex items-center lg:gap-12 gap-6 sm:text-3xl text-2xl">
          <button className="hidden lg:block">
            <MdOutlineSearch />
          </button>
          <div className="relative group">
            <CiHeart className="hover:cursor-pointer" />
            <span className="absolute -top-1 right-0 bg-secondary text-white h-4 w-4 text-center rounded-full text-xs">
              {favorites.length}
            </span>
            <div
              className="absolute sm:top-[1.8rem] top-[1.2rem] right-0 bg-gray-100 shadow-lg rounded-lg w-64 lg:px-4 px-2 py-2 lg:space-y-4 
            sm:space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-opacity duration-500 z-10"
            >
              {favorites.length > 0 ? (
                favorites.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between relative"
                  >
                    <span className="capitalize text-lg text-black">
                      {item.title}
                    </span>
                    <button
                      onClick={() => toggleFavorite(item)}
                      className="rounded-full p-1 text-xl bg-white"
                    >
                      {isFavorited(item.id) ? (
                        <IoHeart className="text-secondary" />
                      ) : (
                        <IoHeartOutline />
                      )}
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 text-lg">
                  {t("navbar.no_liked_products")}
                </p>
              )}
            </div>
          </div>
          <div className="relative">
            <MdOutlineShoppingCart
              className="cursor-pointer z-20"
              onClick={() => {
                navigate("/cart");
                window.scrollTo(0, 0);
              }}
            />
            <span className="absolute -top-1 right-0 bg-secondary text-white h-4 w-4 text-center rounded-full text-xs z-20">
              {cart.length}
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
