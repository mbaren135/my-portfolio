import s from "../content.module.css"

export default function ATSCardContent() {
  return (
    <>
      <div className={s.content}>
        <p>
          As a <strong>Software Developmer</strong> at{" "}
          <strong>HirexHire</strong>, a Chicago-based recruiting firm, I am part
          of a dynamic development team responsible for building an{" "}
          <strong>applicant tracking system</strong> using{" "}
          <strong>Next.js</strong>. My primary responsibilities include
          designing and implementing the <strong>user interface (UI)</strong>{" "}
          and optimizing <strong>data manipulation and retrieval</strong> from
          the underlying database.
        </p>
        <p>
          One of the key features I contributed to is the{" "}
          <strong>job creation workflow</strong>, where I developed a procedure
          that leverages <strong>OpenAI</strong> to generate job descriptions
          for newly created positions. This feature enhances efficiency and
          streamlines the hiring process, demonstrating my ability to integrate
          AI-driven solutions into web applications.
        </p>
      </div>
    </>
  );
}
