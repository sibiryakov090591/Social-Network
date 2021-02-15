import {
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
    usersActions
} from "../../redux/users-reducer/users-reducer";
import {connect} from "react-redux";
import {Users} from "./users";
import {GlobalStateType} from "../../redux/redux-store";
import {ActionType, UserItemType} from "../../redux/my-types";
import React from "react";
import {ThunkDispatch} from "redux-thunk";

type PropsType = {
    usersData: UserItemType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserItemType[]) => void
    setCurrentPage: (id: number) => void
    setIsLoading: (isLoading: boolean) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingProgress: [] | number[]
    getUsers: (currentPage: number, pageSize: number) => void
}

export class UsersContainer extends React.Component<PropsType, {}> {

    componentWillUnmount() {
        this.props.setIsLoading(false);
        this.props.setCurrentPage(1);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChange = (id: number) => {
        this.props.getUsers(id, this.props.pageSize);
    };

    render() {
        return (
            <Users usersData={this.props.usersData}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChange={this.onPageChange}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   isLoading={this.props.isLoading}
                   isFollowingProgress={this.props.followingProgress}
            />
        )
    }
}

const mapStateToProps = (state: GlobalStateType) => {
    return {
        usersData: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading,
        followingProgress: state.users.followingProgress
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<GlobalStateType, {}, ActionType>) => {
    return {
        follow: (id: number) => dispatch(followThunkCreator(id)),
        unfollow: (id: number) => dispatch(unfollowThunkCreator(id)),
        setUsers: (users: UserItemType[]) => dispatch(usersActions.setUsers(users)),
        setCurrentPage: (id: number) => dispatch(usersActions.setCurrentPage(id)),
        setIsLoading: (isLoading: boolean) => dispatch(usersActions.setIsLoading(isLoading)),
        getUsers: (currentPage: number, pageSize: number) => dispatch(getUsersThunkCreator(currentPage, pageSize)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

