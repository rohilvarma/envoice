import { ChartColumn, LucideIcon, Users, Zap } from "lucide-react";

type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ROUTES = {
  LANDING: "/",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
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
