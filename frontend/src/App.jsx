import React from 'react'
import ViewUsers from './Pages/ViewUsers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Form from './Pages/Form'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ViewUsers/>} />
            <Route path='/create' element={<Form/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App