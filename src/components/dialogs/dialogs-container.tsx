import React from 'react';
import {GlobalStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {dialogsActions} from "../../redux/dialogs-reducer/dialogs-reducer";
import {Dialogs} from './dialogs';
import {withAuthRedirect} from '../../hok/withAuthRedirect';

const mapStateToProps = (state: GlobalStateType) => {
    return {
        peopleData: state.dialogs.peopleData,
        messagesData: state.dialogs.messagesData
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (text: string) => dispatch(dialogsActions.addMessage(text))
    }
};

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs);