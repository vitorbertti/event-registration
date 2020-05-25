import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Events from './Events';
import Speakers from './Speakers';
import Contact from './Contact';
import Dashboard from './Dashboard';


export default function Routes() {
   return (
      <BrowserRouter>
         <Nav />
         <div className="container mt-3">
            <h1>Welcome to Event Registration!</h1>
            <Switch>
               <Route path="/" exact component={Events} />
               <Route path="/events" component={Events} />
               <Route path="/speakers" component={Speakers} />
               <Route path="/contact" component={Contact} />
               <Route path="/dashboard" component={Dashboard} />
            </Switch>
         </div>
      </BrowserRouter>
   );
}