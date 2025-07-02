import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.Theme} bg-${props.Theme} `}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.Title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${props.Active}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.DeActive}`} to="/about">{props.About}</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.Theme === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.ToggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
                            <label className="form-check-label" htmlFor="switchCheckDefault">Toggle {props.Theme === 'light' ? 'Dark' : 'Light'} Theme</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.PropTypes = {
    Title: PropTypes.string.isRequired,
    About: PropTypes.string
}

Navbar.defaultProps = {
    Title: "React App",
    About: "About"
}
