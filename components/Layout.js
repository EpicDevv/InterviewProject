import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col ">
      <Nav />

      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
