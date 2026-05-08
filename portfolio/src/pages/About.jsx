import styles from "./About.module.css";
import img from "../assets/hero.png";

export default function About() {
    return (
        <>
            <div className={styles.abtxt} id="about">
                <div className={styles.absec} >
                    <div className={styles.absecabt}>
                        <h2>01. &nbsp;&nbsp;About Me</h2>
                        <div className={styles.line}></div>
                    </div>
                    <p className={styles.abp1}>here i will keep the paragraph about myself
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum."
                    </p>
                    <p className={styles.abtabt}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e
                        xercitation ullamco laboris</p>
                        <ul className={styles.abtlist}>
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Eleventy</li>
                            <li>Node.js</li>
                            <li>WordPress</li>

                        </ul>

                </div>
                <div className={styles.abtcontainer}>
                    <img src={img} className={styles.abtimage} />
                    <div className={styles.abtoverlay}></div>
                </div>

            </div>
        </>
    );

}