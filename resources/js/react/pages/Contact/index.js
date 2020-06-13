import React, { useState } from 'react'

import api from '../../services/api'

export default function Contact() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [comment, setComment] = useState('');

   async function handleSubmit(e) {
      e.preventDefault();
      await api.post('/contacts/create', {
         name,
         email,
         comment
      })
      alert('The comment was sent');
      setName('');
      setEmail('');
      setComment('');
   }

   return (
      <div className="container">
         <h1>Contacts</h1>
         <form onSubmit={e => handleSubmit(e)}>
            <div className="form-row">
               <div className="form-group col-md-12">
                  <label>Name</label>
                  <input required type="text" className="form-control" name="name" onChange={e => setName(e.target.value)} value={name}/>
               </div>
            </div>
            <div className="form-row">
               <div className="form-group col-md-12">
                  <label>Email</label>
                  <input required type="text" className="form-control" name="email" onChange={e => setEmail(e.target.value)} value={email}/>
               </div>
            </div>
            <div className="form-row">
               <div className="form-group col-md-12">
                  <label>Comment</label>
                  <textarea required rows="6" className="form-control" name="comment" onChange={e => setComment(e.target.value)} value={comment}/>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12 d-flex justify-content-begin">
                  <input type="submit" className="btn btn-primary my-2" value="Send Comment" />
               </div>
            </div>
         </form>
      </div>
   )
}