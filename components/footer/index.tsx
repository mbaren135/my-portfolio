import { FileOpenIcon, GithubIcon, LinkedInIcon } from "@/assets/icons";

import s from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <a
        href="https://linkedin.com/in/michael-baren-79405727a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
        LinkedIn
      </a>
      <a
        href="https://github.com/mbaren135"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        Github
      </a>
      <a
        href="/files/resume.pdf"
        download="Michael_Baren_Resume_2025.pdf"
        target="_blank"
      >
        <FileOpenIcon />
        Resume
      </a>
    </footer>
  );
}