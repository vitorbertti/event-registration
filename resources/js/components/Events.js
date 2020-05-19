import React, { useState, useEffect } from "react";

import api from "../services/api";

export default function Events() {

   const [eventList, setEventList] = useState([]);

    useEffect(() => {
        api.get("/events/").then(response => {
            setEventList(response.data);
        });
    }, []);

   return (
      <div>
         <form className="form-inline" action="">
            <div className="form-group mb-2">
               <input type="text" className="form-control mr-2" placeholder="Search"/>
               <button className="btn btn-outline-success">Search</button>
            </div>
         </form>
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
            <tbody>
               {eventList.map(event => (
               <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.topic}</td>
                  <td>{event.place}</td>
                  <td>{event.date}</td>
                  <td>{event.number_people}</td>
                  <td>{event.batch}</td>
                  <td></td>
               </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}