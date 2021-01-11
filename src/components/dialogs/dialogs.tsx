import React from 'react';
import styles from "./dialogs.module.css";
import {People} from "./people/people";
import {Messages} from "./messages/messages";
import {ActionType, DialogsType} from '../../redux/state';

export type PropsType = {
    dialogsData: DialogsType
    addMessage: (action: ActionType) => void
    onChangeMyMessage: (action: ActionType) => void
};

export const Dialogs:React.FC<PropsType> = (props) => {
    return (
        <div className={styles.dialogs_wrapper}>
            <People peopleData={props.dialogsData.peopleData}/>
            <Messages messagesData={props.dialogsData}
                      addMessage={props.addMessage}
                      onChangeMyMessage={props.onChangeMyMessage}/>
        </div>
    )
};