import "./navbar.scss";
import {NavLink} from 'react-router-dom'

const Navbar = ({cartCount}) => {
    return (
        <nav className="navigation">
                <div className="nav-content">
                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="#">Page</a>
                        <a href="#">Shop</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                        <a href="#">Offers</a>
                    </div>
                    <div className="nav-icons">
                        <img src="/img/account.svg"/>
                        <img src="/img/heart.svg"/>
                        <div className="nav-cart">
                            <NavLink to="/cart">
                            <img src="/img/cart.svg"/>
                            </NavLink>
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </div>
                        </div>
                    </div>
        </nav>        
     );
}
 
export default Navbar;