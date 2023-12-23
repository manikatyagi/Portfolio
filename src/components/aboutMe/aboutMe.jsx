// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./aboutMe.module.css";
export const AboutMe = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("aboutMe/aboutImage.png")}
                    alt="my pic"  className={styles.aboutImage}/>

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("aboutMe/coder.png")} alt="coder" />
                        <div className={styles.aboutItemText}>
                            <h3>Coder</h3>
                            <p>I'm a coder experienced in C++ and Java,
                                enthusiastic about mastering new languages, and proficient at tackling complex problems with ease.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("aboutMe/cursorIcon.png")} alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>FrontEnd Developer</h3>
                            <p>I specialize in frontend development, crafting responsive and optimized websites through my experience and expertise.</p>
                        </div>
                    </li>


                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("aboutMe/cloud.png")} alt="cloud" />
                        <div className={styles.aboutItemText}> 
                            <h3>AWS Certified Cloud Practitioner</h3>
                            <p>I have a fundamental understanding of IT services and their uses in the AWS Cloud.
                                I demonstrated cloud fluency and foundational AWS knowledge.
                                I am able to identify essential AWS services necessary to set up AWS-focused projects.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    );
}