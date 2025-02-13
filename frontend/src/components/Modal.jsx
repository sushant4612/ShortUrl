import React from "react";

const Modal = ({ isOpen, onClose, title, fields, buttonText, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-96 transform transition-all scale-95 animate-scale-in">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <button
            className="text-gray-500 hover:text-red-500 transition-colors"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        
        {/* Dynamic Form */}
        <form className="space-y-5 mt-4" onSubmit={onSubmit}>
          {fields.map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700">{field.label}</label>
              <input
                type={field.type}
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;