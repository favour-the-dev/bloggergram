import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
function NotSignedIn({showModalProp, setShowModalProp}: {showModalProp: boolean, setShowModalProp: Dispatch<SetStateAction<boolean>>}) {
    return ( 
        <>
        <div className={showModalProp ? "flex flex-col items-center justify-center fixed top-0 left-0 w-[100dvw] h-[100dvh] bg-black bg-opacity-60 z-[1500] overflow-hidden" : "hidden"}>
            <div className="rounded-lg relative w-2/3 lg:w-fit p-8 bg-blue-500 text-white flex flex-col space-y-4">
                <div>
                    <h2>Please Sign In To Continue.</h2>
                </div>
                <div onClick={()=>{
                    setShowModalProp(false);
                }} className="absolute right-2 top-0 p-1 text-xs border-2 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"><i className="fa-solid fa-x"></i></div>
                <div className="flex space-x-4 items-center w-full justify-between">
                    <NavLink to={'/Login'} className='text-center w-1/2 bg-white text-blue-500 hover:bg-transparent hover:border-white hover:text-white px-2 md:px-4 py-1 rounded-lg border-2 border-transparent ease-in-out duration-200'>
                        Login
                    </NavLink>
                    <NavLink to={'/Signup'} className='text-center w-1/2 border-2 border-white hover:border-transparent hover:bg-white hover:text-blue-500 px-2 md:px-4 py-1 rounded-lg ease-in-out duration-200'>
                        Signup
                    </NavLink>
                </div>
            </div>
        </div>
        </>
    );
}

export default NotSignedIn;