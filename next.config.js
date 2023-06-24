/** @type {import('next').NextConfig} */
const hostnames = [
  "i.seadn.io",
  "static.nftgo.io",
  "clonex-assets.rtfkt.com",
  "metadata.degods.com",
  "images.wrappedpunks.com",
];
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

module.exports = nextConfig;
