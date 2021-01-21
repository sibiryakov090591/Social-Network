import React from 'react';
import styles from './users.module.css';
import {UserItemType} from "../../redux/my-types";
import {Preloader} from "../preloader/preloader";
import {NavLink} from 'react-router-dom';

type PropsType = {
    usersData: UserItemType[]
    subscribeHandler: (id: string | number) => void
    unsubscribeHandler: (id: string | number) => void
    setUsers: (users: UserItemType[]) => void
    setCurrentPage: (id: number) => void
    setTotalCount: (id: number) => void
    onPageChange: (id: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
};

export const Users: React.FC<PropsType> = (props) => {

    const howManyPages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesArray = [];
    for (let i = 1; i <= howManyPages; i++) {
        pagesArray.push(i);
    }
    ;

    const pages = pagesArray.map(i => {
        let activeClassName = styles.pageNumber;
        if (props.currentPage === i) {
            activeClassName = styles.activePageNumber;
        }
        return <span key={i}
                     className={activeClassName}
                     onClick={() => props.onPageChange(i)}>{i}</span>
    });

    const users = props.usersData
        ? props.usersData.map(i => {
            const unsubscribeHandler = () => props.unsubscribeHandler(i.id);
            const subscribeHandler = () => props.subscribeHandler(i.id);
            const photoUrl = i.photos.large || i.photos.small || "ava.jpg";
            return (
                props.isLoading
                    ?
                    <div className={styles.itemWrapper} key={i.id}>
                        <Preloader/>
                    </div>
                    :
                    <div className={styles.itemWrapper} key={i.id}>
                        <div className={styles.buttonWrapper}>
                            <div className={styles.avatarWrapper}>
                                <NavLink to={`/profile/${i.id}`}>
                                    <img className={styles.avatar} src={photoUrl} alt="avatar"/>
                                </NavLink>
                            </div>
                            {
                                i.followed
                                    ? <button className={styles.button} onClick={unsubscribeHandler}>unFollow</button>
                                    : <button className={styles.button} onClick={subscribeHandler}>Follow</button>
                            }
                        </div>
                        <div className={styles.descrWrapper}>
                            <div>
                                {i.name}
                            </div>
                            <div>
                                location.country
                            </div>
                            <div>
                                location.city
                            </div>
                            <div>
                                {i.status}
                            </div>
                        </div>
                    </div>
            );
        })
        : <Preloader />;

    return (
        <div>
            <div className={styles.pagesWrapper}>
                {pages}
            </div>

            <div className={styles.wrapper}>
                {users}
            </div>
        </div>
    );
}