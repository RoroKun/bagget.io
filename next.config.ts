import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old site's "The Challenge" page was folded into the new Product page.
      { source: "/the-challenge", destination: "/product", permanent: true },
      // News slugs no longer include years.
      { source: "/news/pando-days-2024", destination: "/news/return-to-pando-days", permanent: true },
      { source: "/news/food-access-2024", destination: "/news/food-access", permanent: true },
    ]
  },
}

export default nextConfig
