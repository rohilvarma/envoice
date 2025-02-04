import {
  ChartColumn,
  House,
  LucideIcon,
  LucideProps,
  Receipt,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type SidebarLinks = {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export const ROUTES = {
  LANDING: "/",
  LOGIN: "/login",
  DASHBOARD: {
    ROOT: "/dashboard",
    INVOICES: "/dashboard/invoices",
    CLIENTS: "/dashboard/clients",
    SETTINGS: "/dashboard/settings",
  },
};

export const LANDING_PAGE_CONTENT = {
  HERO: {
    title: "Create Professional Invoices in Minutes",
    subtitle:
      "Streamline your billing process with our powerful invoice generation platform. Perfect for freelancers, small businesses, and enterprises.",
    button: "Get Started",
  },
  FEATURES: {
    title: "Features that empower your business",
    description:
      "Everything you need to manage invoices, track payments, and grow your business.",
    feature_cards: [
      {
        title: "Quick Invoice Creation",
        description:
          "Create and send professional invoices in less than 2 minutes with our intuitive interface.",
        icon: Zap,
      },
      {
        title: "Client Management",
        description:
          "Organize client information, track interactions, and maintain relationships all in one place.",
        icon: Users,
      },
      {
        title: "Financial Insights",
        description:
          "Get detailed reports and analytics to make informed business decisions.",
        icon: ChartColumn,
      },
    ] as FeatureCard[],
  },
};

export const SIDEBAR_LINKS = [
  {
    title: "Dashboard",
    url: ROUTES.DASHBOARD.ROOT,
    icon: House,
  },
  {
    title: "Invoices",
    url: ROUTES.DASHBOARD.INVOICES,
    icon: Receipt,
  },
  {
    title: "Clients",
    url: ROUTES.DASHBOARD.CLIENTS,
    icon: Users,
  },
  {
    title: "Settings",
    url: ROUTES.DASHBOARD.SETTINGS,
    icon: Settings,
  },
] as SidebarLinks[];
