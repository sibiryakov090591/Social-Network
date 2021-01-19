import {Dispatch} from "redux";
import {
    setCurrentPageActionCreator,
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

interface Props {
    usersData: UserItemType[]
    subscribeHandler: (id: string | number) => void
    unsubscribeHandler: (id: string | number) => void
    setUsers: (users: UserItemType[]) => void
    setCurrentPage: (id: number) => void
    setTotalCount: (id: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export class UsersContainer extends React.Component<Props, {}> {

    componentWillUnmount() {
        this.props.setCurrentPage(1);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    };

    onPageChange = (id: number) => {
        this.props.setCurrentPage(id);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${id}&count=${this.props.pageSize}`)
            .then(response => {
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
            />
        )
    }
}

const mapStateToProps = (state: GlobalStateType) => {
    return {
        usersData: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        subscribeHandler: (id: string | number) => dispatch(subscribeActionCreator(id)),
        unsubscribeHandler: (id: string | number) => dispatch(unsubscribeActionCreator(id)),
        setUsers: (users: UserItemType[]) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (id: number) => dispatch(setCurrentPageActionCreator(id)),
        setTotalCount: (id: number) => dispatch(setTotalCountActionCreator(id))
    }
};


// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

