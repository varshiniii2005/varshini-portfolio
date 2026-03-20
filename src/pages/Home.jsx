import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div style={styles.container}>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.hero}
      >
        <h1 style={styles.title}>Hi, I'm Varshini 🚀</h1>

        <h2 style={styles.subtitle}>
          <ReactTyped
            strings={[
              "AI/ML Engineer",
              "Generative AI Builder",
              "Computer Vision Developer",
              "RAG Systems Developer"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>

        <p style={styles.tagline}>
          Driven by Data | Inspired by Intelligence | Building Real-World AI Systems
        </p>
      </motion.div>

      {/* STATS SECTION */}
      <motion.div
        style={styles.stats}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div style={styles.card}>
          <h2>45%</h2>
          <p>LLM Hallucination Reduced</p>
        </div>

        <div style={styles.card}>
          <h2>200ms</h2>
          <p>Real-Time Inference</p>
        </div>

        <div style={styles.card}>
          <h2>30%</h2>
          <p>Accuracy Improvement</p>
        </div>

        <div style={styles.card}>
          <h2>5K+</h2>
          <p>Images Processed</p>
        </div>
      </motion.div>

    </div>
  );
}

/* 🔥 STYLES */
const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #0f172a, #020617)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    textAlign: "center",
  },

  hero: {},

  title: {
    fontSize: "3rem",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: "1.8rem",
    color: "#38bdf8",
    marginTop: "10px",
  },

  tagline: {
    opacity: 0.7,
    marginTop: "10px",
  },

  stats: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    transition: "0.3s",
  },
};