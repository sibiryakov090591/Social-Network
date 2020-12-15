import React from 'react';
import styles from "./search.module.css";

export function Search() {
    return (
            <div className={styles.search}>
                <input className={styles.search_input} type="text"/>
                <img className={styles.search_icon} src="search.png" alt="search-icon"/>
            </div>
    )
}