import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination '

const HomeLayout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Pagination/>
        <Footer />
    </div>
  )
}

export default HomeLayout