import React from "react";
import styles from './NavBar.module.css';
import { Icon } from '@iconify/react';

export default function NavBar() {
    return (
        <div className={styles.banner}>
            <div className={styles.redditIcon}>
                <Icon icon="logos:reddit-icon" />
                <h2 className={styles.navbarh2}>reddit</h2>
            </div>
            <div className={styles.search}>
                <Icon icon="system-uicons:search" hFlip={true} />
            </div>

            <div className={styles.iconsWrapper}>
                <Icon icon="fluent-mdl2:bullseye" vFlip={true} />
                <Icon icon="humbleicons:chat" />

                <div>
                    <Icon icon="bitcoin-icons:plus-outline" />
                    <span>create</span>
                </div>

                <Icon icon="clarity:notification-line" />
                <Icon icon="iconamoon:profile-light" />
            </div>



        </div>
    )
}