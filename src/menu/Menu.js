import React from "react";
import { Icon } from '@iconify/react';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (

        <div className={styles.menuContainer}>
            <Link to='/'>
                <div className={styles.menuItem}>
                    <Icon icon="bxs:home" /> <p>Home</p>
                </div>
            </Link>

            <Link to='about'>
                <div className={styles.menuItem} >

                    <Icon icon="flat-color-icons:reddit" />
                    <p>About reddit</p>

                </div>
            </Link>

            <div className={styles.menuItem} >
                <Icon icon="pepicons-pencil:megaphone" />
                <p>Advertise</p>
            </div>
            <div className={styles.menuItem} >
                <Icon icon="formkit:help" />
                <p>Help</p>
            </div>
            <div className={styles.menuItem} >

            </div>
        </div>
    )
}