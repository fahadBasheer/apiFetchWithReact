import React, { Component } from 'react';
import './css/Coursel.css'
import Image from '../assets/images/bg.jpg'
import { Funnel, Search } from 'react-bootstrap-icons';

class Coursel extends Component {
    render() {
        return (
            <div>

                <div className="card bg-dark text-white">
                    <img src={Image} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title main-title">WelCome!</h5>
                        <p className="card-text main-text">To The FaTech</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Coursel;