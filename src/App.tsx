import{Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/Login/Login';
function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto">  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
