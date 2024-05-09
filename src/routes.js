import React from "react"
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Repository from './pages/Repository'

function RoutesApp() {
  return(
    <Routes>
      <Route path="/" element={ <Main/> } />
      <Route path="/repository/:repositoryName" element={ <Repository/> } />
    </Routes>
  )
}

export default RoutesApp