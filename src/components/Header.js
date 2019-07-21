import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default function Header() {
    return (
        <div>
            <header id="main-header">
                <div className="header-content">
                    <Link to="/">
                    <img src={logo} alt="Insta" srcset="" />
                    </Link>
                    <Link to="new">
                    <img src={camera} alt="Enviar" srcset="" />
                    </Link>
                </div>
            </header>
        </div>
    );
}
