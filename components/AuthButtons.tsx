'use client'
import Image from "next/image";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const AuthButtons = () => {
  return (
    <div className="grid gap-2">
      <Button variant="outline" onClick={() => signIn('google')}>
        <Image src={"/google.png"} height={20} width={20} alt="Google Logo" />
        Sign In with Google
      </Button>
      <Button onClick={() => signIn('github')} >
        <Image src={"/github.png"} height={20} width={20} alt="Github Logo" />
        Sign In with GitHub
      </Button>
    </div>
  );
};

export default AuthButtons;