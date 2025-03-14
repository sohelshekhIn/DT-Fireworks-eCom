/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'th.bing.com',
            },
            {
                protocol: 'https',
                hostname: "img.icons8.com"
            },
            {
                protocol: 'https',
                hostname: "res.cloudinary.com"
            },
            {
                protocol: 'https',
                hostname: "ui-avatars.com"
            }
        ],
    },
};

export default nextConfig;
