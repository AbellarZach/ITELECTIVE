import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Download } from "lucide-react";
import Link from "next/link";


export function AboutMe() {

        return (
               <div className="hover:shadow-lg hover:-translate-y-1 h-full group relative overflow-hidden rounded-lg border bg-background bg-muted rounded-lg bg-gray-100 mb-30 pl-5 mr-15 ">
                <div className="space-y-12 text-center md:text-left lg:px-10 pb-10 mt-20 mb-20">
                                <SectionHeading title="About Me" description="" />
                                <p className= "mr-10 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed lspace-y-6 text-justify "> 
                                    I am Zach Phillipe P. Abellar, currently residing in Cebu, Philippines. I am a dedicated student at Cordova Public College, where I am continuously developing my knowledge and skills in the field of technology.  
                                    I specialize in designing websites and creating user-friendly interfaces using tools such as Figma and WordPress. I have a strong passion for visual design and enjoy turning ideas into functional and appealing digital experiences. In addition to my studies, I am a working student at McDonald’s, which helps support my education and teaches me valuable skills such as time management, responsibility, and adaptability. I am highly motivated to grow in the field of programming and am committed to learning more about modern technologies to improve my skills and build a successful career in the tech industry
                                </p>
                                <div className="mt-20">
                                 <Button size="lg" className="group" asChild>
                        <Link href="https://docs.google.com/document/d/1eDHypor1Cpc7PU7mcN8epjAqpy3J1hts/edit" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </Link>
                    </Button>
                    </div>
                </div>
        </div>
        )
}