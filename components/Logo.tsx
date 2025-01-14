"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show nothing until mounted
  if (!mounted) {
    return null;
  }
  return (
    <Link href={"/"}>
      <Image
        src={
          resolvedTheme === "dark"
            ? "/dark-mobile-logo.png"
            : "/light-mobile-logo.png"
        }
        alt="Envoice App Logo"
        width={50}
        height={50}
        className="md:hidden"
      />
      <Image
        src={resolvedTheme === "dark" ? "/dark-logo.png" : "/light-logo.png"}
        alt="Envoice App Logo"
        width={150}
        height={50}
        className="hidden md:block"
      />
    </Link>
  );
};

export default Logo;
