import { useEffect, useState } from "react";
import loader from '../assets/1484.gif'
function Loader() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(()=>{
        document.onreadystatechange = () =>{
            if(document.readyState === 'complete'){
                console.log('complete')
                setIsLoading(false);
            }
        }
    }, [])
    return ( 
        <>
        {isLoading && 
        <div className="fixed z-50 top-0 left-0 w-full h-[100dvh] bg-white flex flex-col justify-center">
            <div className="flex justify-center items-center">
                <img src={loader} alt="loader"/>
            </div>
        </div>}
        </>
    );
}

export default Loader;