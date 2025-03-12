import Image from "next/image";
import { Footer } from "@/components";
import CardCarousel from "./carousel";
import { PortfolioCard, ATSCardContent } from "./carousel/card-contents";
import { ProjectCardType } from "../../types";
import s from "./projects.module.css";

export default function Projects() {
  const projects: ProjectCardType[] = [
    {
      title: "My Portfolio",
      content: <PortfolioCard />,
    },
    {
      title: "Applicant Tracking System",
      image: (
        <Image
          src="/images/ATS-job-example.png"
          alt="Michael Baren headshot"
          fill
          sizes="100%"
        />
      ),
      content: <ATSCardContent />,
    },
  ];

  return (
    <div className={s.page}>
      <main className={s.main}>
        <CardCarousel projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
