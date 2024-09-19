import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { Link as RouterLink } from "react-router-dom";

function Footer(props) {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Subscribe Section */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="lg:text-3xl text-xl font-semibold tracking-widest">
            <RouterLink to="/">Exclusive</RouterLink>
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

        {/* Download App Section */}
        <div className="col-span-2 xl:col-span-1 sm:mx-0 mx-auto sm:text-left text-center flex flex-col sm:items-baseline items-center">
          <h3 className="font-semibold text-lg">
            {t("footer.download_app.title")}
          </h3>
          <p className="mt-4 text-gray-400">
            {t("footer.download_app.description")}
          </p>
          <div className="flex gap-2 mt-4">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/playmarket.png"
                alt={t("footer.download_app.play_store")}
                className="h-10"
              />
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/appstore.png"
                alt={t("footer.download_app.app_store")}
                className="h-10"
              />
            </a>
          </div>
          <div className="mt-4 flex gap-4 text-white text-xl">
            <a
              href={t("footer.social_media.facebook")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href={t("footer.social_media.instagram")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href={t("footer.social_media.twitter")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiTwitter />
            </a>
            <a
              href={t("footer.social_media.linkedin")}
              target="_blank"
              rel="noopener noreferrer"
            >
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
