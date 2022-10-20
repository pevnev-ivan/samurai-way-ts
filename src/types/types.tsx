import {addPostAction, updatePostAction} from "../redux/profile-reducer";
import {sendMessageAction, updateMessageAction} from "../redux/dialogs-reducer";
import {followToggleAC, setUsersAC} from "../redux/users-reducer";

export type actionTypes =
    ReturnType<typeof addPostAction>
    | ReturnType<typeof updatePostAction>
    | ReturnType<typeof sendMessageAction>
    | ReturnType<typeof updateMessageAction>
    | ReturnType<typeof followToggleAC>
    | ReturnType<typeof setUsersAC>







