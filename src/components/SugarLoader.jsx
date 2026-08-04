import { motion } from "framer-motion";
import styles from "./SugarLoader.module.css";

export default function SugarLoader() {
  return (
    <div className={styles.loaderContainer}>
      {/* ── Animated Sugar Logo ── */}
      <motion.div
        className={styles.logoWrapper}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div className={styles.logoGlow} />
        <img
          src="/sugar.jpg"
          alt="Sugar Cocktail Bar"
          className={styles.logoImage}
        />
        <div className={styles.logoRing} />
      </motion.div>

      {/* ── Loading Text ── */}
      <motion.p
        className={styles.loadingText}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>

      {/* ── Dot Animation ── */}
      <div className={styles.dotsContainer}>
        <motion.span
          className={styles.dot}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.span
          className={styles.dot}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
        />
        <motion.span
          className={styles.dot}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
        />
      </div>
    </div>
  );
}
