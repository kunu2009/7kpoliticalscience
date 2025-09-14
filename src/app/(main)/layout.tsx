import {SyllabusSidebar} from './_components/syllabus-sidebar';
import {MainHeader} from './_components/main-header';
import { SidebarProvider } from '@/components/ui/sidebar';


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
          <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
}
