import "./public.css";
import "./skins/pink.css";
import type { ReactNode } from "react";
import { Rubik, Montserrat  } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="public-layout">{children}</div>;
}