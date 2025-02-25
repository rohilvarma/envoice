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
import { getClientName } from "@/lib/actions/clientActions";
import { toast } from "sonner";

const AppBreadcrumb = () => {
  const currentPath = usePathname().split("/").slice(1);
  
  const getLastBreadCrumb = async (activePage: string) => {
    // Test if the activePage is a number
    // if(/^\d+$/.test(activePage)) {
    //   if(currentPath.includes('clients')) {
    //     const response = await getClientName(activePage);
    //     if(typeof response === 'string') {
    //       return response[0].toUpperCase() + response.slice(1);
    //     }
    //     else {
    //       toast.error('Failed to fetch client name')
    //       return 'Unknown Client';
    //     }
    //   }
    //   else if (currentPath.includes('invoices')) {
    //     return 'Invoices'
    //   }
    // }
    // else {
    //   // Convert the first letter to uppercase and append with the rest of the string.
    //   return activePage[0].toUpperCase() + activePage.slice(1);
    // }
  }

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
                  { getLastBreadCrumb(path) }
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
