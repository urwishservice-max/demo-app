import { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { StrategyReferenceLayout } from "@/components/services/strategy-reference-layout";

export const metadata: Metadata = {
  title: "Strategy & Management Consulting in Dubai, UAE | Asheron",
  description:
    "Operating-model design, strategic planning, governance enhancement, process re-engineering, KPI frameworks, feasibility studies, and board advisory in the UAE.",
};

const coreServices = [
  "Corporate, business-unit, and functional strategy.",
  "Operating-model assessment and target operating-model design.",
  "Governance structures, decision rights, committees, and management forums.",
  "Process mapping, simplification, re-engineering, and control optimisation.",
  "Transformation strategies and prioritised implementation roadmaps.",
  "KPI, KRI, management-information, and performance-management frameworks.",
  "Business planning, feasibility studies, and investment cases.",
  "Board and executive advisory on strategic risk, performance, and delivery.",
];

export default function StrategyPage() {
  return (
    <main className="w-full bg-[#080808]">
      <ServiceJsonLd
        name="Strategy & Management Practice"
        description="Operating-model design, strategic planning, governance enhancement, process re-engineering, KPI frameworks, feasibility studies, and board advisory in the UAE."
        path="/services/strategy"
        licenceNumber="7020003"
        serviceTypes={coreServices}
      />

      {/* STRATEGY CINEMATIC REFERENCE EXPERIENCE */}
      <StrategyReferenceLayout />
    </main>
  );
}
