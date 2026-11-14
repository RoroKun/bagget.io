import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old site's "The Challenge" page was folded into the new Product page.
      { source: "/the-challenge", destination: "/product", permanent: true },
    ]
  },
}

export default nextConfig
