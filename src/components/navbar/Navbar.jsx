import styles from "./navbar.module.css";
import image from "../../assets/sprakin1 1.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
