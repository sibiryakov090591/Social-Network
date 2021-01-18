import React from 'react';
import styles from './users.module.css';
import {UsersType} from "../../redux/my-types";

type UsersPropsType = {
    usersData: UsersType
    subscribeHandler: (id: string) => void
    unsubscribeHandler: (id: string) => void
};

export const Users: React.FC<UsersPropsType> = (props) => {

    const users = props.usersData.users.map(i => {
        const unsubscribeHandler = () => props.unsubscribeHandler(i.id);
        const subscribeHandler = () => props.subscribeHandler(i.id);
        return (
            <div className={styles.itemWrapper} key={i.id}>
                <div className={styles.buttonWrapper}>
                    <div className={styles.avatarWrapper}>
                        <img className={styles.avatar} src={i.photoUrl} alt="avatar"/>
                    </div>
                    {
                        i.isFriend
                        ? <button className={styles.button} onClick={unsubscribeHandler}>unFollow</button>
                        : <button className={styles.button} onClick={subscribeHandler}>Follow</button>
                    }
                </div>
                <div className={styles.descrWrapper}>
                    <div>
                        {i.name}
                    </div>
                    <div>
                        {i.location.country}
                    </div>
                    <div>
                        {i.location.city}
                    </div>
                    <div>
                        {i.status}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className={styles.wrapper}>
            {users}
        </div>
    );
};