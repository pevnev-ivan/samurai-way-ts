import React from 'react';
import './index.css';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import {GlobalStateType} from "./types/GlobalTypes";
import {Provider} from "./StoreContext";


export const renderTree = (state: GlobalStateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        , document.getElementById('root')
    );
}

renderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})

