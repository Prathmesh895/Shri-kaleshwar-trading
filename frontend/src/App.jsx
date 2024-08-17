import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import Login from './pages/login'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Book from './components/addbook'
import Show from './components/show'

function App() {


  return (

    <div className='flex flex-col'>
      <div className='mb-[72px]'><Navbar /></div> 
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/about' element={<Book />} /> */}
      </Routes>
      <Footer />
    </div>

  )
}

export default App
