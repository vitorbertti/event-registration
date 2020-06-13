import React, { useState } from 'react'

import api from '../../services/api'

export default function Login(props) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   async function handleSubmit(e) {
      e.preventDefault();
      //TODO
   }

   return (
      <div className="container">
         <h1 className="text-center">Login</h1>
         <form onSubmit={e => handleSubmit(e)}>
            <div className="form-row justify-content-center">
               <div className="form-group col-md-6">
                  <label>Email</label>
                  <input required type="text" className="form-control" name="email" onChange={e => setEmail(e.target.value)} value={email}/>
               </div>
            </div>
            <div className="form-row justify-content-center">
               <div className="form-group col-md-6">
                  <label>Password</label>
                  <input required type="password" className="form-control" name="password" onChange={e => setPassword(e.target.value)} value={password}/>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12 d-flex justify-content-center">
                  <input type="submit" className="btn btn-primary my-2" value="Sign in" />
               </div>
            </div>
         </form>
      </div>
   )
}