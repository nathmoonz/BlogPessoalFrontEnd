import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './assets/components/footer/Footer'
import Navbar from './assets/components/navbar/Navbar'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App