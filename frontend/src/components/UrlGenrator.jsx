import React, { useContext, useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { UrlContext } from '../context/context';
import { toast } from 'react-toastify';

const UrlGenerator = () => {
  const { backendUrl, token } = useContext(UrlContext);
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerateUrl = async () => {
    if (!url.trim()) {
      toast.error('Please enter a valid URL');
      return;
    }

    try {
      if(!token){
          const res = await axios.post(`${backendUrl}/url/`, { url });
          toast.success(res.data.message);      
          setShortUrl(res.data.data);
      }else{
          const res = await axios.post(`${backendUrl}/url/`, { url }, {headers: {
            Authorization: token
          }});
          toast.success(res.data.message);      
          setShortUrl(res.data.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  const handleCopy = async () => {
    if (shortUrl) {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-950 px-6">
      {/* Main heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-10">
        <span className="text-white">Simplify Your </span>
        <span className="text-blue-500">URL</span>
      </h1>

      {/* URL Shortener Box */}
      <div className="w-full max-w-lg p-6 bg-gray-900 rounded-lg border border-gray-800 shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Generate a Short URL
        </h2>

        <div className="space-y-6">
          {/* Input Box */}
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your URL here"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-base"
          />

          {/* Generate Button */}
          <button
            onClick={handleGenerateUrl}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-lg"
          >
            Generate Short URL
          </button>

          {/* Shortened URL Output */}
          {shortUrl && (
            <div className="mt-6 space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={shortUrl}
                  readOnly
                  className="w-full p-3 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none text-base"
                />
                <button
                  onClick={handleCopy}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {copied ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-sm text-green-500 text-center">
                  Copied to clipboard!
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UrlGenerator;
