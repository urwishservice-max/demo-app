"use client"

import { useState } from "react"

const faqs = [
  {
    q: "Who is Asheron for?",
    a: "For board members, C-level executives, and operational leaders across UAE government entities, financial institutions, healthcare providers, and high-growth mid-market enterprises seeking disciplined strategy and governed AI execution.",
  },
  {
    q: "Are you a technology software agency or a management consultancy?",
    a: "We are an advisory firm that designs your organisation-wide strategy, operating model, and AI governance, and implements it directly alongside your leadership team. When custom workflows or automated agents are required, we architect and oversee them; when workforce enablement or policy frameworks are needed, we deliver those too. Strategy and compliance guide the work.",
  },
  {
    q: "What if our organisation is already experimenting with ChatGPT or Copilot?",
    a: "It signals that your teams recognize the leverage of AI. What is almost always missing is institutional governance, data privacy guardrails, operating-model integration, and verifiable accountability tailored to UAE regulatory expectations.",
  },
  {
    q: "What are your licensed advisory activities in the UAE?",
    a: "Asheron is licensed for four distinct advisory practices: Management Consultancies (Licence 7020003), Information Technology & Innovation (Licence 7020039), Human Resources & Capability (Licence 7020008), and Project Development (Licence 7020020).",
  },
  {
    q: "How long does it take to see tangible results?",
    a: "Within the first thirty days. By the end of our initial diagnostic and opportunity mapping phase, your executive team has a clear priority roadmap, risk and governance documentation, and active pilot workflows visible in daily operations.",
  },
  {
    q: "What does getting started look like?",
    a: "Following an initial 30-minute scoping discussion, we conduct an Executive & Operational Diagnostic: auditing workflows, assessing technological and policy dependencies, and highlighting high-leverage opportunities. You receive concrete deliverables before committing to longer-term implementation mandates.",
  },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function toggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="flex flex-col border-t border-white/10">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={idx}
            className="border-b border-white/10 transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between py-6 text-left group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className={`text-lg md:text-xl font-normal transition-colors ${
                isOpen ? "text-white font-medium" : "text-white/80 group-hover:text-white"
              }`}>
                {faq.q}
              </span>
              <div className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center">
                <span
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-[#FFC400] shadow-[0_0_14px_#FFC400] scale-125"
                      : "bg-white/20 group-hover:bg-white/40"
                  }`}
                />
              </div>
            </button>

            {isOpen && (
              <div className="pb-6 pr-8 text-sm md:text-base leading-relaxed text-white/60 animate-in fade-in duration-200">
                <p className="max-w-3xl">{faq.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
