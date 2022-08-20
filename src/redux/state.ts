import {GlobalStateType, StoreType} from "../types/types";

export let store: StoreType = {
    state: {
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
    addPost() {

        let newPost = {
            id: 5,
            message: this.state.profilePage.newPostElement,
            likesCount: 0,
            watchCount: 0
        }

        this.state.profilePage.postData.unshift(newPost)
        this.state.profilePage.newPostElement = ''
        reRenderTree(this.state)
    },
    UpdateNewPostText(newElement: string) {
        this.state.profilePage.newPostElement = newElement
        reRenderTree(this.state)
    },
    subscribe(observer: () => void) {
        reRenderTree = observer // observer pattern (similar to publisher-subscriber)
    },
    getState() {
        return this.state
    }
}

let reRenderTree = (state: GlobalStateType) => {}

export default store