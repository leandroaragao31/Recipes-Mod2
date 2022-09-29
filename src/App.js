import React from 'react'
import {GlobalStyle} from './Components/Header/Style'
import Header from './Components/Header/Header'
import Latest from './Components/Latest/Latest'
import About from './Components/About/About'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'

const App = () => {
  return(
    <>
      <GlobalStyle/>
      <Header/>
      <Latest/>
      <About/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App