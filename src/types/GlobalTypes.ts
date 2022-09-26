import {actionTypes, ProfileDataType} from "./types";
import {DialogsPageType} from "../components/Dialogs/Dialogs";

export type StoreType = {
    _state: GlobalStateType

    subscribe: any
    _callSubscriber: any
    getState: () => GlobalStateType
    dispatch: (action: actionTypes) => void
}

export type GlobalStateType = {
    profilePage: ProfileDataType
    dialogsPage: DialogsPageType
}