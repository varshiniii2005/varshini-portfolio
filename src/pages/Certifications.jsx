import AnimatedPage from "../components/AnimatedPage";

export default function Certifications() {
  return (
    <AnimatedPage>
      <h1 className="text-4xl font-bold text-purple-400 mb-10">
        Certifications
      </h1>

      <div className="space-y-6">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold text-blue-400">
            AWS Academy Generative AI Foundations
          </h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold text-blue-400">
            Operationalizing Generative AI Applications (FMOps/LLMOps) – AWS
          </h2>
        </div>
      </div>
    </AnimatedPage>
  );
}