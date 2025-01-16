import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LANDING_PAGE_CONTENT, ROUTES } from "@/lib/constants";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-6 md:mt-[10%] mx-auto">
      <section id="hero">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="font-bold md:font-black text-3xl md:text-7xl">
            {LANDING_PAGE_CONTENT.HERO.title}
          </h1>
          <p className="text-gray-400 font-medium max-w-3xl mx-auto md:text-xl md:mt-2">
            {LANDING_PAGE_CONTENT.HERO.subtitle}
          </p>
          <div className="mt-4">
            <Button variant="default">
              <Link href={ROUTES.LOGIN} className="flex items-center gap-2">
                {LANDING_PAGE_CONTENT.HERO.button} <MoveRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section id="features" className="my-64 ">
        <div className="text-center">
          <h1 className="font-bold md:font-black text-3xl md:text-5xl max-w-5xl mx-auto">
            {LANDING_PAGE_CONTENT.FEATURES.title}
          </h1>
          <p className="text-gray-400 font-medium max-w-3xl mx-auto md:text-xl md:mt-2">
            {LANDING_PAGE_CONTENT.FEATURES.description}
          </p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {LANDING_PAGE_CONTENT.FEATURES.feature_cards.map((f, index) => {
            const IconComponent = f.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>
                    <IconComponent />{" "}
                    <span className="mt-2 text-lg">{f.title}</span>
                  </CardTitle>
                  <CardDescription>{f.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>
      <section id="pricing"></section>
      <section id="faq"></section>
    </div>
  );
}
