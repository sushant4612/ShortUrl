import React, { useContext } from 'react';
import { UrlContext } from '../context/urlContext';

const Navbar = () => {
  const {setIsOpen, token, logout} = useContext(UrlContext);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
        <h1 className="text-2xl font-bold">
          Short<span className="text-blue-500">Url</span>
        </h1>
        { token ===  '' ?
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              onClick={() => setIsOpen(true)}
            >
              Create Account
            </button>
            :
            <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                onClick={() => logout()}
            >
              Logout
            </button>
        }
      </nav>
    </>
  );
};

export default Navbar;