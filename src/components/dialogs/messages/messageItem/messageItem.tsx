import React from 'react';
import styles from "./messageItem.module.css";

type MessagePropsType = {
    id: string
    message: string
};

export const MessageItem: React.FC<MessagePropsType> = (props) => {

    return (
        <div id={props.id}>{props.message}</div>
    )
};
