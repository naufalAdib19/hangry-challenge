
import { useLocation } from 'react-router-dom'

const UserNavigationMenu = () => {
    const { pathname } = useLocation();
    
    return(
        <div>
            <ul className="flex flex-col gap-y-5 items-center md:items-start md:flex-row gap-x-4 lg:gap-x-9 text-nav-font-inactive text-[16px]">
                <li className={`${pathname == '/about' ? 'text-nav-font-active font-semibold' : ''}`}><a href="">Tentang Kami</a></li>
                <li className={`${pathname == '/outlets' ? 'text-nav-font-active font-semibold' : ''}`}><a href="">Semua Outlet</a></li>
                <li className={`${pathname == '/promo' ? 'text-nav-font-active font-semibold' : ''}`}><a href="">Promo</a></li>
                <li className={`${pathname == '/career' ? 'text-nav-font-active font-semibold' : ''}`}><a href="">Karier</a></li>
                <li className={`${pathname == '/' ? 'text-nav-font-active font-semibold' : ''}`}><a href="">Download App</a></li>
            </ul>
        </div>
    )
}

export default UserNavigationMenu