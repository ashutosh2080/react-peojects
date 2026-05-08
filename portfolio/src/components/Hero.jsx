import styles from "./Hero.module.css";
import Button from "./Button/Button";

export default function Hero() {
  return (
    <header className={styles.hero} id="home">
      <p> Hi, i am  </p>
      <h1 className={styles.hmn}>Ashutosh Kumar Jha </h1>
      <h1 className={styles.htxt}>Building web</h1>
      
      <p>Strategy, design, and development for the next wave.<br />
      I’m a software engineer specializing in building (and occasionally designing) <br />
      exceptional digital experiences. Currently, I’m focused on building accessible, 
      <br/>human-centered products at Upstatement.</p>
      
      
    </header>
  );
}