import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ROUTES, SIDEBAR_LINKS } from "@/lib/constants";
import Logo from "./Logo";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={ROUTES.DASHBOARD.ROOT} className="">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <Logo mobileOnly={true} />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Envoice</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex flex-col justify-between">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SIDEBAR_LINKS.NAVIGATION.map((link, index) => (
                <SidebarMenuItem key={index}>
                  <Link href={link.url} className="flex items-center gap-2">
                    <SidebarMenuButton tooltip={link.title}>
                      {link.icon && <link.icon />}
                      <span>{link.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SIDEBAR_LINKS.ACCOUNT.map((link, index) => (
                <SidebarMenuItem key={index}>
                  <Link href={link.url} className="flex items-center gap-2">
                    <SidebarMenuButton tooltip={link.title}>
                      {link.icon && <link.icon />}
                      <span>{link.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
