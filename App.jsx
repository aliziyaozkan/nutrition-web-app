
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router'
import Home from './pages/Home'
import Diet from './pages/Diet'
import Calorie from './pages/Calorie'
import Footer from './components/Footer'
function App() {

  return (
    <div>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/diyetler' element={<Diet />} />
      <Route path='/kalori-hesabi' element={<Calorie />} />
     </Routes>
     <Footer />
    </div>
  )
}

export default App
