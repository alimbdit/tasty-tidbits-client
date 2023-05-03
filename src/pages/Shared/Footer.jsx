import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 px-5 lg:px-10 py-5 text-white">
      <div className="mt-2">
        <h1 className="lg:font-extrabold lg:text-4xl  font-bold text-2xl text-white text-center">
          Tasty <span className="text-amber-500">Tidbits</span>
        </h1>
        <hr className="mt-3 opacity-40" />
      </div>
      <div className="flex flex-col lg:flex-row gap-7 justify-between items-center lg:items-start mt-10">
        <div >
          <h1 className="font-bold text-2xl mb-5 uppercase">NEWSLETTER</h1>
          <div>
            <input
              type="text"
              placeholder="Your Email"
              className="input w-3/4 max-w-xs text-black rounded-full text-center"
            />
            <input
              type="submit"
              value="subscribe"
              className="input w-3/4 max-w-xs text-black rounded-full text-center font-bold btn-default uppercase mt-4"
            />
          </div>
          <div className="flex mt-3 gap-8">
            <FaTwitter className="border p-2 rounded-full w-8 h-8 hover:bg-amber-500" />
            <FaFacebookF className="border p-2 rounded-full w-8 h-8 hover:bg-amber-500" />
            <FaInstagram className="border p-2 rounded-full w-8 h-8 hover:bg-amber-500" />
            <FaDribbble className="border p-2 rounded-full w-8 h-8 hover:bg-amber-500" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-3 uppercase">Menu Links</h1>
          <ul>
            <li className="mb-1">
              <Link className="hover:text-amber-500 text-gray-300 mb-5" to="/">
                Poke Bowl
              </Link>{" "}
            </li>
            <li className="mb-1">
              <Link className="hover:text-amber-500 text-gray-300 mb-5" to="/">
                Grilled Mahi Mahi
              </Link>{" "}
            </li>
            <li className="mb-1">
              <Link className="hover:text-amber-500 text-gray-300 mb-5" to="/">
                Seared Scallops
              </Link>{" "}
            </li>
            <li className="mb-1">
              <Link className="hover:text-amber-500 text-gray-300 mb-5" to="/">
                Lobster Bisque
              </Link>{" "}
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-2xl mb-3 uppercase">About</h1>
          <ul>
            <li className="mb-1">
              <Link className="hover:text-amber-500 text-gray-300 mb-5" to="/">
                Our History
              </Link>{" "}
            </li>
            <li className="mb-1">
              <Link className="hover:text-amber-500 text-gray-300 mb-5" to="/">
                About Us Overview
              </Link>{" "}
            </li>
            <li className="mb-1">
              <Link className="hover:text-amber-500 text-gray-300 mb-5" to="/">
                Values In Action
              </Link>{" "}
            </li>
            <li className="mb-1">
              <Link className="hover:text-amber-500 text-gray-300 mb-5" to="/">
                Leadership Team
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-3 uppercase">Help</h1>
          <ul>
            <li className="mb-1">
              <Link className="hover:text-amber-500 text-gray-300 mb-5" to="/">
                FAQs
              </Link>{" "}
            </li>
            <li className="mb-1">
              <Link className="hover:text-amber-500 text-gray-300 mb-5" to="/">
                Contact Us
              </Link>{" "}
            </li>
            <li className="mb-1">
              <Link className="hover:text-amber-500 text-gray-300 mb-5" to="/">
                Gift Card Balance
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-center my-2">Copyright © 2023 Tasty Tidbits.</h1>
    </div>
  );
};

export default Footer;
