import React from "react";
import styles from "./profileInfo.module.css";
import { ProfileInfoDataType } from "../../../redux/my-types";

type ProfileInfoPropsType = {
    profileInfoData: ProfileInfoDataType
};

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div className={styles.portfolio_wrapper}>
            <img className={styles.avatar}
                 src={props.profileInfoData.avatar}
                 alt="my-avatar"
            />

            <div className={styles.descr}>
                <div className={styles.descr_item}>
                    <span className={styles.span}>Firstname:</span>
                    {props.profileInfoData.firstName}
                </div>
                <div className={styles.descr_item}>
                    <span className={styles.span}>Lastname:</span>
                    {props.profileInfoData.lastName}
                </div>
                <div className={styles.descr_item}>
                    <span className={styles.span}>Birthday:</span>
                    {props.profileInfoData.birthday}
                </div>
            </div>
        </div>
    )
};
