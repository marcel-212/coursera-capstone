import { NavLink } from 'react-router';
import logo from '../assets/Logo .svg';
import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";


const Navbar = () => {
    return ( 
        <header>
            <NavLink to={`/`}><img src={logo} alt='Little Lemon logo'/></NavLink>
            <nav>
                <NavLink className={({isActive}) => isActive ? "active" : ''} to={`/`}><FaHome/> Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "active" : ''} to={`/menu`}><MdRestaurantMenu/> Menu</NavLink>
                <NavLink className={({isActive}) => isActive ? "active" : ''} to={`/reservation`}><FaCalendarAlt/> Reservation</NavLink>
            </nav>
        </header>
     );
}
 
export default Navbar;