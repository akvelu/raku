import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer.jsx';
import Header from '../component/Header.jsx';

 function MainLayout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
export default MainLayout;