import AnimatedPage from "../components/AnimatedPage";

export default function Experience() {
  return (
    <AnimatedPage>
      <h1 className="text-4xl font-bold text-purple-400 mb-10">
        Professional Experience
      </h1>

      <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-semibold text-blue-400">
          Research Intern – Artificial Intelligence Research Centre
        </h2>
        <p className="text-gray-400 mt-2">FEB’25 – MAR’25</p>

        <ul className="mt-6 space-y-3 text-gray-300 leading-relaxed">
          <li>
            • Researched AI technologies including Machine Learning, Deep Learning,
            and Generative AI with applications in human-centered systems.
          </li>
          <li>
            • Contributed to projects on intelligent solutions, data analysis,
            and research documentation.
          </li>
          <li>
            • Collaborated with mentors and peers, strengthening technical
            expertise and problem-solving skills.
          </li>
        </ul>
      </div>
    </AnimatedPage>
  );
}