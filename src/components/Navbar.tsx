import { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import NotSignedIn from "./NotSignedin";
import app from "../firebase/firebase";
import AppContext from "../context/context";
import loaderspin  from '../assets/1497.gif';
function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [loader, setLoader] = useState(false);
    // const [viewProfile, setViewProfile] = useState(false);
    const navigate = useNavigate()
    const auth = getAuth(app);
    const UserRef = useRef<any>(null);
    const [loggedin, setLoggedIn] = useState<boolean>(false);
    const {signedIn ,setSignedIn} = useContext(AppContext)
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleSignOut = ()=>{
        setLoader(true)
        setTimeout(()=>{
            signOut(auth).then(()=>{
                setSignedIn(false);
                location.reload()
                navigate('/')
                setLoader(false)
                console.log('signed out')
            }).catch((err)=>{
                console.log(err)
            })
        }, 1000)
    }
    const checkedSignedIn = (e:any)=>{
        if(e.target.value !== ''){
            if(signedIn === false){
                navigate('/')
                setShowModal(true)
            }else{
                setShowModal(false)
            }
        }
        
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setSignedIn(true)
                setLoggedIn(true);
                UserRef.current.textContent = user.displayName;
            }else{
                setSignedIn(false)
                setLoggedIn(false);
                console.log('no user signed in')
            }
        })
    }, [auth, setSignedIn])
    return ( 
        <>
            <NotSignedIn showModalProp={showModal} setShowModalProp={setShowModal}/>
            <div className="w-full bg-blue-500 text-gray-100">
                <div className="relative container mx-auto h-fit flex items-center justify-between">
                    <NavLink to={'/'} className="flex items-center space-x-1 p-2 cursor-pointer">
                        <i className="fa-solid fa-blog text-md md:text-xl border-2 p-2 rounded-full w-fit"></i><span className="font-bold text-lg md:text-xl cursor-pointer">BloggerGram</span>
                    </NavLink>
                    <div className="flex items-center space-x-2 md:space-x-6">  
                            <div className="">
                                <div className="block md:hidden text-xl p-3" onClick={()=>{
                                    setClicked(!clicked);
                                }}>
                                    {!clicked ? <i className="fa-solid fa-bars"></i> : 
                                    <i className="fa-solid fa-x"></i>}
                                </div>
                                <div className={clicked ? 
                                    'ease-linear duration-200 flex flex-col md:items-center md:flex-row space-y-2 md:space-y-0 md:space-x-3 absolute bg-blue-500 md:bg-transparent md:static right-0 p-4 md:p-0' 
                                    : 'hidden md:flex flex-row space-x-3'}>
                                    <div className="flex flex-col md:items-center md:space-x-2 md:flex-row" onClick={(e)=>{
                                        checkedSignedIn(e)
                                        setClicked(false)
                                    }}>
                                        <NavLink to={'/Search'}  className='flex items-center space-x-1 uppercase border-b-2 ease-linear duration-150 border-b-transparent hover:border-b-gray-200 p-2'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                            <span>Search</span>
                                        </NavLink>
                                        <NavLink to={'/Upload'} className='flex items-center space-x-1 uppercase border-b-2 ease-linear duration-150 border-b-transparent hover:border-b-gray-200 p-2'>
                                            <i className="fa-solid fa-pen"></i>
                                            <span className="block">Upload</span>
                                        </NavLink>
                                        <NavLink to={'/Profile'} className='relative flex items-center space-x-1 uppercase border-b-2 ease-linear duration-150 border-b-transparent hover:border-b-gray-200 p-2'>
                                            <i className="fa-solid fa-user"></i>
                                            <div 
                                                className={`${loggedin ? 'block' : 'hidden'} text-white`}
                                                ref={UserRef}>
                                                </div>
                                            {loggedin ? '' : <span className="block">Profile</span>}
                                        </NavLink>
                                    </div>
                                    {!loggedin ? 
                                    <div onClick={()=>{
                                        setClicked(false)
                                    }} className="w-full flex md:items-center flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                                        <NavLink to={'/Login'} className='bg-white text-blue-500 hover:bg-transparent hover:border-white hover:text-white px-2 md:px-4 py-1 rounded-lg border-2 border-transparent ease-in-out duration-200'>
                                            Login
                                        </NavLink>
                                        <NavLink to={'/Signup'} className='border-2 border-white hover:border-transparent hover:bg-white hover:text-blue-500 px-2 md:px-4 py-1 rounded-lg ease-in-out duration-200'>
                                            Signup
                                        </NavLink>
                                    </div>
                                    : 
                                    <div 
                                    className="flex items-center justify-center border-2 border-white rounded-md px-2 py-1 cursor-pointer"
                                    onClick={()=>{
                                        handleSignOut()
                                        setClicked(false)
                                    }}
                                    >
                                        {
                                            !loader ?
                                            <div className="flex items-center">
                                                <i className="fa-solid fa-right-from-bracket"></i> 
                                                <span className="inline-block">Log Out</span>
                                        </div> :
                                        <div className="w-6">
                                            <img src={loaderspin} alt="" />
                                        </div>  
                                        }
                                    </div>
                                }
                                </div> 
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;  