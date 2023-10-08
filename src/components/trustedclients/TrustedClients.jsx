import styles from "./TrustedClients.module.css";
import images from "../../assets/Screenshot 2020-11-27 at 7.16.png";

const TrustedClients = () => {
  return (
    <div className={styles.trustedClients}>
      <div>
        <h1>Your SpeakIn is Trusted by the Best of Clients</h1>
        <p>
          SpeakIn speakers have enthralled audiences across top-of-the-line
          businesses in varied sectors globally.
        </p>

        <div>
          <img src={images} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrustedClients;
