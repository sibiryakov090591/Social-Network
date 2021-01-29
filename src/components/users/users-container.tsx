import {Dispatch} from "redux";
import {
    getUsersThunkCreator,
    setCurrentPage,
    setIsFollowingProgress,
    setIsLoading,
    setUsers,
    followSuccess,
    unfollowSuccess, followThunkCreator, unfollowThunkCreator
} from "../../redux/users-reducer/users-reducer";
import {connect} from "react-redux";
import {Users} from "./users";
import {GlobalStateType} from "../../redux/redux-store";
import {UserItemType} from "../../redux/my-types";
import React from "react";

type PropsType = {
    usersData: UserItemType[]
    follow: (id: string | number) => void
    unfollow: (id: string | number) => void
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
        // @ts-ignore
        usersData: state.users.users,
        // @ts-ignore
        pageSize: state.users.pageSize,
        // @ts-ignore
        totalUsersCount: state.users.totalUsersCount,
        // @ts-ignore
        currentPage: state.users.currentPage,
        // @ts-ignore
        isLoading: state.users.isLoading,
        // @ts-ignore
        followingProgress: state.users.followingProgress
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: string | number) => dispatch(followThunkCreator(id)),
        unfollow: (id: string | number) => dispatch(unfollowThunkCreator(id)),
        setUsers: (users: UserItemType[]) => dispatch(setUsers(users)),
        setCurrentPage: (id: number) => dispatch(setCurrentPage(id)),
        setIsLoading: (isLoading: boolean) => dispatch(setIsLoading(isLoading)),
        getUsers: (currentPage: number, pageSize: number) => dispatch(getUsersThunkCreator(currentPage, pageSize)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

