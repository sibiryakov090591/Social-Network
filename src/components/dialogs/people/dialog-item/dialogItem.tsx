import React from 'react';
import styles from "./dialogItem.module.css";
import { NavLink } from 'react-router-dom';

type DialogItemPropsType ={
    name: string
    id: string
};

export const DialogItem:React.FC<DialogItemPropsType> = (props) => {

    return (
        <NavLink className={styles.dialog} activeClassName={styles.active_dialog} to={`/dialogs/${props.id}`}>
            <img className={styles.avatar} src="ava.jpg" alt="avatar"/>
            <div className={styles.name}>{props.name}</div>
        </NavLink>
    )
};
