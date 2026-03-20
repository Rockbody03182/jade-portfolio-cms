import {
  House,
  User,
  List,
  Briefcase,
  FolderKanban,
  MessageCircle,
} from "lucide-react";
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
        <Link href="/">JADE</Link>
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
          <House className="fa" size={15} /> Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => onNavClick("about")}
          >
            <User className="fa" size={15} /> About
          </a>
        </li>
        <li>
          <a href="#services"
            className={activeSection === "services" ? "active" : ""}
          >
            <List className="fa" size={15} /> Service
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : ""}
            onClick={() => onNavClick("portfolio")}
          >
            <Briefcase className="fa" size={15} /> Portfolio
          </a>
        </li>
        <li>
          <a href="#project"
            className={activeSection === "project" ? "active" : ""}
          >
            <FolderKanban className="fa" size={15} /> Project
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => onNavClick("contact")}
          >
            <MessageCircle className="fa" size={15} /> Contact
          </a>
        </li>
      </ul>
    </aside>
  );
}