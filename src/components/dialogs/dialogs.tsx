import React from 'react';
import styles from "./dialogs.module.css";
import {People} from "./people/people";
import {Messages} from "./messages/messages";

export const Dialogs: React.FC = () => {

    return (
        <div className={styles.dialogs_wrapper}>
            <People/>
            <Messages/>
        </div>
    )
};