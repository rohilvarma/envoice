"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const SignoutButton = () => {
  return <Button variant="default" onClick={() => signOut()}>
    Sign Out
  </Button>;
};

export default SignoutButton;
