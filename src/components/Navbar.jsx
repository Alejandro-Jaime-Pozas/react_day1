import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Welcome {props.name} from {props.city}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* change 'a' to 'Link' and href to 'to' to make only those links re-render the elements that need to be re-rendered (navbar doesnt need to be re-rendered on every click) */}
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/standings">Standings</Link>
                    <Link className="nav-link" to="/register">Register</Link>
                    <Link className="nav-link" to="/login">Enabled</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}
