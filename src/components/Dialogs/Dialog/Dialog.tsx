import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {dialogsArr} from "../../../types/types";

export type PropsType = {
    dialogsData: Array<dialogsArr>
}

const Dialog = (props: PropsType) => {

    let dialogElements = props.dialogsData.map((ObjFromDialogs, index) => {
        return (
            <div key={index} className={s.dialogs_item}>
                <NavLink to={"/dialogs/" + ObjFromDialogs.id}>{ObjFromDialogs.name}</NavLink>
            </div>
        )
    })

    return (
        <div>
            {dialogElements}
        </div>
    )
}

export default Dialog;