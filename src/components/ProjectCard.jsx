import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({ title, summary, details }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(true)}
        style={styles.card}
      >
        <h2>{title}</h2>
        <p style={{ color: "#38bdf8" }}>{summary}</p>
      </motion.div>

      {/* MODAL */}
      {open && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>{title}</h2>
            <p>{details}</p>

            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  card: {
    background: "#020617",
    padding: "20px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    background: "#020617",
    padding: "30px",
    borderRadius: "15px",
    width: "60%",
  },
};