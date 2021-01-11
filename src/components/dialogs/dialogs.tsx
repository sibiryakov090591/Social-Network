import React from 'react';
import styles from "./dialogs.module.css";
import {People} from "./people/people";
import {ActionType, DialogsType} from '../../redux/state';
import {MessagesContainer} from "./messages/messages-container";

export type PropsType = {
    dialogsData: DialogsType
    dispatch: (action: ActionType) => void
};

export const Dialogs:React.FC<PropsType> = (props) => {
    return (
        <div className={styles.dialogs_wrapper}>
            <People peopleData={props.dialogsData.peopleData}/>
            <MessagesContainer messagesData={props.dialogsData.messagesData}
                               currentValue={props.dialogsData.newMessageText}
                               dispatch={props.dispatch}/>
        </div>
    )
};