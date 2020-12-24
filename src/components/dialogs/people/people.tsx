import React from 'react';
import styles from "./people.module.css";
import {DialogItem} from "./dialog-item/dialogItem";
import {PeopleDataType} from "../../../redux/state";

type PropsType = {
    peopleData: Array<PeopleDataType>
}
export const People:React.FC<PropsType> = ({peopleData}) => {

    return (
        <div className={styles.people_wrapper}>
            {
                peopleData.map(i => {
                    return (
                        <DialogItem name={i.name} id={i.id}/>
                    )
                })
            }
        </div>
    )
}
