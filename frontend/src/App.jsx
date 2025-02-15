import React from 'react'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
      <ToastContainer />
      <Navbar/>
      <Modal/>
    </>
  )
}

export default App