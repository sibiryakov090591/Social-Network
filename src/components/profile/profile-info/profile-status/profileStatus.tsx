import React, {useEffect, useState} from "react";
import {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../../../redux/redux-store";
import {updateUserStatus} from "../../../../redux/profile-reducer/profile-reducer";
import styles from "./profileStatus.module.css";

export const ProfileStatus: React.FC = (props) => {

    const profileStatus = useSelector((state: GlobalStateType) => state.profile.profileStatus);
    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(profileStatus);

    useEffect(() => {
        setStatus(profileStatus);
    }, [profileStatus])

    const activatedEditMode = () => {
        setEditMode(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    const statusHandler = () => {
        dispatch(updateUserStatus(status));
        setEditMode(false);
    };

    return (
        <>
            {
                editMode
                    ? <div>
                        <input onChange={onChangeHandler}
                               type="text"
                               value={status}
                               autoFocus
                               className={styles.input}
                        />
                        <button className={styles.btn} onClick={statusHandler}>Save</button>
                    </div>
                    : <span className={styles.span} onClick={activatedEditMode}>
                            {status ? status : "Установить статус..."}
                        </span>
            }
        </>
    )
}