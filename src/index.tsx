import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import {GlobalStateType} from "./types/types";
import ReactDOM from "react-dom";
import App from "./App";

export const renderTree = (state: GlobalStateType) => {
    ReactDOM.render(
        <App/>, document.getElementById('root')
    );
}

renderTree(state)

subscribe(renderTree)

