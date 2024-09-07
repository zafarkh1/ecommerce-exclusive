import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Showcase() {
  const items = [
    {
      title: "Iphone series",
      img: "/images/iphone.jpg",
      keyword: "iphone",
    },
    {
      title: "Playstation series",
      img: "/images/ps5-4.webp",
      keyword: "Ps",
    },
    {
      title: "Samsung series",
      img: "/images/samsung-s24-3.webp",
      keyword: "Samsung",
    },
    {
      title: "Watch series",
      img: "/images/boss-watches-3.jpg",
      keyword: "Watch",
    },
  ];

  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="container mx-auto text-white lg:mt-[10rem] mt-[8rem] my-4 overflow-hidden">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className="relative bg-black rounded-xl lg:px-10 sm:px-4 px-1 lg:py-10 sm:py-6 py-3"
          >
            <Link
              to={`/products?search=${item.keyword}`}
              className="flex items-center lg:gap-14  bg-no-repeat lg:bg-center bg-right-bottom bg-contain"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className=" p-4 rounded-lg">
                <p className="xl:text-2xl md:text-xl text-base">{item.title}</p>
                <h1 className="xl:text-6xl xl:leading-[4rem] md:text-4xl text-2xl w-4/5 lg:my-8 my-4">
                  Up to 10% off Voucher
                </h1>
                <button className="underline underline-offset-2 xl:text-2xl md:text-xl text-base flex items-center gap-3">
                  <span>Shop now</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Showcase;
