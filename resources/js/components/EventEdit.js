import React from 'react'

export default function EventEdit(props) {
   return (
      <div>
         <h1>Event Edit</h1>
         <form >
            <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
               <a className="nav-link active" id="event-tab" data-toggle="tab" href="#event" role="tab" aria-controls="event" aria-selected="true">Home</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" id="batches-tab" data-toggle="tab" href="#batches" role="tab" aria-controls="batches" aria-selected="false">Profile</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" id="socialnetworks-tab" data-toggle="tab" href="#socialnetworks" role="tab" aria-controls="socialnetworks" aria-selected="false">Contact</a>
            </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="event" role="tabpanel" aria-labelledby="event-tab">...</div>
            <div className="tab-pane fade" id="batches" role="tabpanel" aria-labelledby="batches-tab">...</div>
            <div className="tab-pane fade" id="socialnetworks" role="tabpanel" aria-labelledby="socialnetworks-tab">...</div>
            </div>
            
         </form>
         
      </div>
   )
}