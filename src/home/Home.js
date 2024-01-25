import React from "react";

import Menu from "../menu/Menu";
import SubReddit from "../subReddit/SubReddit";
import NavBar from "../navbar/NavBar";
import styles from './home.module.css'
import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div className={styles.banner}>
            <NavBar />
            <Menu />
            <SubReddit />
            
        </div>
    )


}