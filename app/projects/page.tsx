import Image from "next/image";
import { Footer } from "@/components";
import CardCarousel from "./carousel";
import { ProjectCardType } from "../../types";
import s from "./projects.module.css";
import { PortfolioCard, ATSCardContent } from "./carousel/card-contents";

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
          // width={1740}
          // height={770}
          fill
          // sizes="50%"
        />
      ),
      content: <ATSCardContent />,
    },
    // {
    //   title: "Test",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iste. Vitae nisi a libero neque temporibus fuga ducimus debitis, maiores quidem dolore nam, numquam possimus excepturi quo consequatur. Tempora, maiores!",
    // },
    // {
    //   title: "Test",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iste. Vitae nisi a libero neque temporibus fuga ducimus debitis, maiores quidem dolore nam, numquam possimus excepturi quo consequatur. Tempora, maiores!",
    // },
    // {
    //   title: "Test",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iste. Vitae nisi a libero neque temporibus fuga ducimus debitis, maiores quidem dolore nam, numquam possimus excepturi quo consequatur. Tempora, maiores!",
    // },
    // {
    //   title: "Test",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iste. Vitae nisi a libero neque temporibus fuga ducimus debitis, maiores quidem dolore nam, numquam possimus excepturi quo consequatur. Tempora, maiores!",
    // },
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
