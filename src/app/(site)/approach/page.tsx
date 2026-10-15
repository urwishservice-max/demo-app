import type { Metadata } from "next"
import { ApproachCinematicExperience } from "@/components/services/approach-cinematic-experience"

export const metadata: Metadata = {
  title: "Our Approach | Governed Delivery for UAE Organisations | Asheron",
  description: "Asheron’s five-step approach connects assessment, prioritisation, design, enablement, and assurance to deliver controlled, measurable outcomes.",
}

export default function ApproachPage() {
  return <ApproachCinematicExperience />
}
