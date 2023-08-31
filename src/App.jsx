import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/about" element={<Pages.About />} />

        <Route path="/colours">
          <Route index element={<Pages.Colour />} />
          <Route path=":id" element={<Pages.ColourItem />} />
        </Route>

        <Route path="*" element={<Pages.NotFound />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
