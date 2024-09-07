import { useLocation } from "react-router-dom";
import { products } from "../api/data";
import { useState, useEffect } from "react";
import { useStore } from "../zustand/store";
import { useModalStore } from "../zustand/modalStore";
import MessageModal from "../modal/MessageModal";

function ProductSeries() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchKeyword = queryParams.get("search");
  const { cart, decreaseFromCart, addToCart } = useStore();
  const { openModal } = useModalStore();

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchKeyword]);

  let totalArr = cart.map(
    (item) => item.quantity * parseInt(item.price.slice(0, -1))
  );

  let total =
    totalArr.length &&
    totalArr.reduce((curr, acc) => {
      return curr + acc;
    }, 0);

  return (
    <div className="container mx-auto md:my-[10rem] my-[8rem] overflow-hidden">
      <h2 className="lg:text-4xl text-2xl font-medium text-center lg:text-left">
        {searchKeyword.toUpperCase()} Series
      </h2>
      {/*                   Products                 */}
      <div className="my-10 grid lg:grid-cols-2 gap-y-8">
        {filteredProducts.map((product, index) => (
          <div key={index} className="flex gap-6">
            {/*             Image                 */}
            <div className="w-36 h-36 flex-shrink-0">
              <img
                src={product.img}
                alt={product.title}
                className="h-full w-full object-cover border border-gray-200 rounded-md"
              />
            </div>

            {/*               Content               */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h5 className="lg:text-2xl text-xl font-medium">
                  {product.title}
                </h5>
                <p className="w-4/5">
                  {product.desc.split(" ").slice(0, 12).join(" ")}
                  {product.desc.split(" ").length > 12 && "..."}
                </p>
              </div>

              <div className="mt-auto flex items-center gap-4 ">
                <p className="text-xl text-red-700">
                  {product.price} {" * "}
                </p>
                {/*              Count               */}
                <div className="flex items-center border border-gray-300 rounded w-fit">
                  <button
                    onClick={() => decreaseFromCart(product.id)}
                    className="h-6 w-10 bg-transparent hover:bg-red-600 hover:text-white transition-all 
                duration-200 flex items-center justify-center p-0 m-0"
                  >
                    <span className="text-2xl">-</span>
                  </button>

                  <div className="md:px-8 px-4 py-[2px] border-x-2 border-gray-300 font-medium text-sm">
                    {cart.find((item) => item.id === product.id)?.quantity || 0}
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="h-6 w-10 bg-transparent hover:bg-rose-700 hover:text-white transition-all 
                duration-200 flex items-center justify-center p-0 m-0"
                  >
                    <span className="text-2xl">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*                    Total  and Buy btn         */}
      <div className="flex justify-between items-center mt-16">
        <div></div>
        <button
          className="xl:py-4 py-2 xl:px-16 px-4 bg-rose-700 hover:bg-rose-600 transform transition-all duration-300 text-white rounded"
          onClick={openModal}
        >
          Buy now
        </button>
        <p className="lg:text-2xl text-xl font-medium">
          Total: {total}
          {" $"}
        </p>
      </div>
      <MessageModal />
    </div>
  );
}

export default ProductSeries;
