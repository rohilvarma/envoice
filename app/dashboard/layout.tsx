import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import AppBreadcrumb from "@/components/app-breadcrumb";
import SignoutButton from "@/components/SignoutButton";
import ThemeToggle from "@/components/ThemeToggle";
import { Toaster } from "@/components/ui/sonner"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <section className="w-full">
        <div className="flex items-center justify-between">
          <AppBreadcrumb />
          <div className="flex items-center gap-2 pr-4">
            <ThemeToggle />
            <SignoutButton />
          </div>
        </div>
        <Separator />
        <div className="mx-5 mt-5 md:mx-6 md:mt-6">
          {children} 
          <Toaster />
        </div> 
      </section>
    </SidebarProvider>
  );
}
