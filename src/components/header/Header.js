//import "./header.scss"
import React from "react";
import {NavLink} from "react-router-dom";

function Header(){
    return(
        <header className="row">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
                    <img src={"logo.png"} className="d-inline-block align-top m-2" width="70" alt="logo" loading="lazy">
                    </img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                           <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/favourites">Favourites</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/info">Info</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )}

export default Header;



