import React, { useState, useEffect } from 'react'

import api from '../../../services/api'
import SocialNetworksEdit from '../../Events/components/SocialNetworksEdit'
export default function SpeakerEdit(props) {

   const speakerId = props.match.params.id;
   const [speaker, setSpeaker] = useState('');
   const [socialNetworks, setSocialNetworks] = useState([]);
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [datetime, setDatetime] = useState('');
   const [numberPeople, setNumberPeople] = useState(0);
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');

   useEffect(() => {
      api.get(`/speakers/${speakerId}`).then(response => {    
         setSpeaker(response.data);
      });
   }, [speakerId]);

   useEffect(() => { 
      if(speaker !== ''){
         setName(speaker.name);
         setDescription(speaker.description);
         setPhone(speaker.phone);
         setEmail(speaker.email);
      }else {
         setName('');
         setDescription('');
         setPhone('');
         setEmail('');
      }
    }, [speaker]);

    async function saveChanges(e) {
      e.preventDefault();
      await api.put(`/speakers/${speakerId}`, {
         name,
         description,
         phone,
         email,
      });
      verifySocialNetworks();
      props.history.push('/speakers');
    }

    function verifySocialNetworks() { 
      if(socialNetworks && socialNetworks.length) {
         socialNetworks.map(async (socialNetwork) => { 
           if(socialNetwork.speaker){
              await api.put(`/socialnetworks/${socialNetwork.id}`, {
                    name: socialNetwork.name,
                    url: socialNetwork.url,
                 });
           }else{
              await api.post('/socialnetworks/create', {
                 name: socialNetwork.name,
                 url: socialNetwork.url,
                 speaker: speakerId,
            });    
           }   
        });
      }else {
         return;
      }
   }

   return (
      <div>
         <h1>Speaker Edit</h1>
         <form onSubmit={e => saveChanges(e)}>
            <div className="row">
               <div className="col-md-9">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                     <a className="nav-link active" id="speaker-tab" data-toggle="tab" href="#speaker" role="tab" aria-controls="spaker" aria-selected="true">Speaker</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" id="socialnetworks-tab" data-toggle="tab" href="#socialnetworks" role="tab" aria-controls="socialnetworks" aria-selected="false">Social Networks</a>
                  </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                     <div className="tab-pane fade show active" id="speaker" role="tabpanel" aria-labelledby="speaker-tab">
                        
                        <div className="form-row">
                           <div className="form-group col-md-12">
                              <label>Name</label>
                              <input required type="text" className="form-control" name="name" onChange={e => setName(e.target.value)} value={name}/>
                           </div>
                        </div>

                        <div className="form-row">
                           <div className="form-group col-md-12">
                              <label>Description</label>
                              <input required type="text" className="form-control" name="description" onChange={e => setDescription(e.target.value)} value={description}/>                
                           </div>
                        </div>
                        <div className="form-row">
                           <div className="form-group col-md-4">
                              <label>Phone</label>
                              <input required type="text" className="form-control" name="phone" onChange={e => setPhone(e.target.value)} value={phone}/>
                           </div>
                           <div className="form-group col-md-8">
                              <label>Email</label>
                              <input required type="text" className="form-control" name="email" onChange={e => setEmail(e.target.value)} value={email}/> 
                           </div> 
                        </div>
                     </div>

                     <SocialNetworksEdit data={speakerId} setSocialNetworks={setSocialNetworks} object="speaker"/>

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
                        <h4>{name}</h4>
                        <p className="card-text">
                           <b>Description:</b> {description}
                           <br/>
                        </p>
                        <hr/>
                        <p className="card-text">
                           <b>Contacts</b><br/>
                           <small className="text-muted">Phone: {phone}</small>
                           <br/>
                           <small className="text-muted">E-mail: {email}</small>
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