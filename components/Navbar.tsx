import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";
import SignoutButton from "./SignoutButton";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/lib/auth";

const Navbar = async () => {
  const session = await getServerSession(authConfig);
  return (
    <nav className="border-b border-gray-600 py-4">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="">
            {session?.user ? (
              <SignoutButton />
            ) : (
              <Button variant="default">
                <Link href={ROUTES.LOGIN}>Get Started</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
