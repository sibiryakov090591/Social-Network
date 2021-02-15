import React from 'react';
import styles from "./messages.module.css";
import {MessageItem} from "./messageItem/messageItem";
import {MessagesDataType} from "../../../redux/my-types";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {TextareaForm} from '../../UI-kit/textarea/textareaForm';
import {maxLength} from "../../../utils/validators/validators";

type MessagesPropsType = {
    messagesData: Array<MessagesDataType>
    addMessage: (text: string) => void
};

const maxLength500 = maxLength(500);

const MessageForm: React.FC<InjectedFormProps> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={styles.new_post_wrapper}>
            <div>
                <Field name={"message"}
                       component={TextareaForm}
                       className={styles.post_message}
                       validate={maxLength500}
                />
            </div>
            <div>
                <button className={styles.post_btn}>
                    Send
                </button>
            </div>
        </form>
    )
};

const MessageReduxForm = reduxForm({form: "message"})(MessageForm);

export const Messages: React.FC<MessagesPropsType> = (props) => {

    const messagesArray = props.messagesData.map(i => <MessageItem id={i.id} message={i.message}/>);

    const submitHandler = (data: { message?: string }) => {
        if (data.message) props.addMessage(data.message.trim());
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.message}>
                {messagesArray}
            </div>
            <MessageReduxForm onSubmit={submitHandler}/>
        </div>
    );
};
