import { useState } from "react";
import { IoHeartOutline, IoEyeOutline, IoHeart } from "react-icons/io5";
import { products } from "../api/data";
import { useStore } from "../zustand/store";
import { useNavigate } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";

function Products() {
  const [visible, setVisible] = useState(4);
  const { cart, addToCart, getTotalItems, toggleFavorite, favorites } =
    useStore();
  const navigate = useNavigate();

  const isFavorited = (id) => favorites.some((item) => item.id === id);

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
        {products.slice(0, visible).map((item, index) => (
          <div key={index} className="cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={item.img}
                alt={item.title}
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  window.scrollTo(0, 0);
                }}
                className="object-cover w-full h-[18rem] sm:h-[15rem] md:h-[12rem] lg:h-[14rem] 
                transition-transform transform duration-300 hover:scale-105"
              />

              {/* Toggle Like Icon */}
              <button
                onClick={() => toggleFavorite(item)}
                className="absolute top-2 right-2 rounded-full p-1 text-xl bg-white"
              >
                {isFavorited(item.id) ? (
                  <IoHeart className="text-red-500" />
                ) : (
                  <IoHeartOutline />
                )}
              </button>

              <button className="absolute top-11 right-2 bg-white rounded-full p-1 text-xl">
                <IoEyeOutline className="  " />
              </button>

              <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in">
                <button
                  className="bg-black text-white w-full py-2 capitalize"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
              </div>
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
        {visible < products.length ? (
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
