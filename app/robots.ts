import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://rajaayurvedic.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/",
        "/api/",
        "/private/"
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
