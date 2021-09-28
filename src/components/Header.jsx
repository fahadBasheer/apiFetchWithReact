import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link to="/" className="logo"><a className="navbar-brand" href="#">FaTech</a></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            </ul>
                            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/user"><button type="button" className="btn btn-primary user">Get Users</button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;