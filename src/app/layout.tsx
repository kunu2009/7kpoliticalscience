import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: '7K Political Science - HSC Guide',
  description: 'Your comprehensive guide to 12th Grade Political Science - Maharashtra State Board HSC Arts Stream',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/7kpol-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/7kpol-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/7kpol-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/7kpol-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/7kpol-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/7kpol-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/7kpol-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '7K Political Science',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
