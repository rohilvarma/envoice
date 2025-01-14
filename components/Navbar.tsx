import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
const Navbar = () => {
  return (
    <nav className="border-b border-gray-600 px-2 flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="secondary">
          <Link href={ROUTES.LOGIN}>Login</Link>
        </Button>
        <Button variant="default">
          <Link href={ROUTES.SIGNUP}>Get Started</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
