import React from 'react';
import styles from "./people.module.css";
import { DialogItem } from "./dialog-item/dialogItem";
import {useSelector} from "react-redux";
import {GlobalStateType} from "../../../redux/redux-store";

export const People:React.FC = () => {

    const peopleData = useSelector((state: GlobalStateType) => state.dialogs.peopleData);

    return (
        <div className={styles.people_wrapper}>
            {
                peopleData.map(i => {
                    return (
                        <DialogItem key={i.id} name={i.name} id={i.id}/>
                    )
                })
            }
        </div>
    )
};
