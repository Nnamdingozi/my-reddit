import React from "react"
import { Icon } from '@iconify/react';
import styles from './About.module.css';



export default function About() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Icon icon="logos:reddit-icon" />
                    <h2>reddit</h2>
                </div>
                <div className={styles.navContainer}>
                    <h2>About</h2>
                    <h2>Career</h2>
                    <h2>Blog</h2>
                    <button className={styles.navBtn}>Join Now</button>

                </div>

            </div>
            <main>


                <div className={styles.dive}>
                    <h3>
                        Dive Into Anything
                    </h3>
                    <p>
                        Reddit is the home of thousand communities, endless<br />
                        conversations, and authentic human connection. Whether you are<br />
                        into breaking news, sports, TV fan theories or a never ending <br />
                        stream of internet's cutest animals, there's a community on <br />
                        Reddit for you.
                    </p>

                    <h3>
                        How Does Reddit Work?
                    </h3>
                    <p>
                        Every day, millions of people around the world post, vore, and comment in < br />
                        communities organizes around their interests.
                    </p>
                    <button>visit reddit.com</button>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.wrapper}> <Icon icon="lucide:pen-line" color="orangered" /> <h3>Post</h3>
                        </div>
                        <p> The community can share <br /> content by posting stories, links, images and videos.</p>

                    </div>
                    <div className={styles.card}>
                        <div className={styles.wrapper}>
                            <Icon icon="mingcute:comment-fill" color="orangered" /> <h3>Comment</h3>
                        </div>
                        <p> The community comments on <br /> posts. Comments provide <br /> discussion and often humor.</p>



                    </div>
                    <div className={styles.card}>
                        <div className={styles.wrapper}>
                            <Icon icon="mdi:arrow-up-bold" color="orangered" /> <h3>Vote</h3>
                        </div>
                        <p>Comments & posts can be <br /> upvoted or downvoted. The most interesting content rises <br /> to the top.</p>

                    </div>
                </div>
            </main>
            <footer>
                
            </footer>
        </>
    )
}