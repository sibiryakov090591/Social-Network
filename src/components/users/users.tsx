import React, {useEffect} from 'react';
import styles from './users.module.css';
import {Preloader} from "../preloader/preloader";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {getUsersThunkCreator, usersActions} from "../../redux/users-reducer/users-reducer";
import {User} from "./user/user";

export const Users: React.FC = () => {

    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isLoading
    } = useSelector((state: GlobalStateType) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize));
        return () => {
            dispatch(usersActions.setIsLoading(false));
            dispatch(usersActions.setCurrentPage(1));
        }
    }, [])

    const howManyPages = Math.ceil(totalUsersCount / pageSize);
    let pagesArray = [];
    for (let i = 1; i <= howManyPages; i++) {
        pagesArray.push(i);
    }

    const pages = pagesArray.map(i => {
        let activeClassName = styles.pageNumber;
        if (currentPage === i) {
            activeClassName = styles.activePageNumber;
        }
        return <span key={i}
                     className={activeClassName}
                     onClick={() => dispatch(getUsersThunkCreator(i, pageSize))}>{i}</span>
    });

    const usersData = users
        ? users.map(i => {

            const photoUrl = i.photos.large || i.photos.small || "ava.jpg";

            return (
                isLoading
                    ?
                    <div className={styles.itemWrapper} key={i.id}>
                        <Preloader/>
                    </div>
                    :
                    <User id={i.id}
                          photoUrl={photoUrl}
                          name={i.name}
                          status={i.status}
                          followed={i.followed}
                    />
            );
        })
        : <Preloader/>;

    return (
        <div>
            <div className={styles.pagesWrapper}>
                {pages}
            </div>

            <div className={styles.wrapper}>
                {usersData}
            </div>
        </div>
    );
}