
import {SyllabusSidebar} from './_components/syllabus-sidebar';
import {MainHeader} from './_components/main-header';
import { SidebarProvider } from '@/components/ui/sidebar';
import { QuickAccessSidebar } from './_components/quick-access-sidebar';


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SyllabusSidebar />
      <div className="md:ml-64 flex flex-col h-screen">
          <MainHeader />
          <main className="flex-1 overflow-y-auto pr-14 sm:pr-16">{children}</main>
          <QuickAccessSidebar />
      </div>
    </SidebarProvider>
  );
}
