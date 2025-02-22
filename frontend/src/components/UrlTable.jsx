import React, { useContext, useEffect, useState } from 'react';
import { X, ExternalLink } from "lucide-react";
import axios from 'axios';
import { UrlContext } from '../context/context';
import { toast } from 'react-toastify';

const UrlTable = () => {
  const { token, backendUrl } = useContext(UrlContext);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await axios.get(`${backendUrl}/url/list`, {
          headers: { Authorization: token },
        });
        setUrls(res.data.data);
      } catch (error) {
        toast.error("Failed to fetch URLs");
      }
    };
    fetchUrls();
  }, [token, backendUrl]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/url/${id}`, {
        headers: { Authorization: token },
      });
      setUrls(urls.filter((url) => url._id !== id));
      toast.success("URL deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete URL");
    }
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-700 bg-gray-950 p-6 shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-4 py-3 text-left text-gray-200 font-semibold w-2/5">Long URL</th>
              <th className="px-4 py-3 text-left text-gray-200 font-semibold w-2/5">Short URL</th>
              <th className="px-4 py-3 text-left text-gray-200 font-semibold w-1/6">Clicks</th>
              <th className="px-4 py-3 text-right text-gray-200 font-semibold w-1/12">Actions</th>
            </tr>
          </thead>
          <tbody>
            {urls.length > 0 ? (
              urls.map((url) => (
                <tr key={url._id} className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="px-4 py-3 text-gray-300 truncate max-w-[200px]">
                    <a href={url.longUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                      {truncateText(url.longUrl, 30)}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-gray-300 truncate max-w-[200px]">
                    <a href={url.shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                      {url.shortUrl}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-gray-300">{url.count}</td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => handleDelete(url._id)} className="p-2 text-red-400 hover:text-red-500">
                      <X className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-400 py-4">No URLs found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {urls.length > 0 ? (
          urls.map((url) => (
            <div key={url._id} className="border border-gray-700 bg-gray-950 p-4 rounded-lg shadow-md flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm font-semibold">Long URL</span>
                <a href={url.longUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  {truncateText(url.longUrl, 20)}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm font-semibold">Short URL</span>
                <a href={url.shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  {url.shortUrl}
                </a>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-300 font-medium">Clicks: {url.count}</p>
                <button onClick={() => handleDelete(url._id)} className="p-2 text-red-400 hover:text-red-500">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No URLs found</p>
        )}
      </div>
    </div>
  );
};

export default UrlTable;
