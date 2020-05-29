import React from "react";
import ReactDOM from "react-dom";

import Routes from './routes'

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
