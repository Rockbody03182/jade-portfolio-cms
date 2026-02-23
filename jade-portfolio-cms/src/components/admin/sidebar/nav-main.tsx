"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export type NavItem =
  | { label: string; isSection: true }
  | { title: string; href: string; icon?: LucideIcon; children?: never }
  | {
      title: string;
      icon?: LucideIcon;
      children: { title: string; href: string }[];
      href?: never;
    };

function isActivePath(pathname: string, href: string) {
  if (href === "#") return false;
  return pathname === href || pathname.startsWith(href + "/");
}

export function NavMain({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item, idx) => {
          // 1) 섹션 타이틀
          if ("isSection" in item && item.isSection) {
            return (
              <SidebarGroupLabel key={`${item.label}-${idx}`} className="px-0">
                {item.label}
              </SidebarGroupLabel>
            );
          }

          // 2) 아코디언(children)
          if ("children" in item && item.children?.length) {
            const defaultOpen = item.children.some((c) =>
              isActivePath(pathname, c.href)
            );
            
            return (
              <SidebarMenuItem key={item.title}>
                <Collapsible defaultOpen={defaultOpen} className="group/collapsible">
                  <CollapsibleTrigger asChild>
                    {/* ✅ Trigger는 Link 없이 “버튼”만 */}
                    <SidebarMenuButton className="cursor-pointer">
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children.map((child) => (
                        <SidebarMenuSubItem key={child.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={isActivePath(pathname, child.href)}
                            className="cursor-pointer"
                          >
                            <Link href={child.href}>
                              <span>{child.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            );
          }

          // 3) 단일 링크
          const active = isActivePath(pathname, item.href);

          return (
            
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={active} className="cursor-pointer">
                <Link href={item.href}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}