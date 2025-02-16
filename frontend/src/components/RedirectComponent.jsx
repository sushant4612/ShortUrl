import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const RedirectComponent = () => {
  const { id } = useParams();

  const redirect = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BU}/${id}`); 
      
      if (res.data.redirectUrl) {
        window.location.href = res.data.redirectUrl; 
      } else {
        toast.error("Invalid URL");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    redirect();
  }, [id]);

  return <div>Redirecting...</div>;
};

export default RedirectComponent;