import Countdown from "react-countdown";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

function Sale() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("sale.title", "Enhance your music experience"), // Example, use specific key if needed
      img: "/images/sale-1.png",
      countdown: {
        date: new Date(Date.now() + 23 * 24 * 60 * 60 * 1000),
      },
    },
    {
      title: t("sale.title", "Enhance your music experience"), // Example, use specific key if needed
      img: "/images/sale-1.png",
      countdown: {
        date: new Date(Date.now() + 23 * 24 * 60 * 60 * 1000),
      },
    },
    {
      title: t("sale.title", "Enhance your music experience"), // Example, use specific key if needed
      img: "/images/sale-1.png",
      countdown: {
        date: new Date(Date.now() + 23 * 24 * 60 * 60 * 1000),
      },
    },
  ];

  const fullTitles = {
    d: t("sale.countdown.days"),
    h: t("sale.countdown.hours"),
    m: t("sale.countdown.minutes"),
    s: t("sale.countdown.seconds"),
  };

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:my-10 my-8 text-black">
      {[
        { key: "d", value: days },
        { key: "h", value: hours },
        { key: "m", value: minutes },
        { key: "s", value: seconds },
      ].map(({ key, value }) => (
        <div
          key={key}
          className="flex lg:flex-col items-center justify-center lg:gap-0 gap-1 bg-slate-200 rounded-full h-12 w-12 lg:h-20 lg:w-20 p-0 lg:p-3 mb-2 lg:mb-0"
        >
          <span className="text font-bold text-base lg:text-2xl">{value}</span>
          <span className="text-xs lg:text-sm">
            <span className="block lg:hidden">{key.toUpperCase()}</span>
            <span className="hidden lg:block">{fullTitles[key]}</span>
          </span>
        </div>
      ))}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto text-white lg:my-4 my-2 slider-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-black lg:px-10 px-6 rounded-xl lg:py-6 py-4"
          >
            <div
              className="bg-no-repeat md:bg-right bg-bottom bg-contain lg:bg-auto"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <p className="lg:text-lg text-lime-500 md:text-left text-center">
                {t("sale.categories")}
              </p>
              <h1 className="xl:text-6xl xl:leading-[4rem] md:text-4xl text-2xl lg:my-8 my-4 capitalize xl:w-2/5 md:w-1/2 md:text-left text-center">
                {item.title}
              </h1>
              <Countdown date={item.countdown.date} renderer={renderer} />
              <div className="flex md:justify-stretch justify-center">
                <button className="lg:py-2 py-1 lg:px-6 px-3 bg-lime-500 hover:bg-lime-400 text-white cursor-pointer rounded-lg">
                  {t("sale.buy_now")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sale;
