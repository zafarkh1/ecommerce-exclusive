import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

function NavbarLng(props) {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const { t, i18n } = useTranslation();

  const navbarHeight = 140;

  const languages = {
    uz: t("navbarLng.language_uz"),
    ru: t("navbarLng.language_ru"),
    en: t("navbarLng.language_en"),
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setShowDropdown(false);
  };

  return (
    <div className="bg-black text-gray-100 fixed top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex justify-between items-center py-3 lg:text-base text-sm">
        <div className="hidden md:block"></div>
        <div className="flex gap-4">
          <p className="hidden md:block">{t("navbarLng.sale")}</p>
          <Link
            className="underline underline-offset-2 lg:hover:text-secondary transition-all duration-300"
            to="sale"
            spy={true}
            smooth={true}
            offset={-navbarHeight}
            duration={1500}
            href="sale"
          >
            {t("navbarLng.btn")}
          </Link>
        </div>
        <div
          ref={dropdownRef}
          className="relative group"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <button className="focus:outline-none bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            {languages[i18n.language]}
          </button>
          <ul
            className={`absolute left-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg py-2 ${
              showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
            } transform ${
              showDropdown ? "scale-100" : "scale-95"
            } transition-all duration-300 ease-out`}
          >
            {Object.keys(languages).map((lang, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors duration-300"
                onClick={() => handleLanguageChange(lang)}
              >
                {languages[lang]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarLng;
