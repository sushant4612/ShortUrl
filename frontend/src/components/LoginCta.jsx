import React, { useContext } from 'react';
import { LineChart, Link } from 'lucide-react';
import { UrlContext } from '../context/context';

const LoginCta = () => {
  const {setIsOpen} = useContext(UrlContext);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-900 rounded-lg border border-gray-800 shadow-lg text-center">
      <h2 className="text-xl font-semibold text-white mb-2">Unlock Premium</h2>
      <p className="text-gray-400 mb-4">Sign in for advanced tools</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {[{ icon: LineChart, title: "Track Clicks" }, { icon: Link, title: "Manage URLs" }].map((item, i) => (
          <div key={i} className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition">
            <div className="flex items-center justify-center mb-2">
              <item.icon className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="text-white text-sm font-medium">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg" onClick={() => {setIsOpen(true)}}>
        Sign In
      </button>
    </div>
  );
};

export default LoginCta;
