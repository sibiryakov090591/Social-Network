import {Dispatch} from "redux";
import {
    setCurrentPageActionCreator,
    setIsLoadingActionCreator,
    setTotalCountActionCreator,
    setUsersActionCreator,
    subscribeActionCreator,
    unsubscribeActionCreator
} from "../../redux/users-reduser/users-reduser";
import {connect} from "react-redux";
import {Users} from "./users";
import {GlobalStateType} from "../../redux/redux-store";
import {UserItemType} from "../../redux/my-types";
import React from "react";
import axios from "axios";

type Props = {
    usersData: UserItemType[]
    subscribeHandler: (id: string | number) => void
    unsubscribeHandler: (id: string | number) => void
    setUsers: (users: UserItemType[]) => void
    setCurrentPage: (id: number) => void
    setTotalCount: (id: number) => void
    setIsLoading: (isLoading: boolean) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

export class UsersContainer extends React.Component<Props, {}> {

    componentWillUnmount() {
        this.props.setIsLoading(false);
        this.props.setCurrentPage(1);
    }

    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    };

    onPageChange = (id: number) => {
        this.props.setIsLoading(true);
        this.props.setCurrentPage(id);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${id}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return (
            <Users usersData={this.props.usersData}
                   subscribeHandler={this.props.subscribeHandler}
                   unsubscribeHandler={this.props.unsubscribeHandler}
                   setUsers={this.props.setUsers}
                   setCurrentPage={this.props.setCurrentPage}
                   setTotalCount={this.props.setTotalCount}
                   onPageChange={this.onPageChange}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   isLoading={this.props.isLoading}
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
        isLoading: state.users.isLoading
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        subscribeHandler: (id: string | number) => dispatch(subscribeActionCreator(id)),
        unsubscribeHandler: (id: string | number) => dispatch(unsubscribeActionCreator(id)),
        setUsers: (users: UserItemType[]) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (id: number) => dispatch(setCurrentPageActionCreator(id)),
        setTotalCount: (id: number) => dispatch(setTotalCountActionCreator(id)),
        setIsLoading: (isLoading: boolean) => dispatch(setIsLoadingActionCreator(isLoading))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

