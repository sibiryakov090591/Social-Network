import React from 'react';
import styles from "./messages.module.css";
import {MessageItem} from "./messageItem/messageItem";

type DataBaseType = {
    id: number
    message: string
}

export function Messages() {

    let dataBase: Array<DataBaseType> = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "HELLO! How a u??"},
        {id: 3, message: "Great !! :))"}
    ]

    return (
        <div className={styles.message}>
            {
                dataBase.map(i => <MessageItem id={i.id} message={i.message} />)
            }
        </div>
    )
}