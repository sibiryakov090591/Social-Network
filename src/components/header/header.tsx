import styles from "./header.module.css";
import {Search} from "./search/search";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header: React.FC<PropsType> = (props) => {

    const logoutHandler = () => {
        props.logout();
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.logo_img} src="mainLogo.png" alt="mainLogo"/>
                <div className={styles.logo_text}>Mango Social</div>
            </div>
            <Search/>
            <div className={styles.login}>
                {
                    props.isAuth
                    ? <NavLink to={"/profile"}>
                            {props.login}
                            <div><a onClick={logoutHandler}>Logout</a></div>
                    </NavLink>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
};