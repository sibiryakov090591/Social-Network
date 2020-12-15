import React from 'react';
import styles from "./header.module.css";
import {Search} from "./search/search";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img className={styles.header__logo_img} src="mainLogo.png" alt="mainLogo"/>
                <div className={styles.header__logo_text}>Mango Social</div>
            </div>
            <Search />
        </header>
    )
}