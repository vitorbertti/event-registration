import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../../services/api'
import BatchesEdit from './BatchesEdit';
import SocialNetworksEdit from './SocialNetworksEdit';
import SpeakersEdit from './SpeakersEdit';

export default function EventEdit(props) {

   const eventId = props.match.params.id;
   const [event, setEvent] = useState('');
   const [batches, setBatches] = useState([]);
   const [socialNetworks, setSocialNetworks] = useState([]);
   const [speakers, setSpeakers] = useState([]);

   const [topic, setTopic] = useState('');
   const [place, setPlace] = useState('');
   const [datetime, setDatetime] = useState('');
   const [numberPeople, setNumberPeople] = useState(0);
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');

   useEffect(() => {
      api.get(`/events/${eventId}`).then(response => {    
         setEvent(response.data);
      });
   }, [eventId]);

   useEffect(() => { 
      if(event !== ''){
         let date = event.date.substr(0, 16)
            date = date.replace(' ', 'T');
         setTopic(event.topic);
         setPlace(event.place);
         setDatetime(date);
         setNumberPeople(event.number_people);
         setPhone(event.phone);
         setEmail(event.email);
      }else {
         setTopic('');
         setPlace('');
         setDatetime('');
         setNumberPeople(0);
         setPhone('');
         setEmail('');
      }
    }, [event]);

    async function saveChanges(e) {
      e.preventDefault();
      
      let date = datetime+':00';
      date = date.replace('T', ' ');
      await api.put(`/events/${eventId}`, {
         topic,
         place,
         number_people: numberPeople,
         date,
         phone,
         email,
      });
      verifyBatches();
      verifySocialNetworks();
      props.history.push('/events');
    }

   function verifyBatches() {
      
      if(batches && batches.length) {
      batches.map(async (batch) => {
         if(batch.event){
            await api.put(`/batches/${batch.id}`, {
               name: batch.name,
               price: batch.price,
               quantity: batch.quantity,
            });
         }else{
            await api.post('/batches/create', {
               name: batch.name,
               price: batch.price,
               quantity: batch.quantity,
               event: eventId,
            });
         }   
      });
      }else {
         return;
      }
    }

    function verifySocialNetworks() { 
      if(socialNetworks && socialNetworks.length) {
         socialNetworks.map(async (socialNetwork) => { 
           if(socialNetwork.event){
              await api.put(`/socialnetworks/${socialNetwork.id}`, {
                    name: socialNetwork.name,
                    url: socialNetwork.url,
                 });
           }else{
              await api.post('/socialnetworks/create', {
                 name: socialNetwork.name,
                 url: socialNetwork.url,
                 event: eventId,
            });    
           }   
        });
      }else {
         return;
      }
   }

   return (
      <div>
         <h1>Event Edit</h1>
         <form onSubmit={e => saveChanges(e)}>
            <div className="row">
               <div className="col-md-9">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                     <a className="nav-link active" id="event-tab" data-toggle="tab" href="#event" role="tab" aria-controls="event" aria-selected="true">Event</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" id="batches-tab" data-toggle="tab" href="#batches" role="tab" aria-controls="batches" aria-selected="false">Batches</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" id="socialnetworks-tab" data-toggle="tab" href="#socialnetworks" role="tab" aria-controls="socialnetworks" aria-selected="false">Social Networks</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" id="speakers-tab" data-toggle="tab" href="#speakers" role="tab" aria-controls="speakers" aria-selected="false">Speakers</a>
                  </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                     <div className="tab-pane fade show active" id="event" role="tabpanel" aria-labelledby="event-tab">
                        
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
                              <label>Number of People</label>
                              <input required type="text" className="form-control"  name="numberpeople" onChange={e => setNumberPeople(e.target.value)} value={numberPeople}/>                 
                           </div>

                           <div className="form-group col-md-4">
                              <label>Phone</label>
                              <input required type="text" className="form-control" name="phone" onChange={e => setPhone(e.target.value)} value={phone}/>
                           </div>
                           <div className="form-group col-md-6">
                              <label>Email</label>
                              <input required type="text" className="form-control" name="email" onChange={e => setEmail(e.target.value)} value={email}/> 
                           </div> 
                        </div>
                     </div>

                     <BatchesEdit data={eventId} setBatches={setBatches}/>  

                     <SocialNetworksEdit data={eventId} setSocialNetworks={setSocialNetworks} object="event"/>

                     <SpeakersEdit data={eventId} setSpeakers={setSpeakers} />

                     <div className="row">
                        <div className="col-md-12 d-flex justify-content-end">
                           <input type="submit" className="btn btn-success my-2" value="Save Changes" />
                        </div>
                     </div>
                  </div>
                  
               </div>
               <div className="col-md-3">
                  <div className="card profile-card-2">
                     <div className="card-body pt-3">
                        <h4>{topic}</h4>
                        <p className="card-text">
                           <b>Place:</b> {place}
                           <br/>
                           <b>Date:</b> {datetime}
                        </p>
                        <hr/>
                        <p className="card-text">
                           <b>Contacts</b><br/>
                           <small className="text-muted">Phone: {phone}</small>
                           <br/>
                           <small className="text-muted">E-mail: {email}</small>
                        </p>
                        <p className="card-text">
                           Capacity:
                           <small className="text-muted"> {numberPeople}</small>
                        </p>
                        <div className="row">
                           <div className="icon-block col-md-8 iconesSociais">
                              <a className="mr-3"target="_blank">
                                 <i className="fab fa-youtube"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> 
      </form>
   </div>  
   )
}