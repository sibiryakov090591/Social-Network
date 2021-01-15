import React from 'react';
import styles from "./people.module.css";
import { DialogItem } from "./dialog-item/dialogItem";
import { PeopleDataType } from "../../../redux/my-types";

type PropsType = {
    peopleData: Array<PeopleDataType>
};

export const People:React.FC<PropsType> = (props) => {

    return (
        <div className={styles.people_wrapper}>
            {
                props.peopleData.map(i => {
                    return (
                        <DialogItem name={i.name} id={i.id}/>
                    )
                })
            }
        </div>
    )
};
