import styles from "./waves.module.css";

const MWaves = () => {
  return (
    <div className={styles.mwaves}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="100"
        viewBox="0 0 375 88"
        fill="none"
      >
        <path
          opacity="0.8"
          d="M-12 53.848C80.8628 -50.8398 274.384 34.854 402.449 4.90594L398.562 31.7783C398.562 31.7783 503.111 125.378 347.883 71.0374C192.656 16.697 -6.16855 53.8482 -6.16855 53.8482L-12 53.848Z"
          fill="#538DD7"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="78"
        viewBox="0 0 375 78"
        fill="none"
      >
        <path
          d="M432 0L400.031 78C243.942 11.7913 37.8138 28.9046 -10 53.4523C34.756 -30.7115 367.012 16.1297 432 0Z"
          fill="#538DD7"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="100"
        viewBox="0 0 375 93"
        fill="none"
      >
        <path
          d="M-10 47.0522C127.316 -47.4893 275.356 38.5548 432 0L397.636 93C241.399 27.2806 37.859 22.6859 -10 47.0522Z"
          fill="#FFDE00"
        />
      </svg>
    </div>
  );
};

export default MWaves;
