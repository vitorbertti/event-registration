import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Events from './Events';
import Speakers from './Speakers';
import Contact from './Contact';
import Dashboard from './Dashboard';
import EventEdit from './EventEdit';


export default function Routes() {
   return (
      <BrowserRouter>
         <Nav />
         <div className="container mt-3">
            <Switch>
               <Route path="/" exact component={Dashboard} />
               <Route path="/events" component={Events} />
               <Route path="/speakers" component={Speakers} />
               <Route path="/contact" component={Contact} />
               <Route path="/edit/:id" component={EventEdit} />
            </Switch>
         </div>
      </BrowserRouter>
   );
}