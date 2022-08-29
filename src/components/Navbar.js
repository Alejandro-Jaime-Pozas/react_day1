// create 'components' folder to save html elements you want to create for the main program here
// type rfc to get this template below (rfc = react function component)

import React from 'react'

export default function Navbar(props) {
    console.log('Hello this is the navbar component');
    console.log(props);
  return (
    // class you have to change instead of 'class' to 'className' bc of JSX
    // also the '#' you should change bc JSX does not recognize
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Welcom {props.name} from {props.city}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/">Features</a>
        <a className="nav-link" href="/">Pricing</a>
        <a className="nav-link" href="/">Enabled</a>
      </div>
    </div>
  </div>
</nav>
    )
}
