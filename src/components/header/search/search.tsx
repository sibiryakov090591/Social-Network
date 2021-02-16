import React from 'react';
import styles from "./search.module.css";

export const Search: React.FC = () => {
    return (
            <div className={styles.search}>
                <input className={styles.search_input} type="search" placeholder="To search, type and hit enter"/>
                <img className={styles.search_icon} src="search.png" alt="search-icon"/>
            </div>
    )
};
