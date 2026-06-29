import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seven Bros. Pictures | Los Angeles Production Company | 映像・写真制作",
  description: "Los Angeles and Tokyo-based creative production company specializing in advertising photography, automotive, documentary, and commercial film. ロサンゼルス・東京を拠点とする映像・写真制作会社。広告写真、CM制作、ドキュメンタリー。",
  keywords: [
    "Los Angeles production company",
    "LA advertising photography",
    "commercial photography Los Angeles",
    "automotive photography",
    "documentary photography",
    "product photography Tokyo",
    "video production Los Angeles",
    "ロサンゼルス 撮影",
    "ロサンゼルス プロダクション",
    "広告写真",
    "CM制作",
    "商品撮影",
    "映像制作 東京",
    "Seven Bros Pictures",
  ],
  openGraph: {
    title: "Seven Bros. Pictures | Los Angeles Production Company",
    description: "Creative production company based in Los Angeles and Tokyo. Advertising photography, automotive, documentary, and commercial film.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    languages: {
      "en-US": "/",
      "ja-JP": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Seven Bros. Pictures Inc.",
              "description": "Creative production company specializing in advertising photography, commercial film, automotive photography, and documentary. Based in Los Angeles and Tokyo.",
              "url": "https://seven-bros.com",
              "foundingDate": "2017",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Los Angeles",
                  "addressRegion": "CA",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Tokyo",
                  "addressCountry": "JP"
                }
              ],
              "areaServed": ["US", "JP"],
              "serviceType": [
                "Advertising Photography",
                "Commercial Film Production",
                "Automotive Photography",
                "Documentary Photography",
                "Product Photography"
              ],
              "sameAs": []
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
