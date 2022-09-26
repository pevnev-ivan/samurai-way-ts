import {actionTypes} from "../types/types";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


export let store: any = {
    _state: {
        profilePage:
            {
                newPostElement: '',
                postData:
                    [
                        {id: 1, message: 'Hi, it is test message', likesCount: 12, watchCount: 125},
                        {id: 2, message: 'Second message', likesCount: 1252, watchCount: 2512},
                        {id: 3, message: 'Learning props', likesCount: 123, watchCount: 2312},
                        {id: 4, message: 'Test', likesCount: 23, watchCount: 124}
                    ]
            },

        dialogsPage:
            {
                newMessageElement: '',
                dialogsData:
                    [
                        {id: 1, name: 'Ivan'},
                        {id: 2, name: 'Alex'},
                        {id: 3, name: 'John'},
                        {id: 4, name: 'Mate'},
                        {id: 5, name: 'Jax'},
                        {id: 6, name: 'Fisk'},
                        {id: 7, name: 'Lana'},
                        {id: 8, name: 'Dru'},
                    ],
                messagesData:
                    [
                        {id: 1, message: 'Hi'},
                        {id: 2, message: 'Goodbye'},
                        {id: 3, message: 'Sup'},
                        {id: 4, message: 'Test'}
                    ]
            }
    },

    subscribe(observer: any) {
        this._callSubscriber = observer // observer pattern (similar to publisher-subscriber)
    },

    _callSubscriber(_state: any) {

    },

    getState() {
        return this._state
    },


    dispatch(action: actionTypes) { // action: {type : 'SOME ACTION', ?: 'SOME DATA'}
        store._state.profilePage = profileReducer(store._state.profilePage, action)
        store._state.dialogsPage = dialogsReducer(store._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}