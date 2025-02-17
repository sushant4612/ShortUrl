import React from 'react';
import { LineChart, Link } from 'lucide-react';

const LoginCta = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-gray-900 rounded-lg border border-gray-800 shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Unlock Premium Features
        </h2>
        <p className="text-gray-400">
          Sign in to access advanced URL management tools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-5 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors duration-200">
          <div className="flex items-center mb-3">
            <LineChart className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-medium text-white">Track Clicks</h3>
          </div>
          <p className="text-sm text-gray-400">
            Monitor your links' performance with detailed click analytics
          </p>
        </div>

        <div className="p-5 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors duration-200">
          <div className="flex items-center mb-3">
            <Link className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-medium text-white">Manage URLs</h3>
          </div>
          <p className="text-sm text-gray-400">
            Organize and manage all your shortened links in one place
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <button
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-lg transition-colors duration-200"
          onClick={() => {/* Add your login handler */}}
        >
          Log In to Get Started
        </button>
        <p className="mt-4 text-sm text-gray-400">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
            Sign up free
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginCta;