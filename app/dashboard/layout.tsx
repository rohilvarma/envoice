import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import AppBreadcrumb from "@/components/app-breadcrumb";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <section className="w-full">
        <AppBreadcrumb />
        <Separator />
        {children}  
      </section>
    </SidebarProvider>
  );
}
