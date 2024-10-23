// src/components/Navbar/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
// import './Navbar.css'; // Import custom CSS if you have styles

const Navbar = () => {
    const funlinks = [
        { id: 1, text: 'Productlist', path: '/productlist' },
        { id: 2, text: 'CreateAccount', path: '/acc1' },
        { id: 3, text: 'NewProduct', path: '/NewProduct' },
    ]
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Products</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    {funlinks.map((link, i) =>
                                        <React.Fragment key={link.id}>
                                            <li>
                                                <NavLink className="dropdown-item" to={link.path}>{link.text}</NavLink>
                                            </li>
                                            {i < funlinks.length - 1 && <li><hr className="dropdown-divider" /></li>}
                                        </React.Fragment>
                                    )}
                                </ul >
                            </li>
                        </ul>
                        <NavLink className="nav-link text-white me-4" to="/login" end><FaUser></FaUser></NavLink>
                        <form className="d-flex" role="search">
                            <div className="input-group">
                                <input className="form-control" type="search" placeholder="Search" />
                                <button className="btn btn-outline-light bg-danger" type="submit"><span><FaSearch></FaSearch></span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">MyWebsite</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav> */}
        </>
    );
};

export default Navbar;
