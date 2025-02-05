"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { ROUTES } from "@/lib/constants";

const SignoutButton = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => signOut({ callbackUrl: ROUTES.LANDING })}
    >
      <LogOut />
    </Button>
  );
};

export default SignoutButton;
