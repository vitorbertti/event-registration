import React from "react";

import Nav from './Nav';
import Events from './Events';

export default function App() {
    
    return (
        <div>
            <Nav />
            <div className="container mt-3">
                <h1>Welcome to Event Registration!</h1>
                <Events />
            </div>
        </div>
    );
}
