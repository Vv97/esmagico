import styles from "./LearningPeople.module.css";

const LearningPeople = () => {
  return (
    <div className={styles.learningPeople}>
      <div>
        <div>
          <h1>Real People Real Learnning</h1>
          <p>
            SpeakIn is Asias largest on-demand network providing access to top
            regional speakers.
          </p>
        </div>
        <div>
          <img
            style={{
              background: "lightgray",
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
            }}
            src="https://s3-alpha-sig.figma.com/img/5ac0/1d97/074ad35642994e869f88e0dac6233016?Expires=1697414400&Signature=EG~ANnztT1WfbqXNwFJZQOVCUyrgspElrD-K1-hjdt7L9HOITdhQri5PjXdv2WZzRUjQHhRilXNFwGlhp3IDk5Q17OZWXLylBfX3FsrKAlPerIyem4Dnqh6eATn4YXxt9Xf-tuOZ5FSGXtuJxdQ8C41CPCmRUo7J~B8v98RN9HdeOCBobTNZYT~u19FZLj0ca1SDQ0wKfq9qKBPLeT1twgYcyikgGXzkEa7JEmMF9YcVRHF5CaH~LI-6b0gpxScH6xKmIfnvx3t9LQqnkXHjYXkHpjmjaQIUv7rTRYcMvOvhaguyUqem8j6YR1yYCzpfz2l3fIbFp83GPxXXt9d-Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LearningPeople;
