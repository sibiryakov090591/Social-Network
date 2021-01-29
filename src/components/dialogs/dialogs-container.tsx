import React from 'react';
import {GlobalStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer/dialogs-reducer";
import {Dialogs} from './dialogs';

const mapStateToProps = (state: GlobalStateType) => {
    return {
        peopleData: state.dialogs.peopleData,
        messagesData: state.dialogs.messagesData,
        currentValue: state.dialogs.newMessageText
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        onChangeMyMessage: (text: string) => dispatch(updateMessageActionCreator(text))
    }
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);