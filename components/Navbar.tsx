import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";
import SignoutButton from "./SignoutButton";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/lib/auth";

const PublicNavbar = async () => {
  const session = await getServerSession(authConfig);
  console.log("Session status", session);
  return (
    <nav className="border-b border-gray-600 py-2">
      <div className="container flex items-center justify-between">
        <Link href={ROUTES.LANDING}>
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {session?.user ? (
            <SignoutButton />
          ) : (
            <Button variant="default">
              <Link href={ROUTES.LOGIN}>Get Started</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
