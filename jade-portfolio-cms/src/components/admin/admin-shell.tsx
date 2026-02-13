"use client";

import type { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/sidebar/app-sidebar";

export default function AdminShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="sticky top-0 z-50 flex h-14 items-center border-b bg-background px-4">
          <SidebarTrigger />
        </header>

        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
