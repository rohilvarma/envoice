"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getClientName } from "@/lib/actions/clientActions";
import { isUUID } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Skeleton } from "./ui/skeleton";

const AppBreadcrumb = () => {
  const [lastCrumb, setLastCrumb] = useState<string | null>(null);

  const currentPath = usePathname();

  useEffect(() => {
    const setLastBreadcrumb = async () => {
      const crumb = currentPath.split("/").slice(-1)[0];
      if (currentPath.includes("clients") && isUUID(crumb)) {
        const clientName = await getClientName(crumb);
        setLastCrumb(clientName);
      } else {
        setLastCrumb(crumb[0].toUpperCase() + crumb.slice(1));
      }
    };
    setLastBreadcrumb();
  }, [currentPath]);

  const renderBreadcrumbItems = () => {
    const crumbs = (currentPath as string).split("/").slice(1);
    return crumbs.map((crumb, index) => {
      if (index === crumbs.length - 1) {
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbPage>
              {lastCrumb ?? <Skeleton className="w-24 h-2" />}
            </BreadcrumbPage>
          </BreadcrumbItem>
        );
      } else {
        return [
          <BreadcrumbItem key={index}>
            <BreadcrumbLink href={`/${crumbs.slice(0, index + 1).join("/")}`}>
              {crumb[0].toUpperCase() + crumb.slice(1)}
            </BreadcrumbLink>
          </BreadcrumbItem>,
          <BreadcrumbSeparator key={`separator-${index}`} />,
        ];
      }
    });
  };

  return (
    <Breadcrumb className="p-3 flex items-center gap-2">
      <SidebarTrigger />
      <BreadcrumbList>{renderBreadcrumbItems()}</BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
