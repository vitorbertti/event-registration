import React, { useState, useEffect, useCallback } from 'react'

import api from '../../../services/api'

function ChildComponent(props) {

   const batch = props.data;
   const index = props.index;
   
   const [name, setName] = useState('');
   const [quantity, setQuantity] = useState('');
   const [price, setPrice] = useState('');

   useEffect(() => { 
      if(batch !== ''){
         setName(batch.name);
         setQuantity(batch.quantity);
         setPrice(batch.price);   
      }else {
         setName('');
         setQuantity('');
         setPrice('');
      }
    }, []);

    useEffect(() => { 
      updateFieldChanged(index);
    }, [name, quantity, price]);

   function updateFieldChanged (index) {
      let newBatch = [...props.batchesList];
      newBatch[index].name = name;
      newBatch[index].quantity = quantity;
      newBatch[index].price = price;
      props.setBatches(newBatch);
   }

   async function remove(e) {
      e.preventDefault();
      await api.delete(`/batches/${batch.id}`);
      props.listBatches();
   }

   return (
      <div id='batches'>   
         <div className="row" key={batch.id}>
            <div className="form-group col-md-5">
               <label>Name</label>
               <input type="text" className="form-control" name="name" onChange={e => setName(e.target.value)} value={name} />
            </div>
            <div className="form-group col-md-3">
               <label>Quantity</label>
               <input type="text" className="form-control" name="quantity" onChange={e => setQuantity(e.target.value)} value={quantity} />
            </div>
            <div className="form-group col-md-3">
               <label>Price</label>
               <input type="text" className="form-control" name="price" onChange={e => setPrice(e.target.value)} value={price}/>
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

export default function BatchesEdit(props) {

   const eventId = props.data;

   const [batches, setBatches] = useState([]);

   useEffect(() => {
      listBatches();
   }, []);

   useEffect(() => {
      props.setBatches(batches);
   }, [batches]);

   async function listBatches(){
      const response = await api.get(`/batches/${eventId}`);
      setBatches(response.data); 
   }

   function addBatch(e) {
      e.preventDefault();   
      let id = batches.length + 1;
      let newBatch = {
         id,
         name: '',
         quantity: '',
         price: ''
      }
      setBatches([...batches, newBatch]); 
   }

   return (
      <div className="tab-pane fade" id="batches" role="tabpanel" aria-labelledby="batches-tab">
         <fieldset className="form-group">
            {batches.length ? batches.map((batch, index) => (  
               <ChildComponent key={batch.id} data={batch} setBatches={setBatches} batchesList={batches} index={index} listBatches={listBatches}/>
            )) : 
               <div id='batches'></div>
            }
         </fieldset>  
         <button className="btn btn-outline-primary" onClick={e => addBatch(e)}>Add Batch</button>
      </div>
   )
}