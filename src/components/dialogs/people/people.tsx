import React from 'react';
import styles from "./people.module.css";
import {DialogItem} from "./dialog-item/dialogItem";

type DataBaseType = {
    name: string
    id: number
}

export function People() {

    const dataBase: Array<DataBaseType> = [
        {name: "Anna", id: 1},
        {name: "Andrey", id: 2},
        {name: "John", id: 3},
        {name: "Dima", id: 4},
        {name: "Lio", id: 5}
    ]

    return (
        <div className={styles.people_wrapper}>
            {
                dataBase.map(i => {
                    return (
                        <DialogItem name={i.name} id={i.id}/>
                    )
                })
            }
        </div>
    )
}
