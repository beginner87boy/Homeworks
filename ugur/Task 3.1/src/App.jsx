import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import Main from './layouts/Body'
import Footer from './layouts/Footer'
import Body from './layouts/Body'
import Card from './conponents/Cards/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}

export default App