import {followToggleAC, setUsersAC, userType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {GlobalStateType} from "../../types/GlobalTypes";

export type UsersPageType = {
    users: Array<userType>
}

type mapStateToPropsType = {
    users: UsersPageType
}

type mapDispatchToPropsType = {
    followToggle: (userID: number) => void
    setUsers: (users: UsersPageType) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: GlobalStateType): mapStateToPropsType => {
    return {
        users: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        followToggle: (userID: number) => {
            dispatch(followToggleAC(userID))
        },
        setUsers: (users: UsersPageType) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

