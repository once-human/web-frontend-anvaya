/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/web-frontend-anvaya',
  images: {
    unoptimized: true, // Required for static export with Next.js Image component
  },
};

export default nextConfig; 