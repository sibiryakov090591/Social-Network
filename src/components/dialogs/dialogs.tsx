import React from 'react';
import styles from "./dialogs.module.css";
import { People } from "./people/people";
import { Messages } from "./messages/messages";
import { MessagesDataType, PeopleDataType } from "../../redux/my-types";

type DialogsType = {
    peopleData: Array<PeopleDataType>
    messagesData: Array<MessagesDataType>
    currentValue: string
    addMessage: () => void
    onChangeMyMessage: (text: string) => void
};

export const Dialogs:React.FC<DialogsType> = (props) => {

    return (
        <div className={styles.dialogs_wrapper}>
            <People peopleData={props.peopleData}/>
            <Messages  messagesData={props.messagesData}
                       currentValue={props.currentValue}
                       addMessage={props.addMessage}
                       onChangeMyMessage={props.onChangeMyMessage}
            />
        </div>
    )
};