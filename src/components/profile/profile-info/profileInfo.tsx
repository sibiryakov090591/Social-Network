import React from "react";
import styles from "./profileInfo.module.css";
import {ProfileInfoType} from "../../../redux/my-types";
import {Preloader} from "../../preloader/preloader";

type PropsType = {
    profileInfo: ProfileInfoType
};

export const ProfileInfo: React.FC<PropsType> = (props) => {

    if (!props.profileInfo) return <Preloader />

    return (
        <div className={styles.profile_wrapper}>
            <img className={styles.avatar}
                 src={props.profileInfo.photos.large || props.profileInfo.photos.small || "ava.jpg"}
                 alt="avatar"
            />

            <div className={styles.descr}>
                <div className={styles.descr_item}>
                    <span className={styles.span}>Name:</span>
                    {props.profileInfo.fullName}
                </div>
                <div className={styles.descr_item}>
                    <span className={styles.span}>About me:</span>
                    {props.profileInfo.aboutMe}
                </div>
            </div>
        </div>
    )
};
