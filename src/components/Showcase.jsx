import { FaArrowRight } from "react-icons/fa6";

function Showcase(props) {
  const items = [
    { title: "Headphone series", img: "/images/iphone.jpg" },
    // { title: "Playstatiion series", img: "/images/ps5-1.jpg" },
    // { title: "Samsung series", img: "/images/samsungs24-1.jpg" },
    // { title: "Watch series", img: "/images/watch-1.jpg" },
  ];

  return (
    <div className="container mx-auto text-white lg:mt-[10rem] mt-[8rem] my-4 ">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center lg:gap-14 bg-black bg-no-repeat lg:bg-center bg-right bg-contain lg:px-10 px-6 rounded-xl lg:py-10 py-6`}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div>
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
        </div>
      ))}
    </div>
  );
}

export default Showcase;
