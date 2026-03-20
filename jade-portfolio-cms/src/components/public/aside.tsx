import {
  House,
  User,
  List,
  Briefcase,
  FolderKanban,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className="aside">
      <div className="logo">
        <Link href="/">JADE</Link>
      </div>

      <div className="nav-toggler">
        <span></span>
      </div>

      <ul className="nav">
        <li>
          <a href="#home" className="active">
            <House className="fa" size={15} /> Home
          </a>
        </li>
        <li>
          <a href="#about">
            <User className="fa" size={15} /> About
          </a>
        </li>
        <li>
          <a href="#services">
            <List className="fa" size={15} /> Service
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <Briefcase className="fa" size={15} /> Portfolio
          </a>
        </li>
        <li>
          <a href="#project">
            <FolderKanban className="fa" size={15} /> Project
          </a>
        </li>
        <li>
          <a href="#contact">
            <MessageCircle className="fa" size={15} /> Contact
          </a>
        </li>
      </ul>

      <div className="copyright-text">© 2026 Jade Portfolio</div>
    </aside>
  );
}