import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">

      {/* 🔮 Background Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-700/30 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
      <div className="absolute w-96 h-96 bg-blue-700/30 rounded-full blur-3xl bottom-[-120px] right-[-100px]"></div>

      {/* 🌐 Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 💎 Glass Content Card */}
      <div className="relative z-10 text-center max-w-4xl px-8 py-14 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl">

        {/* 👩 Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent"
        >
          Varshini Yadav Nasaram
        </motion.h1>

        {/* 🎓 Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 font-medium tracking-wide"
        >
          Aspiring Artificial Intelligence Developer
        </motion.h2>

        {/* 🧠 Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-gray-400 leading-relaxed text-lg"
        >
          Passionate about Machine Learning, Generative AI, Explainable Systems,
          and building human-centered AI solutions with measurable real-world impact.
        </motion.p>

        {/* 🚀 Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <Link
            to="/projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transform transition duration-300 rounded-xl shadow-lg"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 border border-gray-600 hover:border-purple-400 hover:bg-purple-500/10 transition duration-300 rounded-xl"
          >
            Contact Me
          </Link>
        </motion.div>

      </div>
    </section>
  );
}