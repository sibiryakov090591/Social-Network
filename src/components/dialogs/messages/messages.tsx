import React, {ChangeEvent} from 'react';
import styles from "./messages.module.css";
import {MessageItem} from "./messageItem/messageItem";
import {ActionType, MessagesDataType} from "../../../redux/state";

type PropsType = {
    messagesData: Array<MessagesDataType>
    addMessage: (action: ActionType) => void
    onChangeMyMessage: (text: string) => void
    currentValue: string
};

export const Messages:React.FC<PropsType> = (props) => {

    let messagesArray = props.messagesData.map(i => <MessageItem id={i.id} message={i.message} />);

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.onChangeMyMessage(text);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.message}>
                {messagesArray}
            </div>
            <div className={styles.new_post_wrapper}>
                <textarea className={styles.post_message}
                          onChange={onChangeMessageText}
                          value={props.currentValue}>
                </textarea>
                <button className={styles.post_btn}
                        onClick={props.addMessage}>
                    Send
                </button>
            </div>
        </div>
    )
}