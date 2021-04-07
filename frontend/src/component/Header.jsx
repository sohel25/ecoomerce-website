import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../action/userActions';

function Header(props) {

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
const dispatch = useDispatch();
const handleLogout = () => {
    dispatch(logout());
    // props.history.push("/signin");
  }
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
               
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  {/* <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li> */}
                  <li>
                    <Link to="/signin" onClick={handleLogout}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                {/* <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul> */}
              </div>
            )}
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
