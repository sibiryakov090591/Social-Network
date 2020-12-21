import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./dialogItem.module.css";

type DialogItemPropsType ={
    name: string
    id: number
}

export function DialogItem(props: DialogItemPropsType) {

    return (
        <NavLink className={styles.dialog} activeClassName={styles.active_dialog} to={`/dialogs/${props.id}`}>
            <img className={styles.avatar} src="ava.jpg" alt="avatar"/>
            <div className={styles.name}>{props.name}</div>
        </NavLink>
    )
}
