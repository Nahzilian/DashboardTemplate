import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../utils/auth/login';
import '../assets/stylesheets/Navbar.css';
export default function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            <nav className="navbar navbar-expand-lg home-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height:": "100px" }}>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page" href="#">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li> */}
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height:": "100px" }}>
                                { JSON.parse(localStorage.getItem('isAuth'))?
                                    <>
                                        <li className="nav-item">
                                            <Link to="/user" className="nav-link" href="#">Welcome! {user.firstname}</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/dashboard" className="nav-link" href="#">Dashboard</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" onClick = {logout} className="nav-link" href="#">Sign out</Link>
                                        </li>             
                                    </>:<>
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link" href="#">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/register" className="nav-link" href="#">Sign Up</Link>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
