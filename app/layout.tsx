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
  title: 'IBC Spoken English - Professional English Training',
  description: 'Master Spoken English with 25+ years of expert training. Business communication, interview prep, and corporate training by K. SRTV Prasad.',
  keywords: 'English training, spoken English, business communication, interview preparation, corporate training, Secunderabad',
  authors: [{ name: 'K. SRTV Prasad' }],
  openGraph: {
    title: 'IBC Spoken English',
    description: 'Professional English training and communication coaching',
    type: 'website',
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
