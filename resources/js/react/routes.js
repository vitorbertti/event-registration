import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './pages/Nav';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import EventEdit from './pages/Events/components/EventEdit';


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