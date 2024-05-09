import React from 'react'
import { BrowserRouter } from "react-router-dom"
import RoutesApp from './routes'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesApp/>
      </BrowserRouter>
      
    </>
  )
}

export default App
