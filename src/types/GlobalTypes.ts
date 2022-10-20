import {actionTypes} from "./types";
import {ProfilePageType} from "../redux/profile-reducer";
import {DialogDataType} from "../redux/dialogs-reducer";
import {UsersPageType} from "../components/Users/UsersContainer";


export type StoreType = {
    _state: GlobalStateType
    subscribe: any
    _callSubscriber: any
    getState: () => GlobalStateType
    dispatch: (action: actionTypes) => void
}

export type GlobalStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogDataType
    usersPage: UsersPageType
}