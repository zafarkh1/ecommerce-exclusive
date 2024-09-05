import { useParams } from "react-router-dom";
import { products } from "../api/data";
import { MdOutlineStar, MdOutlineSwapHoriz } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { useStore } from "../zustand/store";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useModalStore } from "../zustand/modalStore";
import MessageModal from "../modal/MessageModal";

function ProductDetail(props) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { cart, decreaseFromCart, addToCart, toggleFavorite, favorites } =
    useStore();
  const { openModal } = useModalStore();

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
    <div className="container mx-auto my-[11rem]">
      <div className="grid lg:grid-cols-2 ">
        {/*              Image Section          */}
        <div className="col-span-1 flex space-x-2">
          {/* Thumbnail Images */}
          <div className="flex flex-col space-y-4">
            {product.capture.map((img, index) => (
              <img
                src={img}
                alt={`Product thumbnail ${index + 1}`}
                key={index}
                className="h-28 w-28 object-cover border border-gray-200 rounded-md"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={product.img}
              alt={product.title}
              className="h-[30rem] w-auto object-cover border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/*              Content         */}
        <div className="col-span-1">
          <h3 className="lg:text-3xl capitalize font-semibold">
            {product.title}
          </h3>
          <div className="flex items-center space-x-2 my-2 text-lg">
            <span className="flex">{renderStars(product.rating)}</span>
            <span className="text-gray-500 text-sm">
              ({product.reviews} reviews)
            </span>
          </div>
          <span className="text-3xl font-semibold text-red-700">
            {cart.find((c) => c.id === product.id)
              ? cart.find((c) => c.id === product.id).quantity *
                  parseInt(product.price.slice(0, -1)) +
                "$"
              : product.price}
          </span>

          <p className="lg:w-1/2 mt-6 border-b-2 pb-6 border-gray-600">
            {product.desc}
          </p>

          {/*                      Count && Like && Buy */}
          <div className="flex items-center gap-4 my-6">
            {/*    Count    */}
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button
                onClick={() => decreaseFromCart(product.id)}
                className="h-10 w-10 bg-transparent hover:bg-red-600 hover:text-white transition-all 
                duration-200 flex items-center justify-center p-0 m-0"
              >
                <span className="text-2xl">-</span>
              </button>

              <div className="px-8 py-2 border-x-2 border-gray-300 font-medium">
                {cart.find((item) => item.id === product.id)?.quantity || 0}
              </div>

              <button
                onClick={() => addToCart(product)}
                className="h-10 w-10 bg-transparent hover:bg-rose-700 hover:text-white transition-all 
                duration-200 flex items-center justify-center p-0 m-0"
              >
                <span className="text-2xl">+</span>
              </button>
            </div>

            {/*     Buy    */}
            <div>
              <button
                className="py-2 px-8 bg-rose-700 hover:bg-rose-600 transform transition-all 
                   duration-300 text-white rounded"
                onClick={openModal}
              >
                Buy now
              </button>
            </div>

            {/*     Like    */}
            <div
              className="text-2xl p-1 border-2 roudned"
              onClick={() => toggleFavorite(product)}
            >
              {isFavorited(product.id) ? (
                <IoHeart className="text-red-500 cursor-pointer" />
              ) : (
                <IoHeartOutline className="cursor-pointer" />
              )}
            </div>
          </div>

          {/*           Delivery           */}
          <div className="mt-8">
            <div className="flex items-center gap-4 border-2 p-4 rounded-t-lg">
              <div className="text-4xl">
                <TbTruckDelivery />
              </div>
              <div>
                <h5 className="font-medium">Free delivery</h5>
                <p className="text-sm">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-2 p-4 border-t-0 rounded-b-lg">
              <div className="text-4xl">
                <MdOutlineSwapHoriz />
              </div>
              <div>
                <h5 className="font-medium">Return delivery</h5>
                <p className="text-sm">Free 30 Days Delivery Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MessageModal />
    </div>
  );
}

export default ProductDetail;
