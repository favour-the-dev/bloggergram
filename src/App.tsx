import{Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContextProvider} from './context/context';
function App() {
  return (
    <>
      <AppContextProvider>
        <ToastContainer/>
        <Navbar />
        <div className="container mx-auto overflow-auto">  
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Login' element={<Login/>}/>
          </Routes>
        </div>
      </AppContextProvider>
    </>
  )
}

export default App
