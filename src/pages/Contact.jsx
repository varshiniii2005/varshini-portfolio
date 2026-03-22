import AnimatedPage from "../components/AnimatedPage";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <AnimatedPage>
      <h1 className="text-4xl font-bold text-purple-400 mb-10">
        Contact Information
      </h1>

      <div className="space-y-6 text-gray-300 text-lg">

       

        <p className="flex items-center gap-3">
          <FaEnvelope /> varshini.nasaram_2027@woxsen.edu.in
        </p>

        <p className="flex items-center gap-3">
          <FaGithub />
          <a
            href="https://github.com/varshiniii2005"
            className="text-blue-400"
            target="_blank"
          >
            github.com/varshiniii2005
          </a>
        </p>

        <p className="flex items-center gap-3">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/varshini-yadav-nasaram"
            className="text-blue-400"
            target="_blank"
          >
            linkedin.com/in/varshini-yadav-nasaram
          </a>
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Languages
          </h2>
          <p>English | Hindi | Telugu</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Interests
          </h2>
          <p>Public Speaking | Management | Exploring New Concepts</p>
        </div>
      </div>
    </AnimatedPage>
  );
}
