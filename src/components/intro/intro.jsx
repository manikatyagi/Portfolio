
// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./intro.module.css";
export const Intro = () => {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Manika</h1>
                <p className={styles.description}>
                    I'm an aspiring computer science engineering student deeply passionate about development,
                    actively exploring diverse domains to broaden my skill set.
                    I'm an enthusiastic learner, constantly seeking opportunities to grow and refine my abilities in programming and development.
                </p>
                <a href="mailto:manika.tyagi09@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("Me/myImage.png")}
                alt="image of me"
                className={styles.myImage}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}