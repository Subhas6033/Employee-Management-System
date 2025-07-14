import React from 'react'
import {Footer, Header, Container} from './components/index'
import { Outlet } from 'react-router-dom'
// import { useSelector } from 'react-redux'


function App() {

  // const isDark = useSelector((state)=> state.theme.isDarkMode)

  return (
    <>
      <Container>
      <Header />
        <main className={`bg-[radial-gradient(ellipse_at_top_left,_#e1ecf0_0%,_#ededed_60%,_#eddd53_100%)] transition-all duration-300 ease-in`}>
        <Outlet />
      </main>
      <Footer />
      </Container>
    </>
  )
}

export default App
