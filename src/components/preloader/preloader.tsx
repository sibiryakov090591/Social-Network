import React from 'react';
import styles from './preloader.module.css';

export const Preloader: React.FC = () => {
    return <img className={styles.preloader} src="loader.gif" alt="preloader"/>
}