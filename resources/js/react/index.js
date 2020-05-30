import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import reducers from './reducers'

import Routes from './routes'

const store = createStore(reducers);

function App() {
    return (
        <div>
            <Routes /> 
        </div>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
