import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import { UrlContext } from './context/urlContext'

const App = () => {
  const { token } = useContext(UrlContext)

  return (
    <>
      <Navbar/>
      <Modal/>
    </>
  )
}

export default App