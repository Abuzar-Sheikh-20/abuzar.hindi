import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";
import CaseStudyLayout from "../components/CaseStudyLayout";
import { Link } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-700 p-6 border-2 border-gray-200 rounded-full">
          Project not found
        </h2>
        <Link to="/" className="text-blue-500 mt-6 hover:text-blue-700">
          Go back home
        </Link>
      </div>
    );

  return <CaseStudyLayout data={project} />;
}
