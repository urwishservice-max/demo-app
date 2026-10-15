import { Metadata } from "next"
import { ServicesHubEditorial } from "@/components/services/services-hub-editorial"

export const metadata: Metadata = {
  title: "Our Services | Strategy, AI, Capability & Project Advisory | Asheron",
  description: "Four licensed advisory practices: AI and innovation, strategy and management, people and capability, and project development — delivered for UAE organisations.",
}

export default function ServicesHubPage() {
  return <ServicesHubEditorial />
}

