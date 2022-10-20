import React from 'react';
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {GlobalStateType} from "../../../types/GlobalTypes";
import {actionTypes} from "../../../types/types";


let mapStateToProps = (state: GlobalStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: (action: actionTypes) => void) => {
    return {}
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer;