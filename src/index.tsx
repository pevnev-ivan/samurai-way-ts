import React from 'react';
import './index.css';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import {GlobalStateType} from "./types/types";

export const renderTree = (state: GlobalStateType) => {
    ReactDOM.render(
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}
        />
        , document.getElementById('root')
    );
}

renderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})

