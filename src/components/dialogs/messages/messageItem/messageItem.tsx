import React from 'react';
import styles from "./messageItem.module.css";

type MessagePropsType = {
    id: string
    message: string
}

export function MessageItem(props: MessagePropsType) {

    return (
        <div id={props.id}>{props.message}</div>
    )
}