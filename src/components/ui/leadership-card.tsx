import Image from "next/image"
import { type ReactNode } from "react"

export interface LeadershipCardProps {
  name: string
  title: string
  biography: string
  image?: string
  linkedinUrl?: string
}

export function LeadershipCard({ name, title, biography, image, linkedinUrl }: LeadershipCardProps) {
  if (!name) return null // Do not render if no profile info exists

  return (
    <div className="flex flex-col bg-white border border-slate-200 p-8 rounded-sm">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 w-32 h-32 bg-slate-100 rounded-sm overflow-hidden relative">
          {image && image !== "[PROFESSIONAL PHOTOGRAPH]" ? (
            <Image 
              src={image} 
              alt={`Photograph of ${name}`} 
              fill 
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300 text-xs text-center p-2">
              [PROFESSIONAL PHOTOGRAPH]
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-2xl font-semibold mb-1 text-navy-900">{name}</h3>
          <p className="text-gold-500 font-medium mb-4">{title}</p>
          <div className="text-sm text-slate-600 leading-relaxed mb-6 space-y-4">
            {biography.split('\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
          {linkedinUrl && linkedinUrl !== "[LINKEDIN URL]" && (
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-navy-900 hover:text-gold-500 transition-colors mt-auto inline-flex w-fit"
            >
              LinkedIn Profile &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
