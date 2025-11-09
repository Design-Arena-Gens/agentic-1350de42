import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Voyago ? Travel & Hotel Booking',
  description: 'Modern travel and hotel booking experience',
  metadataBase: new URL('https://agentic-1350de42.vercel.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
