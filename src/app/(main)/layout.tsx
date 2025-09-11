import { SidebarProvider } from '@/components/ui/sidebar';
import { SyllabusSidebar } from './_components/syllabus-sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-1 overflow-hidden">
        <SyllabusSidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
}
