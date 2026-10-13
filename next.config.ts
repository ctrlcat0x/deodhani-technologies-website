import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  redirects: () =>
    [
      "/about/:path*",
      "/careers/:path*",
      "/become-a-vendor/:path*",
      "/services/:path*",
    ].map((source) => ({
      source,
      destination: "/",
      permanent: false,
    })),
}

export default nextConfig
