import { NavLink } from 'react-router';
//import logo from '../assets/images/logo.svg';

const Navbar = () => {
    return ( 
        <header>
            <NavLink to={`/`}><img src='#' alt='Little Lemon logo'/></NavLink>
            <nav>
                <NavLink to={`/`}>Home</NavLink>
                <NavLink to={`/menu`}>Menu</NavLink>
                <NavLink to={`/reservation`}>Resrvation</NavLink>
            </nav>
        </header>
     );
}
 
export default Navbar;