import {Dispatch} from "redux";
import {subscribeActionCreator, unsubscribeActionCreator} from "../../redux/users-reduser/users-reduser";
import {connect} from "react-redux";
import {Users} from "./users";
import {GlobalStateType} from "../../redux/redux-store";

const mapStateToProps = (state: GlobalStateType) => {
    return {
        usersData: state.users
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        subscribeHandler: (id: string) => dispatch(subscribeActionCreator(id)),
        unsubscribeHandler: (id: string) => dispatch(unsubscribeActionCreator(id))
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

