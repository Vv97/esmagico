import TrendingLiveCard from "./TrendingLiveCard";
import styles from "./TrendingLiveLearningSessions.module.css";

let tredingLive = [
  {
    img: "https://s3-alpha-sig.figma.com/img/6a25/8668/32dbb87c29d0dfe4df9823d40f356101?Expires=1697414400&Signature=XYUSa~lFdey7pnn11tZwwJJIqQ4CICcYrtUxUlR5qbtcfcBiFi~3NaHb7bWN-BiRD5VnmdO-S9pSHZEkfnThctqUFXhIPj1mXv-9YcpnL6~5UFhpf5v4LIsXbvJuczzwOFr7q05hSvZEauJaQDfBXVmxBYgYmJW1dRyEqFM1nqXQESuuLv2p2Ap0kQ-selDRHnnOuUcNqfGDTA4B5EUflL-iR8mgPAWz50-EdhIIDqLk-SFlM3TxDwFWz8jz398dD0T1Lke5ocOsM8Jg9yyHCPWdexej7T1ZSffKpOUwYBo-n9DVy6b3kpubDgJne3iD~PjULjx7u0rhjltf82Zv6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    label: "Leadership and Executive coach",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/1ab3/bd22/a3654dd9a7c09cdfd9ad97c225b9b10e?Expires=1697414400&Signature=Kg9trZj1ZvhJPb67o9nDhwdZ2EKUdGWhO6WONX0V4rjUlGgdo9mmoSDVFVFB-W6c0uAr5dpzg8VlY7eFHo2hH5lccB7uEkmcjxq16BIk6yX8KC6YS~hS-hZ5e2~vy2b9w5BHJ1GV35c99SVLbVNUu~OLI2I7kIF1rQH1QXHIQp9l8pPcpkXclEcjrlaJemwaD1N9Bh9EtJ~FZbWBfKn1nZIv2-nRLqXVoZXTKlkvrfA9h~k6kS0n9hvAiKl9tmRukML1mdMPbimL7R-l5IlblPp3IB9tMJVcZIX013jGP9EJbccKkVoYEry46aI3BI5yvjf1WfP1JxIAwm7KhMDf-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    label: "Change Management and Reboot Training",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/5931/6b41/1d204a60a8573c1e9575ed9debb8d3fa?Expires=1697414400&Signature=g-ICN6-ZaGtxOsnxqj4T6hNArgh3xgR-APzRJAaUIHu~pBBYFwF1LCsQDuFyB~58GS3i5oYloSJU3mC1-4wwyIizcA7Yc5kyO0kVEwTvwqYW~1XXiIjbUWr9pCHrrnqyFn7LPqBmMyHLzUr0ADsF77Hk6N9gYNf~LCljQSfZ19oiUnIAyu5mH5uVB0-2NKLznquUqXJhZLWWDhj-bvQvItG67sEzH5Mlr6DlqY2v1WXTpDMvk0rErhL~m46MnVlLysWMjAuRR9vXgeZIlqLYfJ592eiW3azsW0w5W1~KkjsxVQ8ZWcM6iqI2ShPq5DgJWjGztZ-qftaEgWnch9abwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    label: "Employee Motivation and Engagement",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/67db/147a/d2a25da6555fde8e8b0d970e3b2a2f66?Expires=1697414400&Signature=TV5C8DuA9m5yDbFOlmTTrmtC~fsEiXzSEil3jPOwlq41pzIOuN3iwA4mj4tsqpNGiYNEKeMT3mBLPJs9vb7gxp77vfBHseZdREXG4SXyVeBUzcMLSjDu~SXKeyLDBL~HJ2kb2yVXdSbj6QhK1409o4M3-n-1Fy~MO~Ayo6bcLUSoL5RTcAXKyXvewV8CVDukMRzFh9DEL6lqhZlo0TKQWbIDaZf9FFZJpKF3I0MJlAuBWPnGmRtO7dDZXzrLSxydJRTwuWaddYKuGIsf1Lf~cGLkVy4oE5z43ILsIHhkgGm4AVt4DtCsaw8bplg2ZUlenwNc0wDZJkhEMWVTKz5F~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    label: "Employee Upskill Sessions",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/eb94/97b2/77aac7df8fdaee7635c12561375fc44d?Expires=1697414400&Signature=nMX9R8T27MXkUaS8t8kAaCTmN5Kp2hL-icshMeAkfEjhXMVFBkaqmj3bAGFNkBWoP3YDcjsXlmb3xoH4YYdttuuvLsfu8s-ClGZDw2kWcoaTFXuPlrc1J3KAwhKpNKWFa0lqvMN~axSrMu2qAi4G5jYQwLRsB86ZiMlnYO8rXssQwZrDD3LMsDywbDIQTA7vXEWhuRr089g8teHbq1lLFrqS0C9fPoOHJcYnVoEM1M1eWhrWZcCWXv7pxggbgo-ejWXe~8-oRYA284MRoGHta5evBd5P5zzlAzLLV3dDZQTvgysLrF9b9NFOzOMpw~UhTFJDfPWASYGXIv3Kt30WNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    label: "Soft skills Training",
  },
];

const TrenfingHeadrer = () => {
  return (
    <div className={styles.trendingLiveLearningSessionsCon}>
      <div>
        <p>Trending</p>
        <h1> Live Learning Sessions</h1>
      </div>
      <div>
        {tredingLive.map((res, index) => (
          <TrendingLiveCard {...res} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TrenfingHeadrer;
