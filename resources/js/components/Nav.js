import React from 'react'


export default function Nav() {

   return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
         <div className="container">
            <a className="navbar-brand" href="#">Event Registration</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  <a className="nav-link" href="#">Events </a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#">Speakers</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
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
      </nav>
   )

}