import s from "../content.module.css";

export default function PortfolioCard() {
  return (
    <div className={s.content}>
      <p>
        This website was developed using <strong>Next.js</strong> over the
        course of several weeks and deployed using <strong>Vercel</strong>.
        Throughout the process, I gained valuable experience in{" "}
        <em>project organization</em>, <em>version control</em>, and best
        practices for efficient web development.
      </p>
      <p>
        The project initially began as an opportunity to refine my{" "}
        <strong>CSS</strong> skills. Over time, it evolved into a structured
        platform to showcase my work and serve as a repository for future
        projects. The <strong>public github repository</strong> for this site can be found{" "}
        <a href="https://github.com/mbaren135/my-portfolio" target="_blank">
          here
        </a>.
      </p>
    </div>
  );
}
