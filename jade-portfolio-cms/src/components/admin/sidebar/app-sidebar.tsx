"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Logo from "@/assets/logo/logo";
import { NavItem, NavMain } from "@/components/admin/sidebar/nav-main";
import {
  AlignStartVertical,
  PieChart,
  CircleUserRound,
  ClipboardList,
  Notebook,
  NotepadText,
  Table,
  Languages,
  Ticket,
} from "lucide-react";

export const navData: NavItem[] = [
  // 오늘 들어온 문의 수 / 공개 프로젝트 수 / Draft 수 / “Public 반영 상태(Last revalidate)” 표시
  { label: "Dashboard", isSection: true }, 
  {
    title: "Overview",
    icon: PieChart,
    href: "/admin",
  },

  // 목록(List) / 상세(Detail) / 작성(Create) / 수정(Edit)
  { label: "Content", isSection: true },
  {
    title: "Projects",
    icon: ClipboardList,
    children: [
      { title: "All Projects", href: "/admin/projects" },
      { title: "Create Project", href: "/admin/projects/create" },
    ],
  },
  // Contacts (문의함)
  { 
    title: "Contacts",
    icon: Notebook,
    children: [
      { title: "Inbox", href: "/admin/contacts" },
      { title: "Archived", href: "/admin/contacts/archived" },
    ],
  },

  // ================= System =================
  { label: "System", isSection: true },
  {
    title: "Settings",
    icon: CircleUserRound,
    children: [
      { title: "Profile", href: "/admin/settings/profile" },
      { title: "Site Settings", href: "/admin/settings/site" },
    ],
  },
  // 상태 기록 로그 누가 언제 무엇을 변경했는지 기록
  {
    title: "Audit Logs",
    icon: Table,
    href: "/admin/logs",
  },
  // 권한 분리 (확장가능) / Superbase RLS 연결
  {
    title: "Roles",
    icon: AlignStartVertical,
    href: "/admin/roles",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="px-0 h-full [&_[data-slot=sidebar-inner]]:h-full">
      <div className="flex flex-col gap-6">
        {/* ---------------- Header ---------------- */}
        <SidebarHeader className="px-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <a href="#" className="w-full h-full">
                <Logo />
              </a>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* ---------------- Content ---------------- */}
        <SidebarContent className="overflow-hidden">
          <ScrollArea className="h-[calc(100vh-100px)]">
            <div className="px-4">
              <NavMain items={navData} />
            </div>
          </ScrollArea>
        </SidebarContent>
      </div>
    </Sidebar>
  );
}
