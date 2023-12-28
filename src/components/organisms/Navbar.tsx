import Logo from "../atoms/Logo"
import UserNavigationMenu from "../atoms/UserNavigationMenu"
import HamburgerButton from "../atoms/HamburgerButton"
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return(
        <div className="flex justify-between py-4 px-5 md:px-12 lg:px-36 items-center fixed w-full bg-white z-50 shadow-sm">
            <div>
                <Logo/>
            </div>
            <div>
                {isMobile ? <HamburgerButton/> : <UserNavigationMenu/>}
            </div>
        </div>
    )
}

export default Navbar