import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
function Login() {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth(app);
    const handleSubmit = ()=>{
        if(email !== '' && password !== ''){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const user = userCredential.user;
                console.log(user);
                toast.success('Logged in successfully')
                navigate('/')
            }).catch((error)=>{
                console.log(error)
                toast.error(error.message)
            })
        }else{
            alert('please fill in all fields')
        }
    }
    return ( 
        <>
            <div className="w-full h-full flex bg-black bg-opacity-50 fixed top-0 left-0 overflow-hidden">
                <div className="bg-blue-500 text-white flex items-center justify-center space-x-1 cursor-pointer w-0 lg:w-1/2">
                        <i className="fa-solid fa-blog text-md md:text-xl border-2 p-2 rounded-full w-fit"></i><span className="font-bold text-md md:text-xl cursor-pointer">BloggerGram</span>
                </div>
                <div className="bg-white flex flex-col items-center justify-center  text-blue-500 mx-auto w-full lg:w-1/2 p-2 rounded-lg">
                    <div className="flex flex-col w-full p-2">
                        <div className='w-full flex justify-between items-center'>
                            <div className='w-full flex flex-col space-y-10'>
                                <div className='md:hidden w-full flex items-center justify-center text-2xl '>
                                    <i className="fa-solid fa-blog text-md md:text-xl border-2 border-blue-500 p-2 rounded-full w-fit"></i>
                                    <span className="font-bold text-md md:text-xl cursor-pointer">BloggerGram</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold uppercase">Log In</h2>
                                    <p className="mb-8">Not Yet Signed Up? <Link to='/Signup'className=" underline">Sign Up</Link></p>
                                </div>
                            </div>
                            <Link to='/' className='p-2 '>
                                <i className="fa-solid fa-x border-2 border-blue-500 rounded-md p-1"></i>
                            </Link>
                        </div>
                        <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}} className="flex flex-col space-y-4 w-full">
                            <label className="flex flex-col">
                                Email: 
                                <input 
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                                type="email" 
                                name="email" 
                                className="p-2 border-b-2 border-blue-500 outline-none" 
                                value={email}/>
                            </label>
                            <label className="flex flex-col">
                                Password:
                                <input 
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                type="password" 
                                name="password" 
                                className="p-2 border-b-2 border-blue-500 outline-none" 
                                value={password}/>
                            </label>
                            <input type="submit" value="Log in" className="cursor-pointer p-2 bg-blue-500 text-white"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;