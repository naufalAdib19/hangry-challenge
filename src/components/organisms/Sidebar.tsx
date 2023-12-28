import UserNavigationMenu from "../atoms/UserNavigationMenu";
import { useContext } from 'react'
import { GlobalContext } from "../../helper/context";

const SideBar = () => {
    const { isNavbarActive } = useContext(GlobalContext)

    return(
        <div className={`h-screen w-full right-0 fixed z-20 bg-white flex items-center justify-center ${isNavbarActive ? '' : 'translate-x-full'} transition duration-300`}>
            <UserNavigationMenu/>
        </div>
    )
}

export default SideBar