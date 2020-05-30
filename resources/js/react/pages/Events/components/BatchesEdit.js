import React, { useState, useEffect } from 'react'

import api from '../../../services/api'

export default function BatchesEdit(props) {

   const eventId = props.data;

   const [batches, setBatches] = useState([]);

   useEffect(() => {
      api.get(`/batches/${eventId}`).then(response => {
         setBatches(response.data);
      });
   }, []);

   function addBatch(e) {
      e.preventDefault();
      var newDiv = $(
         "<div class='row'>"+
            "<div class='form-group col-md-5'>"+
               "<label>Name</label>"+
               "<input type='text' class='form-control' name='name' />"+
            "</div>"+
            "<div class='form-group col-md-3'>"+
               "<label>Quantity</label>"+
               "<input type='text' class='form-control' />"+
            "</div>"+
            "<div class='form-group col-md-3'>"+
               "<label>Price</label>"+
               "<input type='text' class='form-control' />"+
            "</div>"+
            "<div class='form-group col-md-1'>"+
               "<label>Remove</label>"+
               "<button class='btn btn-sm btn-danger' data-toggle='tooltip' title='Delete' >"+
                  "<svg class='bi bi-trash-fill' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>"+
                     "<path fillRule='evenodd' d='M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z' clipRule='evenodd'/>"+
                  "</svg>"+
               "</button>"+
            "</div>"+
         "</div>"
      );
      $('#batches').append(newDiv);
   }

   return (
      <div className="tab-pane fade" id="batches" role="tabpanel" aria-labelledby="batches-tab">
         <fieldset className="form-group">
         
            {batches.length ? batches.map(batch => (  
               <div id='batches'>   
                  <div className="row" key={batch.id}>
                     <div className="form-group col-md-5">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" value={batch.name}/>
                     </div>
                     <div className="form-group col-md-3">
                        <label>Quantity</label>
                        <input type="text" className="form-control" name="quantity" value={batch.quantity}/>
                     </div>
                     <div className="form-group col-md-3">
                        <label>Price</label>
                        <input type="text" className="form-control" name="price" value={batch.price}/>
                     </div>
                     <div className="form-group col-md-1">
                        <label>Remove</label>
                        <button className="btn btn-sm btn-danger" data-toggle="tooltip" title="Delete" >
                           <svg className="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clipRule="evenodd"/>
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>    
            )) : 
            <div id='batches'></div>
            
            
         }
         </fieldset>  
         <button className="btn btn-outline-primary" onClick={e => addBatch(e)}>Add Batch</button>
      </div>
   )
}