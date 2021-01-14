import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from '../../../redux/gialogs-reduser/dialogs-reduser';
import {Messages} from "./messages";
import {connect} from "react-redux";
import {GlobalStateType} from '../../../redux/redux-store';
import {Dispatch} from "redux";

const mapStateToProps = (state: GlobalStateType) => {
    return {
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

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);