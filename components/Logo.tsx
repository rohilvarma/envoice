"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type LogoProps = {
  mobileOnly?: boolean;
};

const Logo = ({ mobileOnly = false }: LogoProps) => {
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

  const mobileLogo = (
    <Image
      src={
        resolvedTheme === "dark"
          ? "/mobile-dark-logo.svg"
          : "/mobile-light-logo.svg"
      }
      alt="Envoice App Logo"
      width={50}
      height={50}
      className={mobileOnly ? "" : "md:hidden"}
      priority
    />
  );

  const desktopLogo = (
    <Image
      src={resolvedTheme === "dark" ? "/dark-logo.svg" : "/light-logo.svg"}
      alt="Envoice App Logo"
      width={125}
      height={125}
      className="hidden md:block"
      priority
    />
  );

  return (
    <div className="">
      {mobileLogo}
      {!mobileOnly && desktopLogo}
    </div>
  );
};

export default Logo;
