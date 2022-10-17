import React from 'react';
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {GlobalStateType} from "../../../types/GlobalTypes";


let mapStateToProps = (state: GlobalStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// let mapDispatchToProps = (dispatch: (action: actionTypes) => void) => {
//     return {
//
//     }
// }

const DialogContainer = connect(mapStateToProps)(Dialog)

export default DialogContainer;