import React, { useState, useEffect } from "react";
import {Link, withRouter} from 'react-router-dom';

import api from "../../services/api";
import EventCreateModal from './components/EventCreateModal'

function Events() {
   const [eventList, setEventList] = useState([]);
   const [filter, setFilter] = useState('');
   const [action, setAction] = useState(null);

   async function listAll() {
      const response = await api.get("/events/");
      setEventList(response.data);
   }

   useEffect(() => {
      listAll();
   }, []);


   function handleChange(value) {
      setFilter(value);
   }

   function newEvent() {
      setAction(null);
   }

   function editEvent(e, event) {
      setAction(event);
   }

   function deleteEvent(e, event) {
      setAction(event);
   }

   function remove(e, event) {
      e.preventDefault();
      $('#modalDelete').modal('hide');
      api.delete(`/events/${event.id}`).then(response => {
         alert(`The event ${event.topic} was deleted.`);
         listAll();
      });
   }

    function showTbody() {
      if(filter) {
         return (
            <tbody>
               {eventList.map(event => (
               event.topic.toLowerCase().includes(filter.toLowerCase()) ? 
                  <tr key={event.id}>
                     <td>{event.id}</td>
                     <td>{event.topic}</td>
                     <td>{event.place}</td>
                     <td>{event.date}</td>
                     <td>{event.number_people}</td>
                     <td>
                        {event.batches && event.batches.length ? event.batches[event.batches.length-1].name : 'Not found'} 
                     </td>
                     <td>Not found</td>
                     <td>
                     <div className="btn-group"> 
                        <button className="btn btn-sm btn-success" data-toggle="tooltip" title="Edit"  data-toggle="modal" data-target="#modal" onClick={e => editEvent(e, event)}>                         
                        <svg className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                           <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd"/>
                        </svg>
                        </button>
                        <button className="btn btn-sm btn-danger" data-toggle="tooltip" title="Delete" data-toggle="modal" data-target="#modalDelete" onClick={e => deleteEvent(e, event)}>
                        <svg className="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clipRule="evenodd"/>
                        </svg>
                        </button>
                     </div>
                     </td>
                     <td>
                     <Link className="btn btn-sm btn-warning" to={`edit/event/${event.id}`}>
                        <svg className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                           <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd"/>
                        </svg>
                     </Link>
                  </td>
                  </tr>
                  :
                  null
               ))}
            </tbody>
         )
      }else if(eventList && eventList.length) {
          return (
            <tbody>
               {eventList.map(event => (
               <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.topic}</td>
                  <td>{event.place}</td>
                  <td>{event.date}</td>
                  <td>{event.number_people}</td>
                  <td>{event.batches && event.batches.length ? event.batches[event.batches.length-1].name : 'Not found'} </td>
                  <td>Not found</td>
                  <td>   
                     <div className="btn-group"> 
                        <button className="btn btn-sm btn-success" data-toggle="tooltip" title="Edit"  data-toggle="modal" data-target="#modal" onClick={e => editEvent(e, event)}>                         
                        <svg className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                           <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd"/>
                        </svg>
                        </button>
                        <button className="btn btn-sm btn-danger" data-toggle="tooltip" title="Delete" data-toggle="modal" data-target="#modalDelete" onClick={e => deleteEvent(e, event)}>
                        <svg className="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clipRule="evenodd"/>
                        </svg>
                        </button>
                     </div>
                  </td>
                  <td>
                     <Link className="btn btn-sm btn-warning" to={`edit/event/${event.id}`}>
                        <svg className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                           <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd"/>
                        </svg>
                     </Link>
                  </td>
               </tr>
               ))}
            </tbody>
         )
       }else {
          return (
             <>
               <tbody></tbody>
               <tfoot>
               <tr>
                  <td colSpan="7" className="text-center">
                     <h4>No events found.</h4>
                  </td>
               </tr>
               </tfoot>
            </>
          )
       }
    }

   return (
      <div>
         <h1>Events</h1>
         <div className="d-flex">
            <div className="form-inline mr-auto">
               <div className="form-group mb-2">
                  <input onChange={e => handleChange(e.target.value)} type="text" className="form-control mr-2" placeholder="Search the topic"/>
               </div>
            </div>
            <div>
               <button className="btn btn-outline-primary" data-toggle="modal" data-target="#modal" onClick={newEvent}>
                  <svg className="bi bi-plus-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
                  </svg>&nbsp;
                  New Event
               </button>
            </div>
         </div>
         <table className="table table-striped">
            <thead className="thead-dark">
               <tr>
                  <th>#</th>
                  <th>Topic</th>
                  <th>Place</th>
                  <th>Date</th>
                  <th>Number of People</th>
                  <th>Batch</th>
                  <th>Speakers</th>
                  <th colSpan="2">Options</th>
               </tr>
            </thead>
            {showTbody()}
         </table>

         <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
               <div className="modal-content">
                  <EventCreateModal data={action} list={listAll}/>
               </div>
            </div>
         </div>

         <div className="modal fade" id="modalDelete" tabIndex="-1" role="dialog" aria-labelledby="modalDeleteLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                        <h4 className="modal-title " id="modalDeleteLabel">Delete {action === null ? '' : action.topic} event </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>
                  </div>
                  <div className="modal-body">
                     <table className="table table-bordered text-center">
                        <tbody>
                           <tr>
                              <th scope="row">Id</th>
                              <td>{action === null ? '' : action.id}</td>
                           </tr>
                           <tr>
                              <th scope="row">Topic</th>
                              <td>{action === null ? '' : action.topic}</td>
                           </tr>
                           <tr>
                              <th scope="row">Place</th>
                              <td>{action === null ? '' : action.place}</td>
                           </tr>
                           <tr>
                              <th scope="row">Date</th>
                              <td>{action === null ? '' : action.date}</td>
                           </tr>
                           <tr>
                              <th scope="row">Number of People</th>
                              <td>{action === null ? '' : action.number_people}</td>
                           </tr>
                           <tr>
                              <th scope="row">Phone</th>
                              <td>{action === null ? '' : action.phone}</td>
                           </tr>
                           <tr>
                              <th scope="row">Email</th>
                              <td>{action === null ? '' : action.email}</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>    
                  <div className="modal-footer btn-group d-flex">      
                        <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-outline-danger" onClick={e => remove(e, action)}>Delete</button>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default withRouter(Events);