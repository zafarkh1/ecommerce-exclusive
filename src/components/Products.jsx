import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";

function Products(props) {
  const [visible, setVisible] = useState(4);
  const items = [
    {
      id: 1,
      title: "backpack",
      price: "100$",
      rating: 4,
      img: "/images/backpack-1.jpg",
      reviews: 50,
      desc: "Durable and spacious backpack perfect for traveling and daily use.",
    },
    {
      id: 2,
      title: "headphones",
      price: "150$",
      rating: 4,
      img: "/images/headphones-2.jpg",
      reviews: 120,
      desc: "Wireless noise-cancelling headphones with crystal clear sound and long battery life.",
    },
    {
      id: 3,
      title: "porridge",
      price: "5$",
      rating: 4,
      img: "/images/porridge-1.jpg",
      reviews: 35,
      desc: "Healthy and nutritious instant porridge for a quick and satisfying breakfast.",
    },
    {
      id: 4,
      title: "PS 5",
      price: "500$",
      rating: 5,
      img: "/images/ps5-1.jpg",
      reviews: 200,
      desc: "Next-generation gaming console with stunning graphics and fast loading times.",
    },
    {
      id: 5,
      title: "Redmi",
      price: "250$",
      rating: 4,
      img: "/images/redmi-1.jpg",
      reviews: 80,
      desc: "Affordable smartphone with impressive features and a long-lasting battery.",
    },
    {
      id: 6,
      title: "Samsung S24",
      price: "999$",
      rating: 5,
      img: "/images/samsung-s24-1.jpg",
      reviews: 150,
      desc: "High-end smartphone with an exceptional camera and advanced display technology.",
    },
    {
      id: 7,
      title: "Artel TV",
      price: "300$",
      rating: 4,
      img: "/images/artel-tv-1.jpg",
      reviews: 60,
      desc: "Smart TV with a sleek design and vivid display for an immersive viewing experience.",
    },
    {
      id: 8,
      title: "Boss watches",
      price: "200$",
      rating: 4,
      img: "/images/boss-watches-1.jpg",
      reviews: 90,
      desc: "Elegant and stylish watches that combine functionality and fashion.",
    },
    {
      id: 9,
      title: "Wet wipes",
      price: "3$",
      rating: 4,
      img: "/images/wet-wipes-1.jpg",
      reviews: 40,
      desc: "Soft and refreshing wet wipes for on-the-go cleaning and hygiene.",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MdOutlineStar
          key={i}
          className={i <= rating ? "text-yellow-500" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto lg:pt-10 py-4">
      <p className="text-red-700 flex items-center gap-4 lg:text-lg">
        <span className="bg-red-700 h-8 w-3 rounded-sm"></span>
        <span className="font-semibold">Our Products</span>
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-8 gap-6 lg:my-8 my-6">
        {items.slice(0, visible).map((item, index) => (
          <div
            key={index}
            className="cursor-pointer transition-transform transform hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-[18rem] sm:h-[15rem] md:h-[12rem] lg:h-[14rem]"
              />
              <IoHeartOutline className="absolute top-5 right-2 bg-white rounded-full p-1 text-2xl" />
              <IoEyeOutline className="absolute top-12 right-2 bg-white rounded-full p-1 text-2xl" />
            </div>
            <div className="mt-2">
              <p className="text-lg font-medium capitalize">{item.title}</p>
              <div className="flex items-center space-x-2 mt-1  ">
                <span className="text-lg font-semibold text-red-700">
                  {item.price}
                </span>
                <span className="flex">{renderStars(item.rating)}</span>
                <span className="text-gray-500 text-sm">
                  ({item.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center lg:my-12 my-6">
        {visible < items.length ? (
          <button
            className="lg:py-2 py-1 lg:px-6 px-3 bg-rose-700 hover:bg-rose-600 transform transition-all duration-300 active:scale-105 text-white cursor-pointer rounded-lg"
            onClick={() => setVisible((prev) => prev + 4)}
          >
            View all products
          </button>
        ) : (
          <button
            className="lg:py-2 py-1 lg:px-6 px-3 bg-rose-700 hover:bg-rose-600 transform transition-all duration-300 active:scale-105 text-white cursor-pointer rounded-lg"
            onClick={() => setVisible(4)}
          >
            View less products
          </button>
        )}
      </div>
    </div>
  );
}

export default Products;
