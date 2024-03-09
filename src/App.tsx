import{Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/Login/Login';
import Loader from './components/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <ToastContainer/>
      <Loader/>
      <Navbar />
      <div className="container mx-auto overflow-auto">  
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
