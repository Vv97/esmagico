import styles from "./SessionCrad.module.css";
import recsvg from "../../assets/undraw_youtube_tutorial_2gn3 1 (1).png";
import RectengleSvg from "../rectenglesvg/RectengleSvg";

const SessionCard = () => {
  return (
    <div className={styles.sessionCard}>
      <h1>Why Curate Your Own Sessions? </h1>
      <div>
        <div>
          <img src={recsvg} alt="" />
          <RectengleSvg />
        </div>
        <div className={styles.sessionCardChild}>
          <div>
            <span></span>
            <p>
              Standard sessions do not <span>personalize</span> the learning for
              your audience
            </p>
          </div>
          <div>
            <span></span>
            <p>
              <span>Pick & Choose</span> the speakers who meet all your check
              boxes
            </p>
          </div>
          <div>
            <span></span>
            <p>
              <span>Flexible schedule</span> to meet your plans
            </p>
          </div>
          <div>
            <span></span>
            <p>
              <span>Plug & Play</span> with flawless technology backbone
            </p>
          </div>
          <div>
            <span></span>
            <p>
              <span>Exclusive expert sessions</span> on topic of your choice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
