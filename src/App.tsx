import{Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Dash from './pages/Dash/Dash';
import Signup from './pages/signup/Signup';
import Login from './pages/Login/Login';
import Profile from './pages/profile/Profile';
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
            <Route path='/Dash' element={<Dash/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Profile' element={<Profile/>}/>
          </Routes>
        </div>
      </AppContextProvider>
    </>
  )
}

export default App
