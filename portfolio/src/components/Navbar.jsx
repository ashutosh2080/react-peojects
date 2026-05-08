import styles from "./Navbar.module.css";
import { Icon } from "./icons";
import Button from "./Button/Button";
import pdfFile from "../assets/sample.pdf";




export default function Navbar() {
  return (
    <>

      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="#home">Ashutosh</a>
        </div>
        <ul className={styles.links}>
          {/* <li><a href="#"> Work</a></li> */}
          <li><a href="#projects">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <button className={styles.btn}
            onClick={() => window.open(pdfFile, "_blank")}
          >Resume</button>

        </ul>

      </nav>
      <div className={styles.leftBar}>
        <div className={styles.lbbox}>
          <div className={styles.lbicon}>
            <a href="#home"><Icon name="home" /></a>
            <a
              href="https://github.com/ashutosh2080"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" size="80px" /></a>
            < a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            ><Icon name="Instagram" /></a>
          </div>
          <div className={styles.line}></div>

        </div>

        {/* Left content (icons, etc.) */}
      </div>

      <div className={styles.rightBar}>
        <div className={styles.rbbox}>
          <div className={styles.rbtxt}>jhaashutosh470@gmail.com</div>
          <div className={styles.line}></div>
        </div>
        {/* Right content (email, etc.) */}
      </div>
    </>
  );
}