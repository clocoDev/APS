/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/aps-australia-storage/**",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
