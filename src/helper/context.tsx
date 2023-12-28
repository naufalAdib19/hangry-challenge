import React, { createContext, useState } from "react";

type contextType = {
    isNavbarActive: boolean,
    setIsNavbarActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<contextType>({
    isNavbarActive: false,
    setIsNavbarActive: () => {}
});

const Provider = ({children}: {children: React.ReactNode}) => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    
    return(
        <Context.Provider value={{isNavbarActive, setIsNavbarActive}}>
            {children}
        </Context.Provider>
    )
}

export const GlobalContext = Context;
export default Provider;