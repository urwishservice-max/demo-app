import { Metadata } from "next"
import { IndustriesEditorialIndex } from "@/components/industries/industries-editorial-index"

export const metadata: Metadata = {
  title: "Industries We Serve | Asheron Advisory, Dubai",
  description: "Asheron advises banks, finance companies, insurers, fintech and virtual-asset firms, government entities, professional services, and family groups across the UAE.",
}

export default function IndustriesPage() {
  return <IndustriesEditorialIndex />
}
