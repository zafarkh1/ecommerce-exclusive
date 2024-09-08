import { useState } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useProducts } from "../api/data";
import { useStore } from "../zustand/store";
import { useNavigate } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useTabStore } from "../zustand/tabStore";
import { useTranslation } from "react-i18next";

function Products() {
  const [visible, setVisible] = useState(4);
  const { activeTab } = useTabStore();
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, favorites } = useStore();
  const { t } = useTranslation();
  const allProducts = useProducts();

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

  // Filter products based on raw active tab
  const filteredProducts =
    activeTab === "all"
      ? allProducts
      : allProducts.filter(
          (product) => product.category.toLowerCase() === activeTab
        );

  return (
    <div id="products" className="container mx-auto lg:pt-10 py-4">
      <p className="text-secondary flex items-center gap-4 lg:text-lg">
        <span className="bg-secondary h-8 w-3 rounded-sm"></span>
        <span className="font-semibold">{t("product.our_products")}</span>
      </p>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-8 gap-6 lg:my-8 my-6">
        {filteredProducts.slice(0, visible).map((item, index) => (
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
                  <IoHeart className="text-secondary" />
                ) : (
                  <IoHeartOutline />
                )}
              </button>

              <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in">
                <button
                  className="bg-black text-white w-full py-2 capitalize"
                  onClick={() => addToCart(item)}
                >
                  {t("product.add_to_cart")}
                </button>
              </div>
            </div>

            <div className="mt-2">
              <p className="text-lg font-medium capitalize">{item.title}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-lg font-semibold text-secondary">
                  {item.price}
                </span>
                <span className="flex">{renderStars(item.rating)}</span>
                <span className="text-gray-500 text-sm">
                  ({item.reviews} {t("product.reviews")})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center lg:my-12 my-6">
        {visible < filteredProducts.length ? (
          <button
            className="lg:py-2 py-1 lg:px-6 px-3 bg-secondary hover:bg-hoverSecondary transform transition-all duration-300 active:scale-105 text-white cursor-pointer rounded-lg"
            onClick={() => setVisible((prev) => prev + 4)}
          >
            {t("product.view_all_products")}
          </button>
        ) : filteredProducts.length < 5 ? (
          <div></div>
        ) : (
          <button
            className="lg:py-2 py-1 lg:px-6 px-3 bg-secondary hover:bg-hoverSecondary  transform transition-all duration-300 active:scale-105 text-white cursor-pointer rounded-lg"
            onClick={() => setVisible(4)}
          >
            {t("product.view_less_products")}
          </button>
        )}
      </div>
    </div>
  );
}

export default Products;
