import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import Workshop from './pages/Workshop'
import Lifestyle from './pages/Lifestyle'
import Description from './pages/Description'
function App() {


  return (
   <Router>
     
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/workshops' element={<Workshop/>}/>
      <Route path='/lifestyle' element={<Lifestyle/>}/>
      <Route path='/description/:productName' element={<Description/>}/>
     </Routes>
     <Footer/>
   </Router>
  )
}

export default App
