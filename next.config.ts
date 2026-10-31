import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/projects/project-runbuddy.html", destination: "/projects/runbuddy", permanent: true },
      { source: "/projects/project-classcollab.html", destination: "/projects/classcollab", permanent: true },
      { source: "/projects/project-iowa-cubs.html", destination: "/projects/iowa", permanent: true },
    ];
  },
};

export default nextConfig;
