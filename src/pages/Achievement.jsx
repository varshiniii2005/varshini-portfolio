import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    "1st Place – B.Tech First Year Project Expo (AI Assistive Algorithm)",
    "Represented Woxsen University – Japan Design Expo",
    "Top 10 – Innoverse 12-Hour Hackathon (Inclusive Website Solution)",
    "Co-Chair – Meta Tech Center of Excellence (CoE)",
    "Tech Outreach Member – Dean’s Fellowship",
    "Social Media Head – Legal Club",
    "Executive – Trade Tower",
    "Societal Impact Project (SIP) Lead – Established School Library",
    "1st Division in English – CBSE Board Examinations",
  ];

  return (
    <AnimatedPage>
      <h1 className="text-4xl font-bold text-purple-400 mb-12">
        Achievements & Leadership
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-gray-300"
          >
            🏅 {item}
          </motion.div>
        ))}
      </div>
    </AnimatedPage>
  );
}