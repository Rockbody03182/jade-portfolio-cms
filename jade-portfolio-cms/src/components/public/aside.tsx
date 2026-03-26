import Link from "next/link";
type AsideProps = {
  activeSection: string;
  onNavClick: (section: string) => void;
  isAsideOpen: boolean;
  onToggle: () => void;
};

export default function Aside({
  activeSection,
  onNavClick,
  isAsideOpen,
  onToggle,
}: AsideProps) {
  return (
    <aside className={isAsideOpen ? "aside open" : "aside"}>
      <div className="logo">
        <Link href="/">Jade</Link>
      </div>

      <div
        className={isAsideOpen ? "nav-toggler open" : "nav-toggler"}
        onClick={onToggle}
      >
        <span></span>
      </div>

      <ul className="nav">
        <li>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => onNavClick("home")}
          >
          <i className="fa fa-home"></i> Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => onNavClick("about")}
          >
            <i className="fa fa-user"></i> About
          </a>
        </li>
        <li>
          <a href="#service"
            className={activeSection === "service" ? "active" : ""}
            onClick={() => onNavClick("service")}
          >
            <i className="fa fa-list"></i> Service
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : ""}
            onClick={() => onNavClick("portfolio")}
          >
            <i className="fa fa-briefcase"></i> Portfolio
          </a>
        </li>
        <li>
          <a href="#project"
            className={activeSection === "project" ? "active" : ""}
            onClick={() => onNavClick("project")}
          >
            <i className="fa fa-envelope"></i> Project
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => onNavClick("contact")}
          >
            <i className="fa fa-comments"></i> Contact
          </a>
        </li>
      </ul>
    </aside>
  );
}