import React from "react";
import styles from "./profileInfo.module.css";

type DataBaseType = {
    firstName: string
    lastName: string
    birthday: string
}

export function ProfileInfo() {

    let dataBase: DataBaseType = {
        firstName: "Andrew",
        lastName: "Sibiryakow",
        birthday: "9 may 1991"
    }

    return (
        <div className={styles.portfolio_wrapper}>
            <img className={styles.avatar} src="ava.jpg" alt="my-avatar"/>
            <div className={styles.descr}>
                <div className={styles.descr_item}><span className={styles.span}>Firstname:</span> {dataBase.firstName}</div>
                <div className={styles.descr_item}><span className={styles.span}>Lastname:</span> {dataBase.lastName}</div>
                <div className={styles.descr_item}><span className={styles.span}>Birthday:</span> {dataBase.birthday}</div>
            </div>
        </div>
    )
}