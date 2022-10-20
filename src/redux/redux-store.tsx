import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import userReducer from "./users-reducer";
import {combineReducers, createStore} from "redux";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer
})

export type appStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store