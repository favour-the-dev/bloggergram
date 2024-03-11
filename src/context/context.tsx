import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface App{
    signedIn: boolean
    setSignedIn: Dispatch<SetStateAction<boolean>>
}
const defaultValue = {
    signedIn: false,
    setSignedIn: ()=>{}
}
const AppContext = createContext<App>(defaultValue)

export const AppContextProvider = ({children}: {children: ReactNode})=>{
    const [signedIn, setSignedIn] = useState<boolean>(false);
    return (
        <>
            <AppContext.Provider value={{
                signedIn,
                setSignedIn
            }}>
                {children}
            </AppContext.Provider>
        </>
    );
}
export default AppContext;