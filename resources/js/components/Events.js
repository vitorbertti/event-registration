import React, { useState, useEffect } from "react";

import api from "../services/api";

export default function Events() {

   const [eventList, setEventList] = useState([]);
   const [filter, setFilter] = useState('');

   useEffect(() => {
      api.get("/events/").then(response => {
         setEventList(response.data);
      });
   }, []);

   function handleChange(value) {
      setFilter(value);
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
                     <td>{event.batch}</td>
                     <td>
                        <button className="btn btn-success"></button>
                        <button className="btn btn-danger"></button>
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
                  <td>{event.batch}</td>
                  <td>
                     <button className="btn btn-success"></button>
                     <button className="btn btn-danger"></button>
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
         <form className="form-inline" action="">
            <div className="form-group mb-2">
               <input onChange={e => handleChange(e.target.value)} type="text" className="form-control mr-2" placeholder="Search the topic"/>
            </div>
         </form>
         <h3>Filtro: {filter}</h3>
         <table className="table table-striped">
            <thead className="thead-dark">
               <tr>
                  <th>#</th>
                  <th>Topic</th>
                  <th>Place</th>
                  <th>Date</th>
                  <th>Number of People</th>
                  <th>Batch</th>
                  <th>Options</th>
               </tr>
            </thead>
            {showTbody()}
         </table>
      </div>
   )
}