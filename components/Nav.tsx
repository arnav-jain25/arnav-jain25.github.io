const LINKS = [
  { href: "/#experience", num: "01", label: "Experience" },
  { href: "/#work", num: "02", label: "Work" },
  { href: "/#approach", num: "03", label: "Approach" },
  { href: "/#capabilities", num: "04", label: "Capabilities" },
  { href: "/#about", num: "05", label: "About" },
];

export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <span className="nav-progress" id="navProgress" />
      <div className="shell nav-in">
        <a className="wordmark" href="/#top">
          Arnav Jain<s>.</s>
        </a>
        <ul className="nav-links" id="navLinks">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>
                <span className="num">{link.num}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="nav-here">
          <i />
          <b id="navHere">Intro</b>
        </span>
        <a className="nav-cta" href="/#contact">
          Get in touch
        </a>
      </div>
    </nav>
  );
}
