"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "./ui/sidebar";

const AppBreadcrumb = () => {
  const currentPath = usePathname().split("/").slice(1);

  return (
    <Breadcrumb className="p-3 flex items-center gap-2">
      <SidebarTrigger />
      <BreadcrumbList>
        {currentPath.map((path, index) => {
          const elements = [];
          if (index > 0) {
            elements.push(<BreadcrumbSeparator key={`separator-${index}`} />);
          }

          if (index !== currentPath.length - 1) {
            elements.push(
              <BreadcrumbItem key={index}>
                <BreadcrumbLink
                  href={`/${currentPath.slice(0, index + 1).join("/")}`}
                >
                  { path[0].toUpperCase() + path.slice(1) }
                </BreadcrumbLink>
              </BreadcrumbItem>,
            );
          }
          else {
            elements.push(
              <BreadcrumbItem key={index}>
                <BreadcrumbPage>
                  { path[0].toUpperCase() + path.slice(1) }
                </BreadcrumbPage>
              </BreadcrumbItem>
            )
          }

          return elements;
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
