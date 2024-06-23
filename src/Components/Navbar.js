import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-black mb-3 py-2">
                <div class="container-fluid">
                    <div className="navbar-image">
                        <Link to="/" className="navbar-brand">
                            <img src="/images/Rotating Earth's logo.gif" alt="Logo" />
                        </Link>
                    </div>

                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item px-3 px-lg-3 fs-5 text-white rounded">
                                <Link to="/">Home</Link>
                            </li>
                            <li class="nav-item px-3 fs-5 text-white">
                                <Link to="/tutorial">Tutorials</Link>
                            </li>
                            <li class="nav-item px-3 fs-5 text-white">
                                <Link to="/publications">Publications</Link>
                            </li>
                            <li class="nav-item px-3 fs-5 text-white">
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li class="nav-item px-3 fs-5 text-white">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Navbar;