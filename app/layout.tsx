import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import BootstrapClient from '@/components/BootstrapClient';

// 2. ఫాంట్‌ను కాన్ఫిగర్ చేయండి
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
export const metadata: Metadata = {
  title: {
    default: "IBC Spoken English | Best Spoken English Institute",
    template: "%s | IBC Spoken English"
  },
  description: "Learn Spoken English fluently with IBC Institute. 25+ years experience. Online & Offline classes available. Download study materials.",
 // 👇 ఈ verification ముక్కను ఇక్కడ యాడ్ చెయ్యి
  verification: {
    google: "PAjHpWH5Wsim7zBer8PClUyPoxcOJeXfT2Tt3dc0N_I",
  },
  // 👆 ఇక్కడితో అయిపోయింది
  keywords: ["Spoken English", "English Grammar", "IELTS Coaching", "Interview Skills", "Soft Skills", "Telugu to English", "SRTV Prasad"],
  authors: [{ name: "K SRTV Prasad" }],
  openGraph: {
    title: "IBC Spoken English - Master English with Confidence",
    description: "Join thousands of successful students. Book a demo class today.",
    url: "https://www.ibcspokenenglish.com/", // నీ లైవ్ డొమైన్ పెట్టు
    siteName: "IBC Spoken English",
    images: [
      {
        url: "/about-home-image_old.jpg", // ఏదైనా మంచి ఇమేజ్ లింక్
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={poppins.className} >
        {children}
        <BootstrapClient />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}
