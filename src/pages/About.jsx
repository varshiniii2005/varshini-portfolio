import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";

export default function About() {
  return (
    <AnimatedPage>
      <div className="text-white px-6 md:px-20 py-10 space-y-12">

        {/* HEADER */}
        <motion.h1
          className="text-4xl font-bold text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h1>

        {/* INTRO */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          I'm an aspiring AI/ML Engineer passionate about building intelligent systems 
          that solve real-world problems. My work focuses on Computer Vision, 
          Generative AI, and Explainable AI — combining research with practical applications.
        </motion.p>

        {/* WHAT I DO */}
        <div>
          <h2 className="text-2xl text-blue-400 mb-4">What I Do</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#020617] p-5 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold">🤖 AI Systems</h3>
              <p className="text-gray-400">
                Build real-time AI solutions like assistive vision systems and intelligent agents.
              </p>
            </div>

            <div className="bg-[#020617] p-5 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold">🧠 Machine Learning</h3>
              <p className="text-gray-400">
                Train and optimize models with strong focus on accuracy and performance.
              </p>
            </div>

            <div className="bg-[#020617] p-5 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold">⚡ Generative AI</h3>
              <p className="text-gray-400">
                Build RAG pipelines and LLM-based systems with reduced hallucinations.
              </p>
            </div>

          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div>
          <h2 className="text-2xl text-green-400 mb-4">Highlights</h2>

          <ul className="space-y-2 text-gray-300">
            <li>🚀 Built real-time AI system with &lt;200ms latency</li>
            <li>🧠 Reduced LLM hallucinations by 45%</li>
            <li>📈 Improved model accuracy by 30%</li>
            <li>🏆 1st Place Project Expo Winner</li>
            <li>🌍 Represented at Japan Design Expo</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold">
            Building intelligent systems that create real impact 🚀
          </h2>
        </div>

      </div>
    </AnimatedPage>
  );
}