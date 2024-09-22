import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-400 p-4">
      <ul className="flex justify-between">
        <li>
          <Link to="/" className="flex items-center text-white">
            <FaHome className="mr-2" />
            Home
          </Link>
        </li>
        <li className="relative">
          <Link to="/cart" className="flex items-center text-white">
            <FaShoppingCart className="mr-2" />
            Cart
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-green-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
