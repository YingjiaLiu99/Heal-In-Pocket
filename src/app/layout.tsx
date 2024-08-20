import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  preload: false, // Disable preload
});

export const metadata: Metadata = {
  title: 'Heal in Pocket',
  description:
    'A free telehealth mobile application that dedicates to make healthcare more accessible to underserved populations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
