import { Hero } from "@/components/home/hero"
import { Software } from "@/components/home/software"
import { QuickFeatures } from "@/components/home/quick-features"
import { ClosingCta } from "@/components/home/closing-cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <Software />
      <QuickFeatures />
      <ClosingCta />
    </main>
  )
}
