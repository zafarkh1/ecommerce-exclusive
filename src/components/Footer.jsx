import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

function Footer(props) {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {/* Subscribe Section */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="lg:text-3xl text-xl font-semibold tracking-widest">
            <a href="/">{t("footer.subscribe.title")}</a>
          </h4>
          <p className="mt-4 sm:text-base text-sm">
            {t("footer.subscribe.subtitle")}
          </p>
          <p className="text-gray-400 sm:text-base text-sm">
            {t("footer.subscribe.description")}
          </p>
          <div className="mt-4">
            <form className="flex">
              <input
                type="email"
                placeholder={t("footer.subscribe.email_placeholder")}
                className="py-2 sm:px-3 px-1 text-black rounded-l-md outline-none w-2/3 sm:text-base text-xs"
              />
              <button className="bg-white text-black sm:px-2 px-1 rounded-r-md">
                {t("footer.subscribe.subscribe_button")}
              </button>
            </form>
          </div>
        </div>

        {/* Support Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-semibold text-lg">{t("footer.support.title")}</h3>
          <p className="mt-4 sm:text-base text-sm">
            {t("footer.support.address")}
          </p>
          <p className="sm:text-base text-sm">{t("footer.support.email")}</p>
          <p className="sm:text-base text-sm">{t("footer.support.phone")}</p>
        </div>

        {/* Account Links */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-semibold text-lg">{t("footer.account.title")}</h3>
          <ul className="mt-4 space-y-2">
            {t("footer.account.links", { returnObjects: true }).map(
              (link, index) => (
                <li key={index}>
                  <a href="/" className="relative group">
                    {link}
                    <span
                      className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                    group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                    ></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-semibold text-lg">
            {t("footer.quick_links.title")}
          </h3>
          <ul className="mt-4 space-y-2">
            {t("footer.quick_links.links", { returnObjects: true }).map(
              (link, index) => (
                <li key={index}>
                  <a href="/" className="relative group">
                    {link}
                    <span
                      className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                    group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                    ></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Download App Section */}
        <div className="col-span-2 xl:col-span-1 sm:mx-0 mx-auto sm:text-left text-center flex flex-col sm:items-baseline items-center">
          <h3 className="font-semibold text-lg">
            {t("footer.download_app.title")}
          </h3>
          <p className="mt-4 text-gray-400">
            {t("footer.download_app.description")}
          </p>
          <div className="flex gap-2 mt-4">
            <img
              src="/images/playmarket.png"
              alt={t("footer.download_app.play_store")}
              className="h-10"
            />
            <img
              src="/images/appstore.png"
              alt={t("footer.download_app.app_store")}
              className="h-10"
            />
          </div>
          <div className="mt-4 flex gap-4 text-white text-xl">
            <a href={t("footer.social_media.facebook")}>
              <FaFacebookF />
            </a>
            <a href={t("footer.social_media.instagram")}>
              <FaInstagram />
            </a>
            <a href={t("footer.social_media.twitter")}>
              <CiTwitter />
            </a>
            <a href={t("footer.social_media.linkedin")}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        {t("footer.footer_bottom")}
      </div>
    </footer>
  );
}

export default Footer;
