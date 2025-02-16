import React from 'react'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UrlGenrator from './components/UrlGenrator';

const App = () => {

  return (
    <>
      <ToastContainer />
      <Navbar/>
      <Modal/>
      <UrlGenrator/>
    </>
  )
}

export default App