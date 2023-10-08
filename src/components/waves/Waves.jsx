import FormInside from "../from/FormInside";
import From from "../from/From";
import styles from "./waves.module.css";

const Waves = () => {
  return (
    <div className={styles.homeWaves}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1349"
        height="460"
        viewBox="0 0 1440 460"
        fill="none"
      >
        <path
          opacity="0.8"
          d="M-3 159.471C-3 159.471 257 -134.104 592 75.3963C927 284.897 1437 159.471 1437 159.471V256.396C1437 256.396 1825 594 1266 398C707 202 -3 256.396 -3 256.396V159.471Z"
          fill="#538DD7"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1349"
        height="434"
        viewBox="0 0 1440 434"
        fill="none"
      >
        <path
          d="M-9.00001 183C-9.00001 183 388 -138.104 723 71.3959C1058 280.896 1568 155.47 1568 155.47L1453 433.5C891.5 197.5 150 258.5 -22 346C-22 230.5 -9.00001 183 -9.00001 183Z"
          fill="#538DD7"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1349"
        height="489"
        viewBox="0 0 1440 489"
        fill="none"
      >
        <path
          d="M-9.00001 182.564C-9.00001 182.564 388 -138.54 723 70.9603C1058 280.461 1568 155.035 1568 155.035L1444.5 489C883 253 151.5 236.5 -20.5 324C-20.5 208.5 -9.00001 182.564 -9.00001 182.564Z"
          fill="#FFDE00"
        />
      </svg>

      <div className={styles.wavesForm}>
        <From />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="63"
          height="61"
          viewBox="0 0 63 61"
          fill="none"
        >
          <path
            d="M3.19031e-08 0.500488L62.0914 52.5009L47.1701 58.5197C35.2239 63.3384 21.6497 57.4074 17.0694 45.3679L3.19031e-08 0.500488Z"
            fill="#C4DBFA"
          />
        </svg>

        <FormInside />
      </div>
    </div>
  );
};

export default Waves;
