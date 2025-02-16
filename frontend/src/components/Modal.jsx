import React, { useContext, useState } from "react";
import { UrlContext } from "../context/context";
import axios from "axios"
import { toast } from "react-toastify";

const Modal = () => {
  const {backendUrl, setToken} = useContext(UrlContext);
  const { isOpen, setIsOpen } = useContext(UrlContext);
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => setIsSignIn((prev) => !prev);

  const fields = [
    { label: "Name", type: "text", placeholder: "Enter your name" , set: setUsername},
    { label: "Password", type: "password", placeholder: "Enter your Password" , set: setPassword},
  ];

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        const res = await axios.post(`${backendUrl}/user/login`, {username, password})
        if(res.data.success){
          setToken(res.data.data)
          toast.success(res.data.message);
          localStorage.setItem('token', res.data.data)
          setIsOpen(false);
        }
      } else {
        const res = await axios.post(`${backendUrl}/user/register`, {username, password})
        if(res.data.success){
          setToken(res.data.data)
          toast.success(res.data.message);
          localStorage.setItem('token', res.data.data)
          setIsOpen(false);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-20 inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm animate-fade-in">
      <div className="bg-gray-900 text-white rounded-2xl shadow-2xl p-6 w-96 transform transition-all scale-95 animate-scale-in">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <h3 className="text-2xl font-semibold text-white">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h3>
          <button
            className="text-gray-400 hover:text-red-500 transition-colors"
            onClick={handleClose}
          >
            x
          </button>
        </div>

        {/* Dynamic Form */}
        <form className="space-y-5 mt-4" onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-300">
                {field.label}
              </label>
              <input
                onChange={(e) => field.set(e.target.value)}
                type={field.type}
                className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="mt-3 text-center text-sm text-gray-400">
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={toggleMode}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Modal;
