/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://192.168.1.36:8000/api/:path*",
            },
        ];
    },
};

export default nextConfig;
