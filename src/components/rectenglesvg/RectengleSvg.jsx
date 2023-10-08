import styes from "../sessioncard/SessionCrad.module.css";

const RectengleSvg = () => {
  return (
    <>
      <svg
        className={styes.rectengleSvg}
        xmlns="http://www.w3.org/2000/svg"
        width="423"
        height="408"
        viewBox="0 0 423 408"
        fill="none"
      >
        <path
          opacity="0.1"
          d="M153.316 39.3251C222.015 -18.97 324.963 -10.5365 383.258 58.1619C441.553 126.86 433.12 229.809 364.421 288.104L269.309 368.813C200.61 427.108 97.6618 418.675 39.3667 349.976C-18.9283 281.278 -10.4948 178.329 58.2036 120.034L153.316 39.3251Z"
          fill="url(#paint0_linear_0_75)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_75"
            x1="211.312"
            y1="0.572937"
            x2="211.313"
            y2="407.565"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#316BBF" />
            <stop offset="1" stopColor="#7A5CD0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default RectengleSvg;
