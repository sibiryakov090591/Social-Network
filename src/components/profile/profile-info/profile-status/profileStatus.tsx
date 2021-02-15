import React, {useEffect, useState} from "react";
import {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
};

export const ProfileStatus: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activatedEditMode = () => {
        setEditMode(true);
    };

    const deactivatedEditMode = () => {
        setEditMode(false);
        setStatus(props.status);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    const statusHandler = () => {
        props.updateUserStatus(status);
        setEditMode(false);
    };

    return (
        <div>
            {
                editMode
                    ? <div onBlur={statusHandler}>
                        <input onChange={onChangeHandler}
                               type="text"
                               value={status}
                               autoFocus
                        />
                        <button onClick={statusHandler}>Save</button>
                    </div>
                    : <span onDoubleClick={activatedEditMode}>
                            {status ? status : "Установить статус..."}
                        </span>
            }
        </div>
    )
}