import styles from "./Form.module.css";
import logo from "../../assets/speakin-logo 1.png";
import CheckSvg from "../checksvg/CheckSvg";

const FormInside = () => {
  return (
    <div className={styles.formInside}>
      <div className={styles.formInsideHeader}>
        <img src={logo} alt="" />
        <p>Welcome Form</p>
        <span>Submit Your Requirement</span>
      </div>

      <form action="">
        <div className={styles.formInsideLabel}>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter name" />
        </div>
        <div className={styles.formInsideLabel}>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter email" />
        </div>
        <div className={styles.formInsideLabel}>
          <label htmlFor="">Mobile Number</label>
          <input type="number" placeholder="Enter mobile number" />
        </div>
        <div className={styles.formInsideLabel}>
          <label htmlFor="">Organization</label>
          <input type="text" placeholder="Enter name" />
        </div>
        <div className={styles.formInsideLabel}>
          <label htmlFor="">Select Date</label>
          <input type="date" />
        </div>

        <div className={styles.formCheckbox}>
          <p>Topic of the Session:</p>
          <div>
            <div>
              <CheckSvg />
              <span>Business Leadership</span>
            </div>
            <div>
              <CheckSvg />
              <span>Motivation During Crisis</span>
            </div>
            <div>
              <CheckSvg />
              <span>Spirituality</span>
            </div>
          </div>
        </div>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default FormInside;
