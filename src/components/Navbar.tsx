import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase";
function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [viewProfile, setViewProfile] = useState(false);
    const navigate = useNavigate()
    const auth = getAuth(app);
    const UserRef = useRef<HTMLDivElement | null>(null);
    const [loggedin, setLoggedIn] = useState<boolean>(false);
    const handleSignOut = ()=>{
        signOut(auth).then(()=>{
            navigate('/')
            console.log('signed out')
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setLoggedIn(true);
                UserRef.current.textContent = user.displayName;
                
            }else{
                setLoggedIn(false);
                console.log('no user signed in')
            }
        })
    }, [auth])
    return ( 
        <>
            <div className="w-full bg-blue-500 text-gray-100">
                <div className="relative container mx-auto h-fit flex items-center justify-between ">
                    <NavLink to={'/'} className="flex items-center space-x-1 p-2 cursor-pointer">
                        <i className="fa-solid fa-blog text-md md:text-xl border-2 p-2 rounded-full w-fit"></i><span className="font-bold text-md md:text-xl cursor-pointer">BloggerGram</span>
                    </NavLink>
                    <div className="flex items-center space-x-2 md:space-x-6">  
                        <NavLink to={'/Upload'} className='flex items-center space-x-1 uppercase border-b-2 ease-linear duration-150 border-b-transparent hover:border-b-gray-200 p-2'>
                            <i className="fa-solid fa-pen"></i><span className="hidden md:block">Upload</span>
                        </NavLink>
                        <NavLink to={'/Profile'} className='relative flex items-center space-x-1 uppercase border-b-2 ease-linear duration-150 border-b-transparent hover:border-b-gray-200 p-2'>
                            <i className="fa-solid fa-user" onMouseEnter={()=>{
                                setViewProfile(!viewProfile)
                            }} onClick={()=>{
                                setViewProfile(!viewProfile)
                            }}></i>
                            <div 
                                className=
                                {
                                viewProfile ? 
                                `absolute ${loggedin ? 'block' : 'hidden'} top-8 rounded-md left-0 bg-white md:bg-transparent text-blue-500 md:text-white p-2 md:p-0 md:static` 
                                : 
                                `${loggedin ? 'block' : 'hidden'} absolute top-8 rounded-md left-0 bg-white md:bg-transparent text-blue-500 md:text-white p-2 md:p-0 md:static`
                                } 
                                ref={UserRef}>
                                </div>
                            {loggedin ? '' : <span className="hidden md:block">Profile</span>}
                        </NavLink>
                        {!loggedin ? 
                            <div className="">
                                <div className="block md:hidden text-xl p-1" onClick={()=>{
                                    setClicked(!clicked);
                                }}>
                                    {!clicked ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-x"></i>}
                                </div>
                                <div className={clicked ? 'flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 absolute bg-blue-500 md:bg-transparent md:static right-0 p-4 md:p-0' : 'hidden md:flex flex-row space-x-3'}>
                                <NavLink to={'/Login'} className='bg-white text-blue-500 hover:bg-transparent hover:border-white hover:text-white px-2 md:px-4 py-1 rounded-lg border-2 border-transparent ease-in-out duration-200'>
                                    Login
                                </NavLink>
                                <NavLink to={'/Signup'} className='border-2 border-white hover:border-transparent hover:bg-white hover:text-blue-500 px-2 md:px-4 py-1 rounded-lg ease-in-out duration-200'>
                                    Signup
                                </NavLink>
                                </div> 
                            </div>
                            : 
                            <div 
                            className="border-2 border-white rounded-md px-2 py-1 cursor-pointer"
                            onClick={()=>{
                                handleSignOut()
                            }}
                            >
                                <i className="fa-solid fa-right-from-bracket"></i> <span className="hidden md:inline-block">Log Out</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;  