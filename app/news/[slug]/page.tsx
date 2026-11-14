import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { NEWS } from "@/data/news"

export const dynamicParams = false

export function generateStaticParams() {
  return NEWS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const post = NEWS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.body[0]?.slice(0, 160),
    openGraph: { images: [post.cover] },
  }
}

export default async function NewsArticlePage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params
  const index = NEWS.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()

  const post = NEWS[index]
  const newer = NEWS[index - 1]
  const older = NEWS[index + 1]

  return (
    <main className="px-6 pb-[100px] pt-[130px] min-[810px]:pt-[140px]">
      <header className="mx-auto flex max-w-[700px] flex-col items-center gap-3 text-center">
        <span className="rounded-md bg-black/[0.03] px-2 leading-[1.6] tracking-[-0.02em] text-[#888]">
          {post.category}
        </span>
        <h1 className="text-[32px] font-bold leading-[1.1] tracking-[-0.04em] text-black min-[810px]:text-[40px]">
          {post.title}
        </h1>
        {post.location && <p className="leading-[1.6] tracking-[-0.02em] text-[#999]">{post.location}</p>}
      </header>

      <div className="relative mx-auto mt-[50px] aspect-[7/4] max-w-[700px] overflow-hidden rounded-[20px]">
        <Image src={post.cover} alt={post.title} fill priority sizes="(min-width: 760px) 700px, 100vw" className="object-cover" />
      </div>

      <article className="mx-auto mt-[60px] flex max-w-[600px] flex-col gap-5 leading-[1.6] tracking-[-0.02em] text-[#666]">
        {post.heading && (
          <h2 className="text-[26px] font-black leading-[1.4] tracking-[-0.04em] text-black">{post.heading}</h2>
        )}
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {post.link && (
          <p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-[#0099ff] hover:underline">
              Read more about this event ›
            </a>
          </p>
        )}
      </article>

      <nav className="mx-auto mt-[60px] flex max-w-[600px] justify-between gap-6 leading-[1.6] tracking-[-0.02em] text-[#0099ff]">
        {newer ? (
          <Link href={`/news/${newer.slug}`} className="hover:underline">
            ‹ {newer.title}
          </Link>
        ) : (
          <span />
        )}
        {older && (
          <Link href={`/news/${older.slug}`} className="text-right hover:underline">
            {older.title} ›
          </Link>
        )}
      </nav>
    </main>
  )
}
