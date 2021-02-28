import React from 'react';
import styles from './preloader.module.css';
import preloader from "../../../images/loader.gif"

export const Preloader: React.FC = () => {
    return <img className={styles.preloader} src={preloader} alt="preloader"/>
}