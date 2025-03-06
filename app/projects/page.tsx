import { Footer } from "@/components";
import CardCarousel from "./carousel";
import { ProjectCardType } from "../../types";
import s from "./projects.module.css";

export default function Projects() {
  const projects: ProjectCardType[] = [
    {
      title: "Test 1",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nesciunt pariatur doloremque nam laborum ipsum ipsa, dignissimos facere est sint ut sequi aspernatur aliquam, vitae, a quibusdam? Harum, corporis officia!",
    },
    {
      title: "Test 2",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nesciunt pariatur doloremque nam laborum ipsum ipsa, dignissimos facere est sint ut sequi aspernatur aliquam, vitae, a quibusdam? Harum, corporis officia!",
    },
    {
      title: "Test 3",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nesciunt pariatur doloremque nam laborum ipsum ipsa, dignissimos facere est sint ut sequi aspernatur aliquam, vitae, a quibusdam? Harum, corporis officia!",
    },
    {
      title: "Test 4",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nesciunt pariatur doloremque nam laborum ipsum ipsa, dignissimos facere est sint ut sequi aspernatur aliquam, vitae, a quibusdam? Harum, corporis officia!",
    },
    {
      title: "Test 5",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nesciunt pariatur doloremque nam laborum ipsum ipsa, dignissimos facere est sint ut sequi aspernatur aliquam, vitae, a quibusdam? Harum, corporis officia!",
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
