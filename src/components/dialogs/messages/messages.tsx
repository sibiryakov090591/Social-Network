import React, {ChangeEvent} from 'react';
import styles from "./messages.module.css";
import {MessageItem} from "./messageItem/messageItem";
import {ActionType, DialogsType} from "../../../redux/state";
import { addMessageActionCreator, updateMessageActionCreator } from '../../../redux/dialogs-reduser';

type PropsType = {
    messagesData: DialogsType
    addMessage: (action: ActionType) => void
    onChangeMyMessage: (action: ActionType) => void
};

export const Messages:React.FC<PropsType> = (props) => {

    let messagesArray = props.messagesData.messagesData.map(i => <MessageItem id={i.id} message={i.message} />);

    const addMessage = () => {
        if (props.messagesData.newMessageText) {
            props.addMessage(addMessageActionCreator());
        }
    };

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.onChangeMyMessage(updateMessageActionCreator(text));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.message}>
                {messagesArray}
            </div>
            <div className={styles.new_post_wrapper}>
                <textarea className={styles.post_message}
                          onChange={onChangeMessageText}
                          value={props.messagesData.newMessageText}></textarea>
                <button className={styles.post_btn}
                        onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}