import app from "../../firebase/firebase";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import {  useEffect, useState, useRef } from "react";
import CompLoader from "../../components/CompLoader";

function Profile() {
    const auth = getAuth(app)
    const userRef = useRef<HTMLDivElement>()
    const [loading, setIsLoading] = useState<boolean>(false)
    useEffect(()=>{
        setIsLoading(true)
        setTimeout(()=>{
            onAuthStateChanged(auth, (user)=>{
                if(user){
                    userRef.current.innerHTML = `<span class="text-xl">Name: ${user.displayName}</span>
                    <span class="text-xl">Email: ${user.email}</span>
                    <span class="text-xl">PhoneNo: ${user.phoneNumber ? user.phoneNumber : 'not available'}</span>
                    <span class="text-xl">Date Joined: ${new Date(user.metadata.creationTime).toDateString()}</span>
                    `
                    setIsLoading(false)
                    }
            })
        }, 800)
    }, [auth])
    return ( 
        <>
        <CompLoader isLoading={loading}/>
        <div className="text-blue-500 p-4 h-full">
            <h2 className="text-xl font-bold md:text-3xl uppercase">Profile Page</h2>
            <div className="w-full h-full flex flex-col md:flex-row justify-between my-4 gap-4">
                <div className="w-[200px] h-[200px] mx-auto md:mx-0 rounded-full md:rounded-sm flex flex-col items-center justify-center bg-blue-500 bg-opacity-30">
                    <i className="fa-solid fa-cloud-arrow-up text-5xl"></i>
                    <span className="uppercase">uploade image</span>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full md:w-3/4"> 
                    <div className="flex flex-col space-y-4 capitalize" ref={userRef}>
                    </div>
                    <div className="">
                        <button className="border-2 border-blue-500 px-3 text-lg cursor-pointer md:text-xl md:px-4">
                        Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Profile;