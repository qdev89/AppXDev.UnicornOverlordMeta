import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Unicorn Overlord: Meta Engine & Master Tactics Hub',
  description: 'Ultimate meta compendium, 5-unit interactive squad builder, real-time Start-of-Battle conflict analysis, turn timeline, and Coliseum counter matrix for Unicorn Overlord.',
  keywords: [
    'Unicorn Overlord',
    'Meta Compositions',
    'Tactics Engine',
    'Squad Builder',
    'Dragoon Dive',
    'Cat-Ear Hood',
    'Glacial Rain',
    'Trinity Rain',
    'Coliseum Counter',
  ],
  authors: [{ name: 'AppXDev' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-[#0b0f19] text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 min-h-screen"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
