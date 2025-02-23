import {
  ChartColumn,
  CircleUser,
  House,
  LucideIcon,
  Receipt,
  Settings,
  Users,
  Zap,
} from "lucide-react";

type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ROUTES = {
  LANDING: "/",
  LOGIN: "/login",
  DASHBOARD: {
    ROOT: "/dashboard",
    INVOICES: {
      ROOT: "/dashboard/invoices",
      NEW: "/dashboard/invoices/new",
    },
    CLIENTS: {
      ROOT: "/dashboard/clients",
      NEW: "/dashboard/clients/new",
    },
    SETTINGS: "/dashboard/settings",
    PROFILE: "/dashboard/profile",
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

export const SETTINGS_PAGE_CONTENT = {
  TITLE: "Settings",
  DESCRIPTION: "Manage your account settings and preferences.",
  COMPANY_INFO_FORM: {
    TITLE: "Company Information",
    DESCRIPTION: "This information will be displayed on your invoices.",
    NAME: "Company Name",
    ADDRESS: "Address",
    GST_NO: "GST Number",
  },
  SAVE: "Save Changes",
  DELETE: "Delete Profile",
  DELETE_ACCOUNT_TITLE: "Delete Account",
  DELETE_ACCOUNT_DESCRIPTION:
    "Once you delete your account, there is no going back. Please be certain.",
};

export const SIDEBAR_LINKS = {
  NAVIGATION: [
    {
      title: "Dashboard",
      url: ROUTES.DASHBOARD.ROOT,
      icon: House,
    },
    {
      title: "Invoices",
      url: ROUTES.DASHBOARD.INVOICES.ROOT,
      icon: Receipt,
    },
    {
      title: "Clients",
      url: ROUTES.DASHBOARD.CLIENTS.ROOT,
      icon: Users,
    },
  ],
  ACCOUNT: [
    {
      title: "Profile",
      url: ROUTES.DASHBOARD.PROFILE,
      icon: CircleUser,
    },
    {
      title: "Settings",
      url: ROUTES.DASHBOARD.SETTINGS,
      icon: Settings,
    },
  ],
};

export const CLIENT_PAGE_CONTENT = {
  ADD_NEW_CLIENT: "Get started with a new client",
  DELETE_CLIENT: "Delete Client",
  NEW_CLIENT: {
    BASIC_INFO: {
      TITLE: "Basic Information",
      DESCRIPTION: "Enter the client's basic contact information",
      FORM_LABELS: {
        COMPANY_NAME: "Company Name",
        EMAIL: "Email",
        PHONE: "Phone",
        GST_NO: "GST Number",
        WEBSITE: "Website",
      },
    },
    BILLING_ADDRESS: {
      TITLE: "Billing Address",
      DESCRIPTION: "Provide the client's billing address",
      FORM_LABELS: {
        STREET_ADDRESS: "Address",
        CITY: "City",
        STATE: "State",
        ZIP_CODE: "Zip Code",
      },
    },
    CREATE_CLIENT: "Create Client",
    CANCEL: "Cancel"
  },
};
