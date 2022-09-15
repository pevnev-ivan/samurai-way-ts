import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

let store = createStore(reducers)

export default store