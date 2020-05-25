import React, { useState, useEffect } from 'react'

import api from '../services/api'

export default function EventForm(props) {
   const [id, setId] = useState('');
   const [topic, setTopic] = useState('');
   const [place, setPlace] = useState('');
   const [datetime, setDatetime] = useState('');
   const [numberPeople, setNumberPeople] = useState(0);
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');

   useEffect(() => {  
     if(props.data !== null) {
        let date = props.data.date.substr(0, 16)
         date = date.replace(' ', 'T');
        setId(props.data.id);
        setTopic(props.data.topic);
        setPlace(props.data.place);
        setDatetime(date);
        setNumberPeople(props.data.number_people);
        setPhone(props.data.phone);
        setEmail(props.data.email);
     }else {
        setTopic('');
        setPlace('');
        setDatetime('');
        setNumberPeople(0);
        setPhone('');
        setEmail('');
     }
   }, [props]);

   function save(e) {
      e.preventDefault();
      $('#modal').modal('hide');
      let date = datetime+':00';
      date = date.replace('T', ' ');
      api.post('/events/create', {
         topic,
         place,
         number_people: numberPeople,
         date,
         phone,
         email,
      }).then(response => {
         alert(`The event ${topic} was created.`);
      });
   }

   function update(e) {
      e.preventDefault();
      $('#modal').modal('hide');
      let date = datetime+':00';
      date = date.replace('T', ' ');
      api.put(`/events/${id}`, {
         topic,
         place,
         number_people: numberPeople,
         date,
         phone,
         email,
      }).then(response => {
         alert(`The event ${topic} was updated.`);
      });
   }

   return (
      <>
      <div className="modal-header">
         <h5 className="modal-title" id="modalLabel">{props.data === null ? 'New Event' : `Edit ${props.data.topic} event`}</h5>
         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
         </button>
      </div>
      <form onSubmit={props.data === null ? save : update}>
         <div className="modal-body">
         
            <div className="form-row">
               <div className="form-group col-md-12">
                  <label>Topic</label>
                  <input required type="text" className="form-control" name="topic" onChange={e => setTopic(e.target.value)} value={topic}/>
               </div>
            </div>  
            <div className="form-row">
               <div className="form-group col-md-8">
                  <label>Place</label>
                  <input required type="text" className="form-control" name="place" onChange={e => setPlace(e.target.value)} value={place}/>
               </div>
               <div className="form-group col-md-4">
                  <label>Date and time</label>
                  <input required type="datetime-local" className="form-control" name="datetime" onChange={e => setDatetime(e.target.value)} value={datetime}/>
               </div>
            </div>  
            <div className="form-row">
               <div className="form-group col-md-2">
                  <label>Number of people</label>
                  <input required type="text" className="form-control" name="numberpeople" onChange={e => setNumberPeople(e.target.value)} value={numberPeople}/>
               </div>
               <div className="form-group col-md-4">
                  <label>Phone</label>
                  <input required type="text" className="form-control" name="phone" onChange={e => setPhone(e.target.value)} value={phone}/>
               </div>
               <div className="form-group col-md-6">
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