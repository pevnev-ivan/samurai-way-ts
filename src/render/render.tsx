import {GlobalStateType} from "../types/types";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";







export const renderTree = (state: GlobalStateType) => {
    ReactDOM.render(
        <App/>, document.getElementById('root')
    );
}


//
// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');
// const root = ReactDOM.createRoot(rootElement);
//
// export let renderTree = (state: GlobalStateType) =>{
//
//     root.render(
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     );}