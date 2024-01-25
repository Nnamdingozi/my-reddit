import React from "react";
import { Icon } from '@iconify/react';
import styles from './SubReddit.module.css'

export default function SubReddit() {
    return (
        <div className={styles.subRedditContainer}>
            <div>
                <Icon icon="arcticons:ask-ai" />
                <p>Ask reddit</p>
            </div>
            <div>
                <Icon icon="ph:hand-palm-bold" />
                <p>Face palm</p>
            </div>
            <div>
                <Icon icon="et:pictures" />
                <p>pics</p>
            </div>
        </div>
    )
}