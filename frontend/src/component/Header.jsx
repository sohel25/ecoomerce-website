import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

function Header() {

const userSignin = useSelector(state => state.userSignin);
const {userInfo} = userSignin;
const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

//     const openMenu = () => {
//         document.querySelector(".sidebar").classList.add("open");

//     }
//     const closeMenu = () => {
//         document.querySelector(".sidebar").classList.remove("open");

//     }
    return (

        <div className="grid-container">
            <header className="header">
                <div className="brand">
                    {/* <button onClick={openMenu}>
                        &#9776;
                     </button> */}
                    
                    <Link to="/">amazona</Link>
                </div>
                <div className="header-links">
                    {/* <a href="cart.html">Cart</a> */}
                    <Link to="/cart">Cart
                    {cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                    )}
                    </Link>
                    {
                        userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                        <Link to="/signin" >Sign In</Link>
                    }
   
                    {/* <a href="signin.html">Sign In</a> */}
                </div>
            </header>
            {/* <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    {/* <li>
                        <a href="index.html">Pants</a>
                    </li>

                    <li>
                        <a href="index.html">Shirts</a>
                    </li> */}
                     {/* <li>
              <Link to="/category/Pants">Pants</Link>
            </li>

            <li>
              <Link to="/category/Shirts">Shirts</Link>
            </li> */}

                {/* </ul>
            </aside> */} 

        </div>
     

    )
}
export default Header;
