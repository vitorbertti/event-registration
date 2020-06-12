import React, { useState, useEffect } from 'react'

import api from '../../../services/api'

function ChildComponent(props) {
   const speaker = props.data;
   const index = props.index;
   const speakers = props.speakersList;

   const [name, setName] = useState('');

   useEffect(() => { 
      if(speaker !== ''){
         setName(speaker.name);
      }else {
         setName('');
      }
    }, []);

    useEffect(() => { 
      updateFieldChanged(index);
    }, [name]);

   function updateFieldChanged (index) {
      let newSpeaker = [...props.speakersList];
      newSpeaker[index].name = name;
      props.setSpeakers(newSpeaker);
   }

   async function remove(e) {
      //TODO
   }

   return (
      <div id="speakers">
         <div className="row">
            <div className="form-group col-md-8">
               <label>Name</label>
               <select className="form-control" required name="name" onChange={e => setName(e.target.value)} value={name}>
                  <option value="">Select</option>
                  {speakers.map(speaker => (
                     <option key={speaker.id} value={speaker.name}>{speaker.name}</option>
                  ))}
               </select>
            </div>
            <div className="form-group col-md-1">
               <label>Remove</label>
               <button className="btn btn-sm btn-danger" data-toggle="tooltip" title="Delete" onClick={e => remove(e)}>
                  <svg className="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clipRule="evenodd"/>
                  </svg>
               </button>
            </div>
         </div>
      </div>
   )

}

export default function SpeakersEdit(props) {

   const id = props.data;
   const [speakers, setSpeakers] = useState([]);

   useEffect(() => {
      listSpeakers(); 
   }, []);

   useEffect(() => {
      props.setSpeakers(speakers);
   }, [speakers]);

   async function listSpeakers(){
      // TODO
   }

   function addSpeaker(e) {
      e.preventDefault();   
      let id = speakers.length + 1;
      let newSpeaker = {
         id,
         name: '',
      }
      setSpeakers([...speakers, newSpeaker]); 
   }

   return (
      <div className="tab-pane fade" id="speakers" role="tabpanel" aria-labelledby="speakers-tab">
         <fieldset className="form-group">
            {speakers.length ? speakers.map((speaker, index) => ( 
               <ChildComponent key={speaker.id} data={speaker} setSpeakers={setSpeakers} speakersList={speakers} index={index} listSpeakers={listSpeakers}/>
            )) :
               <div id="speakers"></div>
            }
         </fieldset>
         <button className="btn btn-outline-primary" onClick={e => addSpeaker(e)}>Add Speaker</button>
      </div>
   )

}