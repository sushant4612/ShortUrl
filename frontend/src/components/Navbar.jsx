import React, { useState } from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
        <h1 className="text-2xl font-bold">
          Short<span className="text-blue-500">Url</span>
        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          onClick={() => setIsModalOpen(true)}
        >
          Create Account
        </button>
      </nav>

    </>
  );
};

export default Navbar;