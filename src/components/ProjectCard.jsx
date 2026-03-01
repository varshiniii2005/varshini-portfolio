import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, summary, details }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 p-6 rounded-xl border border-gray-700"
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{summary}</p>

      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-purple-400"
      >
        {open ? "Show Less ▲" : "Show More ▼"}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-gray-300"
        >
          {details}
        </motion.div>
      )}
    </motion.div>
  );
}