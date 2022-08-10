import {GlobalStateType} from "../types/types";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

export const renderTree = (state: GlobalStateType) => {
    ReactDOM.render(
        <App/>, document.getElementById('root')
    );
}