'use client'

import { HomeIcon, SettingsIcon } from "lucide-react";
import { Sidebar, SidebarFooter, SidebarHeader, SidebarMain, SidebarNav, SidebarNavHeader, SidebarNavHeaderTitle, SidebarNavLink, SidebarNavMain } from "@/components/dashboard/sidebar";
import { usePathname, } from "next/navigation";
import { UserDropdown } from "./user-dropdown";


export function MainSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return  pathname === path 
  }
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-4">
      <Sidebar>
        <SidebarHeader>
          <h1></h1>
        </SidebarHeader>
        <SidebarMain className="flex flex-col flex-grow">
          <SidebarNav>
            <SidebarNavMain>
              <SidebarNavLink href="/app" active={isActive('/app')}>
              <HomeIcon size={14} className="mr-1" />
              Tarefas
              </SidebarNavLink>
              <SidebarNavLink href="/app/settings" active={isActive('/app/settings')}>
              <SettingsIcon size={14} className="mr-1" />
              Configurações
              </SidebarNavLink>
            </SidebarNavMain>
          </SidebarNav>

          <SidebarNav className="mt-auto">
            <SidebarNavHeader>
              <SidebarNavHeaderTitle>
                <p>links extras</p>
              </SidebarNavHeaderTitle>
            </SidebarNavHeader>
            <SidebarNavMain>
              <SidebarNavLink href="/">ajuda</SidebarNavLink>
              <SidebarNavLink href="/app/settings">Site</SidebarNavLink>
            </SidebarNavMain>
          </SidebarNav>
        </SidebarMain>
        <SidebarFooter>
         <UserDropdown />
        </SidebarFooter>
      </Sidebar>

    
    </div>
  );
}