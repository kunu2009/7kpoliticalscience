import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { MainHeader } from '@/app/(main)/_components/main-header';
import { SidebarProvider } from '@/components/ui/sidebar';
import { SyllabusSidebar } from './(main)/_components/syllabus-sidebar';

export const metadata: Metadata = {
  title: 'PolSci Guide',
  description: 'Your comprehensive guide to Political Science.',
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
          <SidebarProvider defaultOpen={false}>
            <MainHeader />
            <div className="flex flex-1 overflow-hidden h-[calc(100vh-4rem)]">
              <SyllabusSidebar />
              <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
