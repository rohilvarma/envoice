import { Button } from "@/components/ui/button";
import { Copyright } from "lucide-react";

const Footer = () => {
  const currDate = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-600 py-4 md:py-8">
      <div className="container flex flex-col md:flex-row gap-2 items-center justify-between text-muted-foreground">
        <div className="flex items-center gap-2">
          <Copyright />
          <span className=""> {currDate} Envoice. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <Button variant="link" className="">
            Terms
          </Button>
          <Button variant="link" className="">
            Privacy
          </Button>
          <Button variant="link" className="">
            Contact
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
