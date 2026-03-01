import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      items: ["Python", "JavaScript", "Java", "SQL"],
    },
    {
      title: "Web Technologies",
      items: ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
    },
    {
      title: "Machine Learning",
      items: [
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "CNNs",
        "EfficientNet-B0",
        "Swin Transformer",
        "LangChain",
        "Pinecone",
      ],
    },
    {
      title: "Tools",
      items: ["Git", "Docker", "AWS", "Jupyter", "Power BI", "DAX"],
    },
    {
      title: "Databases",
      items: ["MySQL", "MongoDB"],
    },
    {
      title: "Other Skills",
      items: ["Problem Solving", "Collaboration", "Data Modeling"],
    },
  ];

  return (
    <AnimatedPage>
      <h1 className="text-4xl font-bold text-purple-400 mb-12">Technical Skills</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 p-6 rounded-xl border border-gray-700"
          >
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              {category.title}
            </h2>
            <ul className="space-y-2 text-gray-300">
              {category.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </AnimatedPage>
  );
}