import React from "react";
import styles from "./profileInfo.module.css";
import {ProfileInfoDataType} from "../../../redux/state";

type PropsType = {
    profileInfoData: ProfileInfoDataType
}

export const ProfileInfo: React.FC<PropsType> = ({profileInfoData}) => {

    return (
        <div className={styles.portfolio_wrapper}>
            <img className={styles.avatar} src={profileInfoData.avatar} alt="my-avatar"/>
            <div className={styles.descr}>
                <div className={styles.descr_item}><span className={styles.span}>Firstname:</span> {profileInfoData.firstName}</div>
                <div className={styles.descr_item}><span className={styles.span}>Lastname:</span> {profileInfoData.lastName}</div>
                <div className={styles.descr_item}><span className={styles.span}>Birthday:</span> {profileInfoData.birthday}</div>
            </div>
        </div>
    )
}