import styles from "./header.module.css";
import {Search} from "./search/search";
import {NavLink} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth/auth-reducer";
import logo from "../../images/mainLogo.png"

export const Header: React.FC = (props) => {

    const isAuth = useSelector((state: GlobalStateType) => state.auth.isAuth);
    const login = useSelector((state: GlobalStateType) => state.auth.login);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.logo_img} src={logo} alt="mainLogo"/>
                <div className={styles.logo_text}>Mango Social</div>
            </div>
            <Search/>
            <div className={styles.login}>
                {
                    isAuth
                    ? <NavLink to={"/profile"}>
                            {login}
                            <div><a onClick={logoutHandler}>Logout</a></div>
                    </NavLink>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
};