import React, { useContext } from 'react';
import { UrlContext } from '../context/context';

const Navbar = () => {
  const { setIsOpen, token, logout } = useContext(UrlContext);

  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 text-white shadow-lg border-b border-gray-800">
        <h1 className="text-xl sm:text-2xl font-bold">
          Short<span className="text-blue-500">Url</span>
        </h1>
        {token === '' ? (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-sm sm:text-base transition duration-300"
            onClick={() => setIsOpen(true)}
          >
            Create Account
          </button>
        ) : (
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-sm sm:text-base transition duration-300"
            onClick={() => logout()}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;