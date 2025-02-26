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
import { useEffect, useState } from "react";

const AppBreadcrumb = () => {
  const currentPath = usePathname().split("/").slice(1);
  const [lastBreadcrumb, setLastBreadcrumb] = useState<string | null>(null);
  
  /**
  * Tests whether a string is a valid UUID.
  * 
  * @param uuid - The UUID to be validated.
  * @returns boolean - Indicates whether the provided string is a valid UUID.
  */
  const isUUID = (uuid: string): boolean => {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
  }

  useEffect(() => {    
    const getLastBreadCrumb = async (activePage: string) => {
      // Test if the activePage is a UUID
      if(isUUID(activePage)) {
        if(currentPath.includes('clients')) {
          const response = await getClientName(activePage);
          if(typeof response === 'string') {
            return response[0].toUpperCase() + response.slice(1);
          }
          else {
            toast.error('Failed to fetch client name')
            return 'Unknown Client';
          }
        }
        else if (currentPath.includes('invoices')) {
          return 'Invoices'
        }
      }
      // Convert the first letter to uppercase and append with the rest of the string.
      return activePage[0].toUpperCase() + activePage.slice(1);
    }
    
    const fetchLastBreadcrumb = async () => {
      const breadcrumb = await getLastBreadCrumb(currentPath[currentPath.length - 1]);
      setLastBreadcrumb(breadcrumb)
    };
    
    fetchLastBreadcrumb();
  }, [currentPath])
  
  
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
                  { lastBreadcrumb }
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
