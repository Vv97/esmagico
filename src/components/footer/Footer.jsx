import styles from "./Footer.module.css";
import image from "../../assets/Screenshot 2020-11-14 at 7.38.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerCon}>
        <div>
          <img src={image} alt="" />
          <p>© 2020 Speakin All rights reserved</p>
        </div>

        <div>
          <div className={styles.footerInput}>
            <div>
              <input type="text" placeholder="Enter your mail ID" />
              <button>Subscribe</button>
            </div>
            <p>Subscribe to our news letter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
