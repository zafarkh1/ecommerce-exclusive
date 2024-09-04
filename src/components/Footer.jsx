import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

function Footer(props) {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {/* Subscribe Section */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="lg:text-3xl text-xl font-semibold tracking-widest">
            <a href="#">Exclusive</a>
          </h4>
          <p className="mt-4 sm:text-base text-sm">Subscribe</p>
          <p className="text-gray-400 sm:text-base text-sm">
            Get 10% off your first order
          </p>
          <div className="mt-4">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 sm:px-3 px-1 text-black rounded-l-md outline-none w-2/3 sm:text-base text-xs"
              />
              <button className="bg-white text-black sm:px-2 px-1 rounded-r-md">
                →
              </button>
            </form>
          </div>
        </div>

        {/* Support Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-semibold text-lg">Support</h3>
          <p className="mt-4 sm:text-base text-sm">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="sm:text-base text-sm">exclusive@gmail.com</p>
          <p className="sm:text-base text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Links */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-semibold text-lg">Account</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="relative group">
                My account
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative group">
                Login / Register
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative group">
                Cart
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative group">
                Wishlist
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative group">
                Shop
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-semibold text-lg">Quick Link</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="relative group">
                Privacy Policy
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative group">
                Terms of Use
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative group">
                FAQ
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative group">
                Contact
                <span
                  className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 transform scale-x-0 
                group-hover:scale-x-90 transition-transform duration-500 ease-linear rounded-full"
                ></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="col-span-2 xl:col-span-1 sm:mx-0 mx-auto sm:text-left text-center flex flex-col sm:items-baseline items-center">
          <h3 className="font-semibold text-lg">Download App</h3>
          <p className="mt-4 text-gray-400">Save $3 with App New User Only</p>
          <div className="flex gap-2 mt-4">
            <img
              src="/images/playmarket.png"
              alt="Google Play"
              className="h-10"
            />
            <img src="/images/appstore.png" alt="App Store" className="h-10" />
          </div>
          <div className="mt-4 flex gap-4 text-white text-xl">
            <a href="https://facebook.com">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://twitter.com">
              <CiTwitter />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
