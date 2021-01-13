import React from 'react';
import styles from "./dialogs.module.css";
import {People} from "./people/people";
import {MessagesContainer} from "./messages/messages-container";

export const Dialogs:React.FC<any> = (props) => {

    const state = props.store.getState();

    return (
        <div className={styles.dialogs_wrapper}>
            <People peopleData={state.dialogs.peopleData}/>
            <MessagesContainer />
        </div>
    )
};