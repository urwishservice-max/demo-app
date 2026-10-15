import { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { ProjectsCinematicExperience } from "@/components/services/projects-cinematic-experience";

export const metadata: Metadata = {
  title: "Project Development, PMO & Programme Assurance UAE | Asheron",
  description:
    "Business cases, feasibility studies, PMO establishment, stage-gate governance, vendor selection, project assurance, and recovery of underperforming programmes in the UAE.",
};

const coreServices = [
  "Opportunity assessments, feasibility studies, and business cases.",
  "Project charters, scope definition, requirements, and benefits-realisation plans.",
  "PMO establishment, project governance, and reporting structures.",
  "Programme planning, mobilisation, delivery roadmaps, and dependency management.",
  "Stage-gate design, steering-committee support, and executive reporting.",
  "Vendor selection, evaluation criteria, due diligence, and implementation oversight.",
  "Independent project assurance, risk reviews, and delivery health checks.",
  "Recovery planning for delayed, complex, or underperforming programmes.",
  "Post-implementation reviews, lessons learned, and benefits tracking.",
];

export default function ProjectsPage() {
  return (
    <main className="w-full bg-[#F4F3F8]">
      {/* Search Engine Structured JSON-LD */}
      <ServiceJsonLd
        name="Project Development Practice"
        description="Business cases, feasibility studies, PMO establishment, stage-gate governance, vendor selection, project assurance, and recovery of underperforming programmes in the UAE."
        path="/services/projects"
        licenceNumber="7020020"
        serviceTypes={coreServices}
      />

      {/* ASHERON $10,000 MINIMALIST CINEMATIC PARALLAX PROJECTS EXPERIENCE */}
      <ProjectsCinematicExperience />
    </main>
  );
}
