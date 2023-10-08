import styles from "./TrendingLiveLearningSessions.module.css";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const TrendingLiveCard = ({ img, label }) => {
  return (
    <div className={styles.trendingLiveCard}>
      <div>
        <img
          src={`${img}`}
          style={{
            background: "lightgray",
            backgroundSize: "50%",
            backgroundRepeat: "no-repeat",
          }}
          alt=""
        />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default TrendingLiveCard;

TrendingLiveCard.prototype = {
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
