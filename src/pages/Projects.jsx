import AnimatedPage from "../components/AnimatedPage";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <AnimatedPage>
      <h1 className="text-4xl font-bold text-purple-400 mb-12">
        Key Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <ProjectCard
          title="Assistive Device Algorithm for the Visually Impaired"
          summary="Real-time assistive vision system integrating emotion recognition, obstacle detection & TTS."
          details="Designed and deployed a real-time assistive vision system achieving inference latency under 200ms. Improved CNN emotion recognition accuracy by 30% through hyperparameter tuning and dataset augmentation. Integrated multi-modal audio feedback combining 3 AI modules into a single accessible prototype."
        />

        <ProjectCard
          title="AI Legal Document Assistant"
          summary="RAG pipeline reducing hallucinations by 45%."
          details="Engineered a Retrieval-Augmented Generation pipeline using LangChain and Pinecone, reducing LLM hallucinations by 45%. Designed FastAPI backend with Streamlit interface enabling real-time legal query resolution. Improved retrieval precision by 40% using vector embeddings."
        />

        <ProjectCard
          title="Explainable Chest Disease Detection System"
          summary="EfficientNet-B0 + Swin Transformer with Grad-CAM."
          details="Built explainable pneumonia detection model on 5000+ X-rays using transfer learning. Improved validation accuracy by 18% over baseline CNN models. Implemented Grad-CAM (Captum) on 1000+ images for visual interpretability and reduced misclassification via human-in-the-loop review."
        />

        <ProjectCard
          title="Procurement Intelligence & Vendor Optimization"
          summary="Power BI dashboard reducing procurement cycle time by 25%."
          details="Tracked 15+ procurement KPIs using Power BI dashboards. Reduced procurement cycle time by 25% through bottleneck analysis and improved vendor SLA compliance by 30%."
        />

      </div>
    </AnimatedPage>
  );
}