import React, {useEffect} from 'react';
import styles from './users.module.css';
import {Preloader} from "../UI-kit/preloader/preloader";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {getUsersThunkCreator, usersActions} from "../../redux/users-reducer/users-reducer";
import {User} from "./user/user";
import Paginator from "../UI-kit/paginator/paginator";

const Users: React.FC = () => {

    // Hooks
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isLoading
    } = useSelector((state: GlobalStateType) => state.users);
    const dispatch = useDispatch();


    // Lifecycle
    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize));
        return () => {
            dispatch(usersActions.setIsLoading(false));
            dispatch(usersActions.setCurrentPage(1));
        }
    }, [dispatch])


    // Map users items
    const usersData = users
        ? users.map(user => {

            const photoUrl = user.photos.large || user.photos.small || "ava.jpg";

            return (
                isLoading
                    ?
                    <div className={styles.itemWrapper} key={user.id}>
                        <Preloader/>
                    </div>
                    :
                    <User id={user.id}
                          photoUrl={photoUrl}
                          name={user.name}
                          status={user.status}
                          followed={user.followed}
                    />
            );
        })
        : <Preloader/>;


    // Render
    return (
        <>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       portionSize={15}
            />

            <div className={styles.wrapper}>
                {usersData}
            </div>
        </>
    );
}

export default Users;