import Image from "next/image";
import { Footer } from "@/components";
import s from "./about.module.css";

export default function About() {
  return (
    <div className={s.page}>
      <main className={s.main}>
        <div className={`${s.section} ${s.leftAligned}`}>
          <div className={s.sectionContent}>
            <p>
              I am set to graduate from Purdue University in May 2025 with a
              bachelor&apos;s degree in Computer Science. Throughout my academic
              journey, I have gained experience in object-oriented programming,
              data structures and algorithms, machine learning, computer
              graphics, computer networking, and systems programming. I have
              worked with a diverse range of languages and libraries, including
              C, C++, Java (utilizing the Swing library for GUIs), and Python,
              using libraries such as PyTorch, Pandas, and PyShark.
            </p>
            <p>
              My passion for computer science began in my senior year of high
              school, during my first experience with coding. The ability to
              craft elegant and efficient solutions to complex problems was what
              initially drew me to the field and continues to drive me to refine
              my skills. As a child, I was captivated by jigsaw puzzles, and
              that same sense of fulfillment I felt in solving them now fuels my
              enthusiasm for programming.
            </p>
          </div>
          <div className={s.sectionImage}>
            <Image
              className={s.image}
              src="/images/Bell-Tower.jpg"
              alt="Purdue University Department of CS logo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className={`${s.section} ${s.rightAligned}`}>
          <div className={s.sectionImage}>
            <Image
              className={s.image}
              src="/images/headshot.JPG"
              alt="Michael Baren headshot"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={s.sectionContent}>
            <p>
              Beyond academics, I was a nationally recognized gymnast for 12
              years before transitioning to cheerleading as a junior in high
              school. I was honored to be a three-time member of the U.S.
              National Junior Coed Cheerleading Team, representing my country on
              the international stage. Additionally, I was a four-year member of
              the Purdue University cheerleading team. Balancing the demands of
              being a full-time student-athlete instilled in me invaluable
              lessons in dedication, time management, and teamwork, while also
              fostering lifelong relationships that I will always cherish.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
