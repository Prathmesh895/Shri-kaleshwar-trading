import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import Login from './pages/login'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Admin from './pages/admin'
import Purchase from './components/admin/purchase'
import Sell from './components/admin/sell'
import Farmerlist from './components/admin/farmerlist'
import Settings from './components/admin/settings'
import Dashboard from './components/admin/dashboard'

function App() {


  return (

    <div className='flex flex-col dark:bg-black '>
      <div className='mb-[72px]'><Navbar /></div>    
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='purchase' element={<Purchase />} />
          <Route path='sell' element={<Sell />} />
          <Route path='farmers' element={<Farmerlist />} />
          <Route path='settings' element={<Settings />} />

        </Route>
      
      </Routes>
      <Footer />
    </div>

  )
}

export default App
