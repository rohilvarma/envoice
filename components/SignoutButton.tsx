"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { LogOut } from 'lucide-react';

const SignoutButton = () => {
  return <Button variant="ghost" size="icon" onClick={() => signOut()}>
    <LogOut />
  </Button>;
};

export default SignoutButton;
