import styles from "./Contact.module.css";
import Button from "../components/Button/Button";

export default function Contact() {
    return (
        <>
            <section className={styles.cnt} id="contact">
                <div className={styles.cntcnt}>
                    <h4>0.3 &nbsp;&nbsp; What's Next?</h4>
                    <h1>Get In Touch </h1>
                    <p>Although I’m not currently looking for any new opportunities,
                        my inbox is always open. Whether you have a question or just want to say hi,
                        I’ll try my best to get back to you!</p>
                    <a
                        href="https://wa.me/919482967870?text=Hi%20Ashutosh,%20I%20saw%20your%20portfolio"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button className={styles.cntbtn}>Say hello</Button></a>
                </div>
            </section>
        </>
    )
}
