import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      // The Squarespace site also served the homepage at /home.
      { source: "/home", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
