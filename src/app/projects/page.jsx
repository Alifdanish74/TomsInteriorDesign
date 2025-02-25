import HeaderBackground from "../components/HeaderBackground";
import LatestProjects from "../components/LatestProject";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto pb-20">
      <HeaderBackground T="OUR EXCLUSIVE CLIENT" H1="PORTFOLIO" P="A Statement of our Quality, Creativity and Professionalism" />
      {/* <h1 className="text-4xl font-bold text-center mb-10">Our Projects</h1> */}
      <LatestProjects />
    </div>
  );
}
