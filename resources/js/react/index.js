import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import Routes from './routes'
import store from './store'

function App() {
    return (
        <div>
            <Provider store={store}>
                <Routes />
            </Provider>
        </div>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
