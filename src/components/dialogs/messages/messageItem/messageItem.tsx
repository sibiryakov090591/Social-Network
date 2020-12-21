import React from 'react';
import styles from "./messageItem.module.css";

type MessagePropsType = {
    id: number
    message: string
}

export function MessageItem(props: MessagePropsType) {

    return (
        <div id={props.id.toString()}>{props.message}</div>
    )
}