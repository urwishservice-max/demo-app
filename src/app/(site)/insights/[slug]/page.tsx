import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PortableText } from '@portabletext/react'
import { Button } from "@/components/ui/button"
import { LeadershipCard } from "@/components/ui/leadership-card"
import { client } from "@/sanity/lib/client"
import { projectId } from "@/sanity/env"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const insight = await getInsight(params.slug)
  if (!insight) {
    return { title: 'Not Found' }
  }

  return {
    title: `${insight.seoTitle || insight.title} | Asheron`,
    description: insight.seoDescription || insight.excerpt,
  }
}

async function getInsight(slug: string) {
  if (projectId === "placeholder-id") return null
  try {
    return await client.fetch(`*[_type == "insight" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      publishedAt,
      readingTime,
      excerpt,
      body,
      "author": author->{name, title, biography, image, linkedinUrl},
      "categoryTitle": category->title,
      "heroImageUrl": heroImage.asset->url,
      "heroImageAlt": heroImage.alt,
      "relatedInsights": relatedInsights[]->{title, "slug": slug.current, excerpt}
    }`, { slug })
  } catch (error) {
    console.error("Sanity fetch failed:", error)
    return null
  }
}

// PortableText Custom Components
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <figure className="my-8">
          {/* We'd normally use Sanity's image builder here, this is simplified */}
          <div className="bg-slate-100 aspect-video rounded-sm overflow-hidden flex items-center justify-center text-slate-400">
            [Image Component]
          </div>
          {value.caption && <figcaption className="text-sm text-center text-slate-500 mt-2">{value.caption}</figcaption>}
        </figure>
      )
    }
  },
  block: {
    h2: ({children}: any) => <h2 className="text-2xl font-semibold mt-12 mb-6 text-navy-900">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-xl font-semibold mt-8 mb-4 text-navy-900">{children}</h3>,
    blockquote: ({children}: any) => <blockquote className="border-l-4 border-gold-500 pl-6 italic text-xl text-slate-700 my-8">{children}</blockquote>,
    normal: ({children}: any) => <p className="mb-6 leading-relaxed text-slate-700">{children}</p>
  }
}

export default async function InsightArticlePage({ params }: { params: { slug: string } }) {
  const insight = await getInsight(params.slug)
  
  if (!insight) {
    notFound()
  }
  
  return (
    <div className="flex flex-col bg-white">
      {/* ARTICLE HEADER */}
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-sm font-semibold tracking-wider text-gold-500 uppercase mb-4">
            {insight.categoryTitle}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-8 text-navy-900">
            {insight.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-slate-500 mb-12">
            <div>Published: {new Date(insight.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div>{insight.readingTime} min read</div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div>By {insight.author?.name}</div>
          </div>
          
          <div className="w-full aspect-video bg-slate-100 rounded-sm overflow-hidden relative mb-16 border border-slate-200">
            {insight.heroImageUrl ? (
              <Image 
                src={insight.heroImageUrl} 
                alt={insight.heroImageAlt || insight.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                [HERO IMAGE]
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-12 relative">
            {/* STICKY SHARE BAR */}
            <div className="lg:w-16 flex-shrink-0">
              <div className="sticky top-32 flex flex-row lg:flex-col gap-4">
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-navy-900 hover:border-navy-900 transition-colors" aria-label="Share on LinkedIn">
                  in
                </button>
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-navy-900 hover:border-navy-900 transition-colors" aria-label="Copy Link">
                  &#128279;
                </button>
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-navy-900 hover:border-navy-900 transition-colors" aria-label="Share via Email">
                  &#9993;
                </button>
              </div>
            </div>

            {/* ARTICLE BODY */}
            <div className="prose prose-lg prose-slate max-w-none flex-1">
              <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-slate-200 pl-6">
                {insight.excerpt}
              </p>
              
              <PortableText value={insight.body} components={ptComponents} />
            </div>
          </div>
        </div>
      </article>

      {/* AUTHOR */}
      {insight.author && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-8 text-navy-900">About the author</h2>
            <LeadershipCard 
              name={insight.author.name}
              title={insight.author.title}
              biography={insight.author.biography}
              image={insight.author.image ? 'imageUrl' : undefined} // Requires image builder integration in full implementation
              linkedinUrl={insight.author.linkedinUrl}
            />
          </div>
        </section>
      )}

      {/* RELATED INSIGHTS */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-semibold mb-12 text-navy-900">Related insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insight.relatedInsights?.length > 0 ? (
              insight.relatedInsights.map((related: any) => (
                <div key={related.slug} className="group">
                  <Link href={`/insights/${related.slug}`} className="block">
                    <h3 className="text-xl font-semibold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{related.excerpt}</p>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-slate-500 italic">No related insights currently available.</div>
            )}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Ready to implement?
          </h2>
          <Button asChild size="lg" className="bg-white text-navy-900 hover:bg-slate-100">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
