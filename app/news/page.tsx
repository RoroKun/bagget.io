import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ButtonLink } from "@/components/site/button-link"
import { Contour } from "@/components/site/contour"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { NEWS } from "@/data/news"

export const metadata: Metadata = {
  title: "News",
  description: "Milestones, competitions and events that brought Bag/Get here.",
}

export default function NewsPage() {
  return (
    <main id="top" className="relative overflow-hidden">
      <Contour spin opacity={0.1} scribbleScale={4} tilt={20} perspective={1500} />
      <div className="relative px-6 pt-[90px] min-[810px]:pt-[122px]">
        <PageHeader title="News" image="/framer/brand/pantry-shelves.webp" overlay={0.4} />

        <p className="mx-auto mt-[50px] max-w-[1000px] text-center text-lg leading-[1.2] text-black min-[810px]:text-2xl">
          Explore the milestones that brought us here, from the accelerators and incubators that shaped us to the events
          that helped get us off the ground. Click any card to read the full story. And this is only the beginning, so
          stay tuned for what’s next.
        </p>

        <ul className="mx-auto mt-10 flex max-w-[1026px] flex-col gap-[60px]">
          {NEWS.map((post, i) => (
            <Reveal as="li" key={post.slug} amount={0.15}>
              <Link
                href={`/news/${post.slug}`}
                className="group relative flex h-[260px] flex-col justify-between overflow-hidden rounded-[32px] border-[3px] border-white/70 p-5 min-[810px]:h-[400px] min-[810px]:rounded-[40px] min-[810px]:p-[25px]"
              >
                <Image
                  src={post.cover}
                  alt=""
                  fill
                  sizes="(min-width: 1080px) 1026px, 100vw"
                  priority={i < 2}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-ink/40" />
                <h2 className="relative text-2xl font-bold leading-[1.4] tracking-[-0.04em] text-paper-bright min-[810px]:text-[32px]">
                  {post.title}
                </h2>
                <span className="relative self-start rounded-md bg-mint/20 px-2 leading-[1.6] tracking-[-0.02em] text-paper-bright backdrop-blur-sm">
                  {post.category}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="flex justify-center py-[70px]">
          <ButtonLink href="#top">Jump to top of page</ButtonLink>
        </div>
      </div>
    </main>
  )
}
