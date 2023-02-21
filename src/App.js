import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './page/Category.jsx'
import Home from './page/Home.jsx'
import MainLayout from './page/MainLayout.jsx'
import Products from './page/Products.jsx'
import Error from './page/Error.jsx'
import Contact from './page/Contact.jsx'
import './App.css'


const App = () => {
  return (
    <div>
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='category' element={<Category />} />
            <Route path='category/:productId' element={<Products />} />
            <Route path='contactus' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App