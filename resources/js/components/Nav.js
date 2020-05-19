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
         </div>
      </nav>
   )

}