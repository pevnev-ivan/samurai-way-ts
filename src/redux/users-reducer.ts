import {actionTypes} from "../types/types";
import {UsersPageType} from "../components/Users/UsersContainer";

export type userType = {
    id: number
    followed: boolean
    avatarUrl: string
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}


export const followToggleAC = (userID: number) => ({type: 'FOLLOW-TOGGLE', userID: userID} as const)
export const setUsersAC = (users: UsersPageType) => ({type: 'SET-USERS', users: users} as const)

let initialUsers: UsersPageType = {
    users: [
        {
            id: 1,
            followed: true,
            avatarUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
            fullName: 'John',
            status: 'Hello World',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 2,
            followed: false,
            avatarUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
            fullName: 'Alfred',
            status: 'Hello World',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            followed: true,
            avatarUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
            fullName: 'Elena',
            status: 'Hello World',
            location: {city: 'Minsk', country: 'Belarus'}
        }
    ]
}

const userReducer = (state: UsersPageType, action: actionTypes): UsersPageType => {

    switch (action.type) {
        case "FOLLOW-TOGGLE": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: !el.followed} : el)
            }
        }
        case "SET-USERS": {
            return {...state, ...action.users}
        }
        default:
            return state
    }
}

export default userReducer

