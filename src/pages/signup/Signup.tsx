import {Link, useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase';
import { useState } from 'react';


function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const naviagate = useNavigate();
    const auth: any = getAuth(app);
    const handleSubmit = async ()=>{
        if(firstName !== '' && lastName !== '' && password != '' && confirmPassword !== ''){
            const displayName = `${firstName} ${lastName}`
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials)=>{
                const user = userCredentials.user;
                console.log(user);
            }).catch((error)=>{
                console.log(error);
                alert(error.message)
            })
            await updateProfile(auth.currentUser, {displayName: displayName})
            .catch((err)=>{console.log(err)})
            naviagate('/Login')
        }else{
            alert('fill all details')
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
                            <div>
                                <h2 className="text-xl font-bold uppercase">Sign Up</h2>
                                <p className="mb-8">Already signed up? <Link to='/Login' className=" underline">Log in</Link></p>
                            </div>
                            <Link to='/' className='p-2 '>
                                <i className="fa-solid fa-x border-2 border-blue-500 rounded-md p-1"></i>
                            </Link>
                        </div>
                        <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}} className="flex flex-col space-y-4 w-full">
                            <div className="flex items-center gap-2 w-full">
                                <label className="flex flex-col w-1/2">
                                    First Name:
                                    <input onChange={(e)=>{
                                        setFirstName(e.target.value)
                                    }} 
                                    type="text" 
                                    className="p-2 border-b-2 border-blue-500 outline-none" 
                                    name="firstName" 
                                    value={firstName}/>
                                </label>
                                <label className="flex flex-col w-1/2">
                                    Last Name:
                                    <input 
                                    onChange={(e)=>{
                                        setLastName(e.target.value)
                                    }}
                                    type="text" 
                                    className="p-2 border-b-2 border-blue-500 outline-none" 
                                    name="lastName" 
                                    value={lastName}/>
                                </label>
                            </div>
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
                            <label className="flex flex-col">
                                Confirm Password:
                                <input 
                                onChange={(e)=>{
                                    setConfirmPassword(e.target.value)
                                }}
                                type="password" 
                                name="confirmPassword" 
                                className="p-2 border-b-2 border-blue-500 outline-none" 
                                value={confirmPassword}/>
                            </label>
                            <input type="submit" value="Sign Up" className="cursor-pointer p-2 bg-blue-500 text-white"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;