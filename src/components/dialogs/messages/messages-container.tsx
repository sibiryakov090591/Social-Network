import React from 'react';
import {ActionType, MessagesDataType} from "../../../redux/state";
import { addMessageActionCreator, updateMessageActionCreator } from '../../../redux/dialogs-reduser';
import {Messages} from "./messages";

type PropsType = {
    messagesData: Array<MessagesDataType>
    dispatch: (action: ActionType) => void
    currentValue: string
};

export const MessagesContainer:React.FC<PropsType> = (props) => {

    const addMessage = () => {
        if (props.currentValue) {
            props.dispatch(addMessageActionCreator());
        }
    };

    const onChangeMessageText = (text: string) => {
        props.dispatch(updateMessageActionCreator(text));
    };

    return (
        <Messages messagesData={props.messagesData}
                  addMessage={addMessage}
                  onChangeMyMessage={onChangeMessageText}
                  currentValue={props.currentValue}
        />
    )
}