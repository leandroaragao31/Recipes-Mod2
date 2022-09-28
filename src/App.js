import React from 'react'
import {GlobalStyle} from './Components/Header/Style'
import Header from './Components/Header/Header'
import Latest from './Components/Latest/Latest'
import About from './Components/About/About'

const App = () => {
  return(
    <>
      <GlobalStyle/>
      <Header/>
      <Latest/>
      <About/>
    </>
  )
}

export default App