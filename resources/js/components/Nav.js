import React from 'react'
import {Link, withRouter} from 'react-router-dom';

function Nav() {

   return (

      
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
         {/* <BrowserRouter> */}
         
         <div className="container">
            <Link className="navbar-brand" to="/">Event Registration</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  <Link className="nav-link" to="/events">Events </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/speakers">Speakers</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/contact" tabIndex="-1" aria-disabled="true">Contact</Link>
                  </li>
               </ul>
            </div>

            <ul className="navbar-nav">
               <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  User
               </a>
               <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">
                     Profile
                  </a>
                  <div role="separator" className="divider"></div>
                  <a className="dropdown-item" href="#">
                     Exit
                  </a>
               </div>
               </li>
         </ul>
         </div>
         {/* </BrowserRouter> */}
      </nav>
   )

}

export default withRouter(Nav);