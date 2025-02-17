import React from 'react';
import { X, ExternalLink } from "lucide-react";

const UrlTable = () => {
  const [urls, setUrls] = React.useState([
    {
      longUrl: "https://google.com",
      shortUrl: "http://localhost:5173/gfO2v5",
      count: 0,
      _id: "67ab69353c880c4dd35bf8c0"
    },
    {
        longUrl: "https://google.com",
        shortUrl: "http://localhost:5173/gfO2v5",
        count: 0,
        _id: "67ab69353c880c4dd35bf8c0"
      }
  ]);

  const handleDelete = (id) => {
    setUrls(urls.filter(url => url._id !== id));
  };

  // Mobile card view
  const MobileView = () => (
    <div className="space-y-4 md:hidden">
      {urls.map((url) => (
        <div key={url._id} className="bg-gray-950 border border-slate-700 rounded-lg p-5 transition-all duration-200 hover:border-slate-600 shadow-lg">
          <div className="flex justify-between items-start mb-3">
            <div className="text-sm font-medium text-slate-300">Long URL</div>
            <button
              onClick={() => handleDelete(url._id)}
              className="p-2 hover:bg-slate-800/50 rounded-full hover:text-red-400 transition-colors duration-200"
              aria-label="Delete URL"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <a 
            href={url.longUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 text-sm break-all group flex items-center gap-1 transition-colors duration-200"
          >
            {url.longUrl}
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
          
          <div className="text-sm font-medium text-slate-300 mt-4 mb-1">Short URL</div>
          <a 
            href={url.shortUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 text-sm break-all group flex items-center gap-1 transition-colors duration-200"
          >
            {url.shortUrl}
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
          
          <div className="flex items-center mt-4 bg-slate-900/50 p-2 rounded-md">
            <span className="text-sm font-medium text-slate-300">Clicks:</span>
            <span className="text-slate-300 ml-2 font-medium">{url.count}</span>
          </div>
        </div>
      ))}
    </div>
  );

  // Desktop table view
  const DesktopView = () => (
    <div className="hidden md:block rounded-lg border border-slate-700 bg-gray-950 p-6 shadow-lg transition-all duration-200 hover:border-slate-600">
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="px-4 py-3 text-left text-slate-200 font-semibold">Long URL</th>
            <th className="px-4 py-3 text-left text-slate-200 font-semibold">Short URL</th>
            <th className="px-4 py-3 text-left text-slate-200 font-semibold">Clicks</th>
            <th className="px-4 py-3 text-right text-slate-200 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id} className="border-b border-slate-700/50 last:border-0 hover:bg-slate-900/50 transition-colors duration-200">
              <td className="px-4 py-3 text-slate-300">
                <a 
                  href={url.longUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 truncate block max-w-xs group flex items-center gap-1 transition-colors duration-200"
                >
                  {url.longUrl}
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </td>
              <td className="px-4 py-3 text-slate-300">
                <a 
                  href={url.shortUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 truncate block max-w-xs group flex items-center gap-1 transition-colors duration-200"
                >
                  {url.shortUrl}
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </td>
              <td className="px-4 py-3 text-slate-300 font-medium">{url.count}</td>
              <td className="px-4 py-3 text-right">
                <button
                  onClick={() => handleDelete(url._id)}
                  className="p-2 hover:bg-slate-800/50 text-red-400  rounded-full hover:text-red-400 transition-colors duration-200"
                  aria-label="Delete URL"
                >
                  <X className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <MobileView />
      <DesktopView />
    </div>
  );
};

export default UrlTable;