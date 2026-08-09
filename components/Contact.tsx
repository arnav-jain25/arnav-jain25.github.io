import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell">
        <span className="eyebrow" data-reveal>
          Open to senior AI engineering roles
        </span>
        <h2 data-reveal>
          If you are building something where people and agents have to work together, I would
          like to hear about it.
        </h2>
        <div className="contact-links" data-reveal>
          <a className="btn" href="mailto:arnav.jaina25@gmail.com">
            <MailIcon />
            arnav.jaina25@gmail.com
          </a>
          <a
            className="btn ghost"
            href="https://www.linkedin.com/in/reacharnav/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a className="btn ghost" href="https://github.com/arnav-jain25" target="_blank" rel="noreferrer">
            <GitHubIcon />
            GitHub
          </a>
          <a className="btn ghost" href="/resume.docx">
            <FileIcon />
            Résumé
          </a>
        </div>
        <div className="foot">
          <span>Arnav Jain · Atlanta Metro, GA</span>
        </div>
      </div>
    </section>
  );
}
