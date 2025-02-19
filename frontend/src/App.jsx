import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UrlGenrator from './components/UrlGenrator';
import { UrlContext } from './context/context';
import { Route, Routes } from 'react-router-dom';
import RedirectComponent from './components/RedirectComponent';

const App = () => {
  const {isOpen} = useContext(UrlContext); 
  return (
    <>
      <ToastContainer />
      <Navbar/>
      <Modal/>
      {
        isOpen ? null : <UrlGenrator/>
      }
      <Routes>
        <Route path="/:id" element={<RedirectComponent/>}/>
      </Routes>
    </>
  )
}

export default App