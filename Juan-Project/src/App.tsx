// import { useState } from 'react'
import React from 'react'
import './App.css'
import Name from './Components/Name'
import Blurb from './Components/Blurb'
import Business from './Components/Business'

const App: React.FC = () => {

  return (
    <>
      <head></head>
      <main>
        <Name />
        <Blurb />
        <Business />
      </main>
    </>
  )
}

export default App
