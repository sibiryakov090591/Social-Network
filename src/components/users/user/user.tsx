import React from "react";
import styles from "./user.module.css";
import {NavLink} from "react-router-dom";
import {followThunkCreator, unfollowThunkCreator} from "../../../redux/users-reducer/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../../redux/redux-store";

type PropsType = {
    id: number
    photoUrl: string
    name: string
    status: string | null
    followed: boolean
}

export const User: React.FC<PropsType> = (props) => {

    const followingProgress = useSelector(((state: GlobalStateType) => state.users.followingProgress));
    const dispatch = useDispatch();

    const unfollow = () => dispatch(unfollowThunkCreator(props.id));
    const follow = () => dispatch(followThunkCreator(props.id));

    return (
        <div className={styles.itemWrapper}>
            <div className={styles.buttonWrapper}>
                <div className={styles.avatarWrapper}>
                    <NavLink to={`/profile/${props.id}`}>
                        <img className={styles.avatar} src={props.photoUrl} alt="avatar"/>
                    </NavLink>
                </div>
                {
                    props.followed
                        ? <button disabled={followingProgress.some(id => id === props.id)}
                                  className={styles.button}
                                  onClick={unfollow}>unFollow</button>
                        : <button disabled={followingProgress.some(id => id === props.id)}
                                  className={styles.button}
                                  onClick={follow}>Follow</button>
                }
            </div>
            <div className={styles.descrWrapper}>
                <div>
                    {props.name}
                </div>
                <div>
                    location.country
                </div>
                <div>
                    location.city
                </div>
                <div>
                    {props.status}
                </div>
            </div>
        </div>
    )
}