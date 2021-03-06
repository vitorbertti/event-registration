import React, { useState, useEffect } from 'react'

import api from '../../../services/api'

function ChildComponent(props) {
   const socialNetwork = props.data;
   const index = props.index;

   const [name, setName] = useState('');
   const [url, setUrl] = useState('');

   useEffect(() => { 
      if(socialNetwork !== ''){
         setName(socialNetwork.name);
         setUrl(socialNetwork.url);
      }else {
         setName('');
         setUrl('');
      }
    }, []);

    useEffect(() => { 
      updateFieldChanged(index);
    }, [name, url]);

   function updateFieldChanged (index) {
      let newSocialNetwork = [...props.socialNetworksList];
      newSocialNetwork[index].name = name;
      newSocialNetwork[index].url = url;
      props.setSocialNetworks(newSocialNetwork);
   }

   async function remove(e) {
      e.preventDefault();
      const response = await api.get(`/socialnetwork/${socialNetwork.id}`);
      if(response.data.length){
         await api.delete(`/socialnetworks/${socialNetwork.id}`);
      }
      props.listSocialNetworks();
   }

   return (
      <div id="socialNetworks">
         <div className="row">
            <div className="form-group col-md-4">
               <label>Name</label>
               <select className="form-control" required name="name" onChange={e => setName(e.target.value)} value={name}>
                  <option value="">Select</option>
                  <option value="Youtube">Youtube</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Google">Google</option>
                  <option value="Linkedin">Linkedin</option>
                  <option value="Pinterest">Pinterest</option>
                  <option value="Whatsapp">Whatsapp</option>
                  <option value="Telegram">Telegram</option>
                  <option value="Skype">Skype</option>
                  <option value="Vimeo">Vimeo</option>
               </select>
            </div>
            <div className="form-group col-md-4">
               <label>Link</label>
               <input type="text" required  className="form-control" name="url" onChange={e => setUrl(e.target.value)} value={url}/>
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

export default function SocialNetworksEdit(props) {

   const id = props.data;
   const object = props.object;
   const [socialNetworks, setSocialNetworks] = useState([]);

   useEffect(() => {
      listSocialNetworks(); 
   }, []);

   useEffect(() => {
      props.setSocialNetworks(socialNetworks);
   }, [socialNetworks]);

   async function listSocialNetworks(){
      const response = await api.get(`/socialnetworks/${object}/${id}`)
      setSocialNetworks(response.data);
   }

   function addSocialNetwork(e) {
      e.preventDefault();   
      let id = socialNetworks.length + 1;
      let newSocialNetwork = {
         id,
         name: '',
         url: '',
      }
      setSocialNetworks([...socialNetworks, newSocialNetwork]); 
   }

   return (
      <div className="tab-pane fade" id="socialnetworks" role="tabpanel" aria-labelledby="socialnetworks-tab">
         <fieldset className="form-group">
            {socialNetworks.length ? socialNetworks.map((socialNetwork, index) => ( 
               <ChildComponent key={socialNetwork.id} data={socialNetwork} setSocialNetworks={setSocialNetworks} socialNetworksList={socialNetworks} index={index} listSocialNetworks={listSocialNetworks}/>
            )) :
               <div id="socialNetworks"></div>
            }
         </fieldset>
         <button className="btn btn-outline-primary" onClick={e => addSocialNetwork(e)}>Add Social Network</button>
      </div>
   )

}