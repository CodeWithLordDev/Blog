import Script from "next/script";

import localFont from "next/font/local";
import "./globals.css";
import * as React from "react"
import Navbar from "@/components/ui/Navbar";
import ClientThemeProvider from "../components/ClientThemeProvider";
import ThemeProvider from "@/components/theme-provider"
import Footer from "@/components/ui/Footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ayush's Blog - Insights on IT, Coding, and Development",
  description: "Explore Ayush's blog for articles on IT, programming, web development, and technology trends. Stay updated with tips, tutorials, and insights to enhance your coding journey.",
  keywords: "Ayush blog, IT articles, coding tips, web development, programming tutorials, tech trends, coding journey, development insights",
  author: "Ayush",
  robots: "index, follow", // Ensures search engines index and follow links
  openGraph: {
    title: "Ayush's Blog - IT, Coding, and Development Insights",
    description: "Stay updated with Ayush's blog for the latest in IT, web development, and coding tutorials. A resource for developers and tech enthusiasts.",
    type: "website",
    url: "https://yourdomain.com/blog", // Replace with your actual blog URL
    images: [
      {
        url: "https://yourdomain.com/path/to/your-image.jpg", // Add an image URL for social sharing
        width: 800,
        height: 600,
        alt: "Ayush's Blog Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush's Blog - IT, Coding, and Development Insights",
    description: "Dive into articles on IT, programming, and web development with Ayush's blog.",
    images: ["https://yourdomain.com/path/to/your-image.jpg"], // Same as the Open Graph image
  },
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
    <head>
        {/* ✅ Google AdSense Verification */}
        <meta
          name="google-adsense-account"
          content="ca-pub-2908323046059505"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2908323046059505"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      
          <Navbar />
        
          {children}
          <Footer />
        
    </ThemeProvider>
      </body>
    </html>
  );
}
