import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Download } from "lucide-react";
import Link from "next/link";

export function AboutMe() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <SectionHeading title="About Me" description="" />
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground md:text-lg/relaxed space-y-4">
            <p>
              I am Zach Phillipe P. Abellar, currently residing in Cebu,
              Philippines. I am a dedicated student at Cordova Public College,
              where I am continuously developing my knowledge and skills in the
              field of technology.
            </p>
            <p>
              I specialize in designing websites and creating user-friendly
              interfaces using tools such as Figma and WordPress. I have a strong
              passion for visual design and enjoy turning ideas into functional
              and appealing digital experiences. In addition to my studies, I am
              a working student at McDonald&apos;s, which helps support my
              education and teaches me valuable skills such as time management,
              responsibility, and adaptability.
            </p>
            <p>
              I am highly motivated to grow in the field of programming and am
              committed to learning more about modern technologies to improve my
              skills and build a successful career in the tech industry.
            </p>
          </div>
          <div>
            <Button size="lg" className="group" asChild>
              <Link href="https://docs.google.com/document/d/1eDHypor1Cpc7PU7mcN8epjAqpy3J1hts/edit" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
