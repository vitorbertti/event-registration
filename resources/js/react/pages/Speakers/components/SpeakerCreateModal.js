import React, { useState, useEffect } from 'react'

import api from '../../../services/api'

export default function SpeakerCreateModal(props) {
   const [id, setId] = useState('');
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');

   useEffect(() => {  
     if(props.data !== null) {
        setId(props.data.id);
        setName(props.data.name);
        setDescription(props.data.description);
        setPhone(props.data.phone);
        setEmail(props.data.email);
     }else {
        setName('');
        setDescription('');
        setPhone('');
        setEmail('');
     }
   }, [props]);

   function save(e) {
      e.preventDefault();
      $('#modal').modal('hide');
      api.post('/speakers/create', {
         name,
         description,
         phone,
         email,
      }).then(response => {
         alert(`The speaker ${name} was created.`);
         props.list();
      });
      
   }

   function update(e) {
      e.preventDefault();
      $('#modal').modal('hide');
      api.put(`/speakers/${id}`, {
         name,
         description,
         phone,
         email,
      }).then(response => {
         alert(`The speaker ${name} was updated.`);
         props.list();
      });
      
   }

   return (
      <>
      <div className="modal-header">
         <h5 className="modal-title" id="modalLabel">{props.data === null ? 'New Event' : `Edit ${props.data.name} speaker`}</h5>
         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
         </button>
      </div>
      <form onSubmit={props.data === null ? save : update}>
         <div className="modal-body">
         
            <div className="form-row">
               <div className="form-group col-md-12">
                  <label>Name</label>
                  <input required type="text" className="form-control" name="topic" onChange={e => setName(e.target.value)} value={name}/>
               </div>
            </div>  
            <div className="form-row">
               <div className="form-group col-md-12">
                  <label>Description</label>
                  <input required type="text" className="form-control" name="place" onChange={e => setDescription(e.target.value)} value={description}/>
               </div>
            </div>  
            <div className="form-row">
               <div className="form-group col-md-4">
                  <label>Phone</label>
                  <input required type="text" className="form-control" name="phone" onChange={e => setPhone(e.target.value)} value={phone}/>
               </div>
               <div className="form-group col-md-8">
                  <label>Email</label>
                  <input required type="email" className="form-control" name="email" onChange={e => setEmail(e.target.value)} value={email}/>
               </div>
            </div>   
         
            <br/>
         
         </div>
      
         <div className="modal-footer d-flex">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <input type="submit" className="btn btn-primary ml-auto" value="Save changes" />
         </div>
      </form>
      </>
   );
}