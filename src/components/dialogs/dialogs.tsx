import React from 'react';
import styles from "./dialogs.module.css";
import {People} from "./people/people";
import {Messages} from "./messages/messages";

export function Dialogs() {
    return (
        <div className={styles.dialogs_wrapper}>
            <People />
            <Messages />
        </div>
    )
}