import React, { useState, useEffect } from 'react'

import api from '../services/api'

export default function EventEdit(props) {

   const [event, setEvent] = useState('');
   const [topic, setTopic] = useState('');
   const [place, setPlace] = useState('');
   const [datetime, setDatetime] = useState('');
   const [numberPeople, setNumberPeople] = useState(0);
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');

   async function getEvent() {
      const response = await api.get(`/events/${props.match.params.id}`);
      setEvent(response.data);
   }

   useEffect(() => {
      getEvent();
   }, []);

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

   return (
      <div>
         <h1>Event Edit</h1>
         <form>
            <div className="row">
               <div className="col-md-9">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                     <a className="nav-link active" id="event-tab" data-toggle="tab" href="#event" role="tab" aria-controls="event" aria-selected="true">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" id="batches-tab" data-toggle="tab" href="#batches" role="tab" aria-controls="batches" aria-selected="false">Profile</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" id="socialnetworks-tab" data-toggle="tab" href="#socialnetworks" role="tab" aria-controls="socialnetworks" aria-selected="false">Social Networks</a>
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

                     <div className="tab-pane fade" id="batches" role="tabpanel" aria-labelledby="batches-tab">
                        <fieldset className="form-group">
                        <legend className="d-flex justify-content-end capitalize">
                              <button className="btn btn-sm btn-danger mb-1">Remove</button>
                           </legend>
                           <div className="row">
                              <div className="form-group col-md-12">
                                 <label>Name</label>
                                 <input type="text" className="form-control" />
                              </div>
                           </div>
                           <div className="row">
                              <div className="form-group col-md-6">
                                 <label>Quantity</label>
                                 <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col-md-6">
                                 <label>Price</label>
                                 <input type="text" className="form-control" />
                              </div>      
                           </div>
                        </fieldset>  
                        <button className="btn btn-outline-primary">Add Batch</button>
                     </div>


                     <div className="tab-pane fade" id="socialnetworks" role="tabpanel" aria-labelledby="socialnetworks-tab">
                        <fieldset className="form-group">
                           <legend className="d-flex justify-content-end capitalize">
                              <button className="btn btn-sm btn-danger mb-1">Remove</button>
                           </legend>
                           <div className="row">
                              <div className="form-group col-md-4">
                                 <label>Name</label>
                                 <select className="form-control" >
                                    <option value="">Select</option>
                                    <option value="fab fa-youtube">Youtube</option>
                                    <option value="fab fa-instagram">Instagram</option>
                                    <option value="fab fa-facebook">Facebook</option>
                                    <option value="fab fa-twitter">Twitter</option>
                                    <option value="fab fa-google">Google</option>
                                    <option value="fab fa-linkedin">Linkedin</option>
                                    <option value="fab fa-pinterest">Pinterest</option>
                                    <option value="fab fa-whatsapp">Whatsapp</option>
                                    <option value="fab fa-telegram">Telegram</option>
                                    <option value="fab fa-skype">Skype</option>
                                    <option value="fab fa-vimeo">Vimeo</option>
                                 </select>
                              </div>
                              <div className="form-group col-md-4">
                                 <label>Link</label>
                                 <input type="text"  className="form-control" placeholder="URL"/>
                              </div>
                           </div>
                        </fieldset>
                        <button className="btn btn-outline-primary">Add Social Network</button>
                     </div>

                     <div className="row">
                        <div className="col-md-12 d-flex justify-content-end">
                           <button className="btn btn-success my-2" >Save Changes</button>
                        </div>
                     </div>
                  </div>
                  
               </div>
               <div className="col-md-3">
                  <div className="card profile-card-2">
                     <div className="card-body pt-3">
                        <h4>TOPIC</h4>
                        <p className="card-text">
                           <b>Place:</b> PLACE
                           <br/>
                           <b>Date:</b> DATE
                        </p>
                        <hr/>
                        <p className="card-text">
                           <b>Contacts</b><br/>
                           <small className="text-muted">Phone: PHONE</small>
                           <br/>
                           <small className="text-muted">E-mail: EMAIL</small>
                        </p>
                        <p className="card-text">
                           Capacity:
                           <small className="text-muted"> NUMBER OF PEOPLE</small>
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