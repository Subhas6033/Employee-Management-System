import React from 'react'
import {Footer, Header, Container} from './components/index'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


function App() {

  const isDark = useSelector((state)=> state.theme.isDarkMode)

  return (
    <>
      <Header />
      <main className={`${isDark ? "bg-gray-800" : "bg-slate-300"} transition-all duration-300 ease-in`}>
      <Container>
        <Outlet />
      </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
