import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-gray-950 border-b border-gray-800">
      <h1 className="text-xl font-bold text-purple-400">
        Varshini Portfolio
      </h1>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="bg-gray-800 px-4 py-2 rounded-lg"
        >
          Sections ▾
        </button>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 mt-2 bg-gray-900 shadow-lg rounded-lg w-48 border border-gray-700"
          >
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Skills", "/skills"],
              ["Projects", "/projects"],
              ["Experience", "/experience"],
              ["Achievements", "/achievements"],
              ["Certifications", "/certifications"],
              ["Contact", "/contact"],
            ].map(([name, path]) => (
              <Link
                key={name}
                to={path}
                className="block px-4 py-2 hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}