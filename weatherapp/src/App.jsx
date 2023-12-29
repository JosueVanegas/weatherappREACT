import './App.css'
import NavBar from './components/NavBar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
function App() {
  return (
    
    
    <>
    <NavBar></NavBar>
      <Routes>
      
      <Route path='/' element={<Home></Home>}/>
      <Route path='/about' element={<About></About>}/>
      </Routes>
    </>
    
  
  )
}

export default App
