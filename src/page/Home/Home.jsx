import Navbar from "../../components/navbar/Navbar";
import styles from "./Home.module.css";
import image from "../../assets/Wallpaper.jpg";
import logo from "../../assets/sprakin1 1.png";
import zoomImg from "../../assets/zoom-logo-transparent-6 1.png";
import Waves from "../../components/waves/Waves";
import MWaves from "../../components/waves/MWaves";
import mimage from "../../assets/shutterstock_481869205 1 (1).png";
// import GrowIndia from "../../components/grow/GrowIndia";
import GrowText from "../../components/grow/GrowText";
import Ellipsesvg from "../../components/ellipses25svg/Ellipsesvg";
import SessionCard from "../../components/sessioncard/SessionCard";
import TrendingLiveLearningSessions from "../../components/trendinglivelearningsessions/TrendingLiveLearningSessions";
import TrenfingHeadrer from "../../components/trendinglivelearningsessions/TrenfingHeadrer";
import LiveSessions from "../../components/livesessions/LiveSessions";
import LearningPeople from "../../components/learningPeople/LearningPeople";
import TrustedClients from "../../components/trustedclients/TrustedClients";
import AboutSpeking from "../../components/aboutspeking/AboutSpeking";
import TrendingSpeaker from "../../components/trendingspeaker/TrendingSpeaker";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.homeImg}>
        <img
          src={image}
          className={styles.homeImgBig}
          srcSet={`${mimage} 376w, ${image} 1400w`}
          sizes="(max-width: 600px) 280px, (max-width: 1920px) 600px, 1200px"
          alt="Wallpaper.jpg"
          loading="lazy"
        />

        <img src={mimage} className={styles.homeImgs} alt="" />
      </div>

      <div className={styles.homeText}>
        <p>Curate Your own Training Sessions with top Keynote Speakers</p>

        <div></div>
      </div>

      <div className={styles.homeTextInner}>
        <div className={styles.hometextCon}>
          <div>
            <img src={logo} alt="" />
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M12.0326 0H8.46741V8.46701H0V12.0322H8.46741V20.5H12.0326V12.0322H20.5V8.46701H12.0326V0Z"
                fill="white"
              />
            </svg>
          </span>
          <div>
            <img src={zoomImg} alt="" />
          </div>
        </div>

        <p>= Your Own Live Session in {"<"}30 minutes</p>
      </div>

      <Waves />
      <MWaves />
      <GrowText />

      <Ellipsesvg />
      <SessionCard />
      <TrendingLiveLearningSessions />
      <TrenfingHeadrer />
      <LiveSessions />
      <LearningPeople />
      <TrustedClients />
      <AboutSpeking />
      <TrendingSpeaker />
      <Footer />
    </div>
  );
};

export default Home;
