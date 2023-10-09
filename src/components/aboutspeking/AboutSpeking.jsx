import styles from "./AboutSpeking.module.css";
import image from "../../assets/screenshot 2020-11-16 at 1.08.png";

const AboutSpeking = () => {
  return (
    <div className={styles.aboutSpeking}>
      <div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/9434/1a09/0d24b53c16b1224f0e3405a449c55fc2?Expires=1697414400&Signature=nuttXu8oEX2QBUmNkz9JcTQO2DqXDwAOEDsgmJ41WigR8LMLn3xsPnvOx-Ru9xkto8wn4oYUOQOwCAjY2q55Hw3oT45B6KnGBguZMZaAiyXFzsQ4tB61cze4txQHkA5C4Q6zBGi9XwUnrBr6PEnlGfQSgyzi4NlBeglCjewvFuVJlmDatZF7izrlGi88Cp4INOQFcxOEQheQOiWD4XWUfW--UNXzQVA1EN1mAGKL4GL1eiKoaw4pEKtsH8pizrNV30mwCgI2TZJ176lscXDYe1Fs3uiGURwGkJhYQybv22wRqjF4Gd9jomN2DJPMg1hKIpmTD5ez8fSMERC5qsv5Ug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <img src={image} alt="" />
        </div>

        <div>
          <h1>About SpeakIn</h1>
          <p>
            SpeakIn is Asias largest on-demand network providing access to top
            regional speakers, thought leaders and their content. Enabling
            organizations to build performance agility and win over disruption,
            at SpeakIn only the best come together to inform, inspire and
            motivate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSpeking;
