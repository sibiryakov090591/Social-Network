import React from 'react';
import styles from "./dialogs.module.css";
import {People} from "./people/people";
import {Messages} from "./messages/messages";
import {useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

const Dialogs: React.FC = () => {

    const isAuth = useSelector((state: GlobalStateType) => state.auth.isAuth);

    if (!isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={styles.dialogs_wrapper}>
            <People/>
            <Messages/>
        </div>
    )
};

export default Dialogs;