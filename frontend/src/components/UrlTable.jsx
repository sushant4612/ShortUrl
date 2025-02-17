import React from 'react';
import { X } from "lucide-react";

const UrlTable = () => {
  const [urls, setUrls] = React.useState([
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

  return (
    <div className="rounded-md border border-slate-700 bg-slate-900 p-4">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-slate-200 font-medium">Long URL</th>
            <th className="px-4 py-2 text-left text-slate-200 font-medium">Short URL</th>
            <th className="px-4 py-2 text-left text-slate-200 font-medium">Click Count</th>
            <th className="px-4 py-2 text-right text-slate-200 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id} className="border-t border-slate-700 hover:bg-slate-800">
              <td className="px-4 py-2 text-slate-300">
                <a href={url.longUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  {url.longUrl}
                </a>
              </td>
              <td className="px-4 py-2 text-slate-300">
                <a href={url.shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  {url.shortUrl}
                </a>
              </td>
              <td className="px-4 py-2 text-slate-300">{url.count}</td>
              <td className="px-4 py-2 text-right">
                <button
                  onClick={() => handleDelete(url._id)}
                  className="p-1 hover:bg-slate-700 rounded-full hover:text-red-400"
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
};

export default UrlTable;