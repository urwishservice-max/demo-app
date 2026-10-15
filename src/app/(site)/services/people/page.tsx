import { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { PeopleCinematicExperience } from "@/components/services/people-cinematic-experience";

export const metadata: Metadata = {
  title: "People & Capability Consulting UAE | Organisation Design & AI Fluency | Asheron",
  description:
    "Organisation design, workforce assessment, capability frameworks, AI fluency programmes, leadership development, change management, and Emiratisation-aligned capability building in the UAE.",
};

const coreServices = [
  "Organisation design, role clarity, and accountability mapping.",
  "Workforce assessments and future-skills planning.",
  "Capability frameworks for leadership, operations, compliance, risk, and AI-enabled work.",
  "Role-based AI fluency, responsible-use, and practical adoption programmes.",
  "Learning pathways, training curricula, workshops, and playbooks.",
  "Change-impact assessments, stakeholder engagement, and communications planning.",
  "Performance and competency frameworks.",
  "Emiratisation-aligned capability strategies, development pathways, and knowledge-transfer plans.",
];

export default function PeoplePage() {
  return (
    <main className="w-full bg-[#F5F3EF]">
      {/* Search Engine Structured JSON-LD */}
      <ServiceJsonLd
        name="People & Capability Practice"
        description="Organisation design, workforce assessment, capability frameworks, AI fluency programmes, leadership development, change management, and Emiratisation-aligned capability building."
        path="/services/people"
        licenceNumber="7020008"
        serviceTypes={coreServices}
      />

      {/* ASHERON $10,000 CINEMATIC PARALLAX PEOPLE & CAPABILITY EXPERIENCE */}
      <PeopleCinematicExperience />
    </main>
  );
}
