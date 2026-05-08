import styles from "./Projects.module.css";
import img from "../assets/hero.png";


export default function Project() {
    return (
        <>
            <section className={styles.proctn} id="projects">
                <div className={styles.protitle}>
                    <h2>01. &nbsp;&nbsp;My Projects </h2>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.prosec}>
                    <div className={styles.prolft}>
                        <img src={img} className={styles.abtimage} />
                    </div>
                    <div className={styles.prort}>
                        <p>Featured project </p>
                        <h2>project random stuff</h2>
                        <div> </div>
                        <div className={styles.prodes}> 
                            <p>this is the description of the project i am working on something which doesnot
                                have any relation to real lifethis is the description of the project i am working on
                                
                            </p>
                        </div>
                        <ul>
                            <li>link1</li>
                            <li>link2</li>
                            <li>link3</li>
                            <li>link4</li>
                            
                        </ul>
                        <div className={styles.prolink}></div>
                    </div>

                </div>
            </section>

        </>
    )
}