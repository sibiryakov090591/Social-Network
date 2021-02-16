import React, {useEffect, useState} from "react";
import {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../../../redux/redux-store";
import {updateUserStatusTC} from "../../../../redux/profile-reducer/profile-reducer";

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

    const deactivatedEditMode = () => {
        setEditMode(false);
        setStatus(profileStatus);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    const statusHandler = () => {
        dispatch(updateUserStatusTC(status));
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