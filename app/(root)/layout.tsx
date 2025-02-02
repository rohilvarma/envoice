import Footer from "@/components/Footer";
import PublicNavbar from "@/components/Navbar";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <PublicNavbar />
      {children}
      <Footer />
    </section>
  );
}
