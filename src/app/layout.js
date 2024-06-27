import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kways - Innovating IT and Software Solutions",
  description: "Kways is at the forefront of IT and software solutions, offering innovative services and products in IT, agriculture and user-centric fields. We provide freshers with valuable insights and resources to advance their early career paths as k way.",
  url: "https://custome-portfolio.vercel.app", 
  image: "/images/cr.png",
  siteName: "Kways",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head>
        {/* Basic SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metadata.siteName} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:url" content={metadata.url} />

        {/* Canonical URL */}
        <link rel="canonical" href={metadata.url} />

        {/* Preconnect and Font Links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className={inter.className}>

        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
        </Script>
        {children}</body>
    </html>
  );
}
