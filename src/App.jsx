import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header' 
import Footer from './footer'
import Home from './Home'

function App() {
  return (
  <>
  <Header/>
  <Home name="suhail"  age="20"/>
  <Footer/>
  </>
  );

}

export default App
