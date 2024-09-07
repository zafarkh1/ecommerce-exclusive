import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Arrival() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="container mx-auto lg:pt-12 py-6 md:mb-0 mb-[15rem]">
      <p className="text-red-700 flex items-center gap-4 lg:text-lg">
        <span className="bg-red-700 h-8 w-3 rounded-sm"></span>
        <span className="font-semibold">{t("arrival.featured")}</span>
      </p>
      <h2 className="lg:text-4xl text-2xl font-medium lg:mt-4 lg:mb-9 mt-3 mb-7 text-center lg:text-left">
        {t("arrival.heading")}
      </h2>

      <div className="grid lg:grid-cols-2 lg:gap-8 gap-4 lg:my-8 text-white">
        <div
          className="relative bg-no-repeat bg-center bg-contain bg-black h-[15rem] lg:h-[30rem] rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
          style={{
            backgroundImage:
              "url('https://ae04.alicdn.com/kf/S8966835707534f889c354bad660e28efN.jpg')",
          }}
          onClick={() => {
            navigate("/product/3");
            window.scrollTo(0, 0);
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 rounded-xl"></div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:left-3 md:transform-none space-y-3 text-center md:text-left w-full lg:px-2 px-4">
            <h3 className="text-2xl font-bold">
              {t("arrival.products.ps5.title")}
            </h3>
            <p className="md:text-base text-sm">
              {t("arrival.products.ps5.desc")}
            </p>
            <button className="underline underline-offset-4 hover:text-red-500 transition-colors duration-300">
              {t("arrival.shop_now")}
            </button>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-8 h-[30rem]">
          <div
            className="relative bg-contain bg-black bg-no-repeat bg-right rounded-xl h-[15rem] lg:h-auto transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            style={{
              backgroundImage:
                "url('https://www.cnet.com/a/img/resize/4176b2e9cb62db9dccea926e3b5076e184e377ba/hub/2021/12/10/955a0f0d-e82f-4883-a1c3-48c9d0bec41f/splash.jpg?auto=webp&fit=crop&height=675&width=1200')",
            }}
            onClick={() => {
              navigate("/product/20");
              window.scrollTo(0, 0);
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 rounded-xl"></div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:left-3 md:transform-none space-y-3 text-center md:text-left w-full lg:px-2 px-4">
              <h3 className="text-2xl font-bold">
                {t("arrival.products.iphone13.title")}
              </h3>
              <p className="md:text-base text-sm">
                {t("arrival.products.iphone13.desc")}
              </p>
              <button className="underline underline-offset-4 hover:text-red-500 transition-colors duration-300">
                {t("arrival.shop_now")}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-4">
            <div
              className="relative bg-contain bg-black bg-no-repeat bg-right h-[14rem] rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
              style={{
                backgroundImage:
                  "url('https://wallup.net/wp-content/uploads/2017/11/17/230726-watch-luxury_watches-748x374.jpg')",
              }}
              onClick={() => {
                navigate("/product/19");
                window.scrollTo(0, 0);
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 rounded-xl"></div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:left-3 md:transform-none space-y-3 text-center md:text-left w-full lg:px-2 px-4">
                <h3 className="text-2xl font-bold">
                  {t("arrival.products.luxury_watch.title")}
                </h3>
                <p className="md:text-base text-sm">
                  {t("arrival.products.luxury_watch.desc")}
                </p>
                <button className="underline underline-offset-4 hover:text-red-500 transition-colors duration-300">
                  {t("arrival.shop_now")}
                </button>
              </div>
            </div>

            <div
              className="relative bg-contain bg-black bg-no-repeat bg-right h-[14rem] rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/9767549/pexels-photo-9767549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              }}
              onClick={() => {
                navigate("/product/7");
                window.scrollTo(0, 0);
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 rounded-xl"></div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:left-3 md:transform-none space-y-3 text-center md:text-left w-full lg:px-2 px-4">
                <h3 className="text-2xl font-bold">
                  {t("arrival.products.bluetooth_speaker.title")}
                </h3>
                <p className="md:text-base text-sm">
                  {t("arrival.products.bluetooth_speaker.desc")}
                </p>
                <button className="underline underline-offset-4 hover:text-red-500 transition-colors duration-300">
                  {t("arrival.shop_now")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrival;
