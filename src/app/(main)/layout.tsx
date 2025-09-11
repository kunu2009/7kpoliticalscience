import { SidebarProvider } from '@/components/ui/sidebar';
import { MainHeader } from './_components/main-header';
import { SyllabusSidebar } from './_components/syllabus-sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col">
        <MainHeader />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto">{children}</main>
          <SyllabusSidebar />
        </div>
      </div>
    </SidebarProvider>
  );
}
